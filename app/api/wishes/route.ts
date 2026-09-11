import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_WISHES } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

const DIR = join(process.cwd(), "data");
const FILE = join(DIR, "wishes.json");

async function ensureFile(): Promise<void> {
  try {
    await readFile(FILE, "utf-8");
  } catch {
    const seed: Wish[] = DEFAULT_WISHES.map((w, i) => ({
      id: randomUUID(),
      name: w.name,
      message: w.message,
      createdAt: Date.now() - (DEFAULT_WISHES.length - i) * 1000,
    }));
    await mkdir(DIR, { recursive: true });
    await writeFile(FILE, JSON.stringify(seed, null, 2), "utf-8");
  }
}

async function readWishes(): Promise<Wish[]> {
  const raw = await readFile(FILE, "utf-8");
  return JSON.parse(raw) as Wish[];
}

export async function GET(req: NextRequest) {
  await ensureFile();
  const wishes = await readWishes();
  const all = [...wishes].sort((a, b) => b.createdAt - a.createdAt);

  const page = Math.max(1, Number(req.nextUrl.searchParams.get("page")) || 1);
  const limit = Math.max(
    1,
    Math.min(50, Number(req.nextUrl.searchParams.get("limit")) || 4)
  );
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;

  return NextResponse.json({
    wishes: all.slice(start, start + limit),
    total,
    totalPages,
    page,
  });
}

export async function POST(req: NextRequest) {
  let body: { name?: string; message?: string } | null = null;
  try {
    body = (await req.json()) as { name?: string; message?: string };
  } catch {
    body = null;
  }

  const name = body?.name?.trim().slice(0, 60);
  const message = body?.message?.trim().slice(0, 500);
  if (!name || !message) {
    return NextResponse.json(
      { error: "Nama dan ucapan wajib diisi" },
      { status: 400 }
    );
  }

  await ensureFile();
  const wishes = await readWishes();
  const wish: Wish = {
    id: randomUUID(),
    name,
    message,
    createdAt: Date.now(),
  };
  wishes.push(wish);
  await writeFile(FILE, JSON.stringify(wishes, null, 2), "utf-8");

  return NextResponse.json(wish, { status: 201 });
}