"use client";

import { useLeaderboard } from "../hooks/useLeaderboard";
import { type User } from "../types/User";

function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function Leaderboard() {
  const { users } = useLeaderboard();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {users.length === 0 ? (
          <p className="text-gray-500">No quest completions yet</p>
        ) : (
          users.map((user, index) => (
            <LeaderboardItem key={user.address} user={user} rank={index + 1} />
          ))
        )}
      </div>
    </div>
  );
}

interface LeaderboardItemProps {
  user: User;
  rank: number;
}

function LeaderboardItem({ user, rank }: LeaderboardItemProps) {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-amber-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <span className={`font-bold ${getRankColor(rank)}`}>
          #{rank}
        </span>
        <span className="font-medium">
          {user.ensName || formatAddress(user.address)}
        </span>
      </div>
      <span className="font-semibold text-purple-600">
        {user.points} points
      </span>
    </div>
  );
}