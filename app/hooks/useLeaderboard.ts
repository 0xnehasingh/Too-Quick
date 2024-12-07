// hooks/useLeaderboard.ts
import { useState, useEffect } from "react";
import { useReadContract, useWatchContractEvent } from "wagmi";
import { questHubABI } from "../contracts/abi";
import { type User } from "../types/User";

const QUEST_HUB_ADDRESS = process.env.NEXT_PUBLIC_QUEST_HUB_ADDRESS as `0x${string}`;
const LEADERBOARD_LIMIT = 10;

export function useLeaderboard() {
  const [users, setUsers] = useState<User[]>([]);

  // Read current leaderboard data using Wagmi v2 syntax
  const { data: leaderboardData, refetch } = useReadContract({
    address: QUEST_HUB_ADDRESS,
    abi: questHubABI,
    functionName: 'getTopUsers',
    args: [LEADERBOARD_LIMIT],
  });

  // Watch for leaderboard updates
  useWatchContractEvent({
    address: QUEST_HUB_ADDRESS,
    abi: questHubABI,
    eventName: 'LeaderboardUpdated',
    onLogs: () => {
      refetch(); // Refetch leaderboard data when updates occur
    },
  });

  // Process leaderboard data
  useEffect(() => {
    if (!leaderboardData) return;

    const [addresses, points, ensNames] = leaderboardData as [string[], bigint[], string[]];
    const processedUsers: User[] = addresses.map((address: string, index: number) => ({
      address: address,
      points: Number(points[index]),
      ensName: ensNames[index] || undefined,
      completedQuests: [], // This could be fetched separately if needed
      rank: index + 1,
    }));

    setUsers(processedUsers);
  }, [leaderboardData]);

  return { users };
}