"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MUSIC_URL } from "@/lib/site-data";

type InvitationContextValue = {
  opened: boolean;
  guestName: string;
  setGuestName: (name: string) => void;
  openInvitation: () => void;
  musicPlaying: boolean;
  toggleMusic: () => void;
};

const InvitationContext = createContext<InvitationContextValue | null>(null);

export function InvitationProvider({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const createAudio = useCallback(() => {
    if (!MUSIC_URL) return null;
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_URL);
      audio.loop = true;
      audio.volume = 0.6;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    const audio = createAudio();
    if (!audio) return;
    const onPlaying = () => setMusicPlaying(true);
    const onPause = () => setMusicPlaying(false);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [createAudio]);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const toggleMusic = useCallback(() => {
    const audio = createAudio();
    if (!audio) return;
    if (audio.paused) {
      void audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [createAudio]);

  const openInvitation = useCallback(() => {
    setOpened(true);
    void createAudio()?.play().catch(() => {});
  }, [createAudio]);

  return (
    <InvitationContext.Provider
      value={{
        opened,
        guestName,
        setGuestName,
        openInvitation,
        musicPlaying,
        toggleMusic,
      }}
    >
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const ctx = useContext(InvitationContext);
  if (!ctx) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }
  return ctx;
}