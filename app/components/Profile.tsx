"use client";

import { useAccount } from "wagmi";
import { useUserData } from "../hooks/useUserData";

export function Profile() {
  const { address } = useAccount();
  const { userData } = useUserData(address);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>
      <div className="space-y-2">
        <p>
          <span className="font-medium">ENS Name:</span>{' '}
          {userData?.ensName || 'Not set'}
        </p>
        <p>
          <span className="font-medium">Points:</span> {userData?.points || 0}
        </p>
        <p>
          <span className="font-medium">Completed Quests:</span>{' '}
          {userData?.completedQuests?.length || 0}
        </p>
      </div>
    </div>
  );
}