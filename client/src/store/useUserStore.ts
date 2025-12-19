import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  profilePic: string;
  setProfilePic: (url: string) => void;
  resetProfilePic: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profilePic: "https://resources.premierleague.com/premierleague/badges/t43.svg", // Default to Man City
      setProfilePic: (url) => set({ profilePic: url }),
      resetProfilePic: () => set({ profilePic: "https://resources.premierleague.com/premierleague/badges/t43.svg" }),
    }),
    {
      name: "user-storage",
    }
  )
);
