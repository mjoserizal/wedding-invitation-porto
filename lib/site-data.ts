export const COUPLE = {
  groom: {
    name: "Freakyjoo",
    nickname: "Joo",
    male: true,
    instagram: "@freakyjoo",
    photo: "/steve_rogers.jpg",
    family:
      "Putra pertama dari Bapak Ahmad Joo & Ibu Siti Joo",
  },
  bride: {
    name: "Unknown",
    nickname: "Nia",
    male: false,
    instagram: "@unknownn",
    photo: "/peggy_carter.webp",
    family:
      "Putri kedua dari Bapak Budi Unknown & Ibu Rina Unknown",
  },
};

export const WEDDING_DATE = new Date("2027-06-12T08:00:00+07:00");

export const EVENT_DETAILS = {
  dateLabel: "Sabtu, 12 Juni 2027",
  location: "Grand Garden Resort",
  city: "Jakarta Selatan",
};

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Jakarta+Selatan&t=m&z=13&ie=UTF8&iwloc=&output=embed";

export const EVENT_AKAD = {
  title: "Akad Nikah",
  date: "Sabtu, 12 Juni 2027",
  time: "08.00 - 10.00 WIB",
  location: "Grand Garden Resort",
  address: "Jalan Raya Kebun Indah No. 12",
  city: "Jakarta Selatan",
  mapsUrl: "https://maps.google.com/?q=Jakarta+Selatan",
};

export const EVENT_RESEPSI = {
  title: "Resepsi",
  date: "Sabtu, 12 Juni 2027",
  time: "11.00 - 15.00 WIB",
  location: "Grand Garden Resort",
  address: "Jalan Raya Kebun Indah No. 12",
  city: "Jakarta Selatan",
  mapsUrl: "https://maps.google.com/?q=Jakarta+Selatan",
};

export const STORY = [
  {
    year: "2019",
    title: "Pertama Bertemu",
    description:
      "Pertemuan tak terduga di sebuah kafe kecil, berawal dari senyuman yang membuat hari terasa lebih cerah.",
  },
  {
    year: "2022",
    title: "Jatuh Cinta",
    description:
      "Perjalanan yang panjang mengajarkan kami arti sabar, saling mengerti, dan memilih satu sama lain setiap hari.",
  },
  {
    year: "2024",
    title: "Lamaran",
    description:
      "Di bawah langit senja yang indah, permintaan sederhana itu dijawab dengan 'mau' yang penuh kebahagiaan.",
  },
  {
    year: "2027",
    title: "Menikah",
    description:
      "Dengan restu kedua keluarga, kami memantapkan langkah untuk saling menjanjikan cinta seumur hidup.",
  },
] as const;

export const WEDDING_GALLERY = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2",
] as const;

export const MUSIC_URL = "";

export const PREWED_YOUTUBE_URL =
  "https://www.youtube.com/embed/y4bSFu5DySE";

export const LOTTIE_FLOWER_PATH = "/Floral%20Animated%20Design.json";

export const FLOWER_JSON_PATH = "/flower.json";

export const UANDI_LOTTIE_PATH = "/uandi.json";

export const SAWERIA_WIDGET_URL =
  "https://saweria.co/widgets/qr?streamKey=9c636b2ee15af8dbd2c920961cc0f8b3";

export const SAWERIA_QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&color=143-163-170&bgcolor=255-255-255&data=${encodeURIComponent(
  SAWERIA_WIDGET_URL
)}`;

export const DEFAULT_WISHES = [
  {
    name: "Keluarga Besar Prasetyo",
    message:
      "Selamat menempuh hidup baru, semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
  },
  {
    name: "Sahabat SMA",
    message:
      "Akhirnya! Semoga langgeng sampai kakek nenek ya. Bahagia selalu!",
  },
  {
    name: "Rekan Kerja Joo",
    message:
      "Selamat ya Joo! Semoga pernikahan kalian diberkahi dan selalu dilimpahi kebahagiaan.",
  },
] as const;

export const COVER_IMAGES = {
  background: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
};

export const ORNAMENT = {
  primary:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
};