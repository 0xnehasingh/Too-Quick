
"use client";
import { useState, useEffect } from "react";
import { User } from "../types/User";

export function useUserData(address?: string) {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (!address) return;

    // Mock data for now
    setUserData({
      address,
      points: 0,
      completedQuests: [],
      ensName: '',
      rank: 1
    });
  }, [address]);

  return { userData };
}