import { create } from "zustand";

type UserProfile = {
  notification: {
    message: string | null;
    actionLabel?: string;
  };
  cardValues: {
    wallet: number;
    tours: number;
    tickets: number;
  };
};

type UserProfileState = {
  userProfile: UserProfile;
  setNotification: (message: string | null, actionLabel?: string) => void;
  setCardValue: (key: keyof UserProfile["cardValues"], value: number) => void;
  fetchUserProfile: () => Promise<void>;
};

export const useUserProfileStore = create<UserProfileState>((set) => ({
  userProfile: {
    notification: { message: null, actionLabel: undefined },
    cardValues: {
      wallet: 0,
      tours: 0,
      tickets: 0,
    },
  },

  setNotification: (message, actionLabel) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        notification: { message, actionLabel },
      },
    })),

  setCardValue: (key, value) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        cardValues: {
          ...state.userProfile.cardValues,
          [key]: value,
        },
      },
    })),

  fetchUserProfile: async () => {
    try {
      const res = await fetch("/mocks/user-profile.json");
      const data: UserProfile = await res.json();
      set({ userProfile: data });
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    }
  },
}));
