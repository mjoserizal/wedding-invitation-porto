"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const toggleMusic = useCallback(() => {
    setMusicPlaying((p) => !p);
  }, []);

  const openInvitation = useCallback(() => {
    setOpened(true);
  }, []);

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