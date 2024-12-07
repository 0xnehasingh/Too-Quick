"use client";

import { useAccount } from "wagmi";
import { QuestList } from "./QuestList";
import { Profile } from "./Profile";
import { Leaderboard } from "./Leaderboard";

export function QuestBoard() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] space-y-4">
        <h2 className="text-2xl font-bold">Welcome to Base Quest Hub</h2>
        <p className="text-gray-600">Connect your wallet to start completing quests</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <QuestList />
      </div>
      <div className="space-y-8">
        <Profile />
        <Leaderboard />
      </div>
    </div>
  );
}