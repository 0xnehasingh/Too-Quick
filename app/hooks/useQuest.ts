"use client";
import { useState } from "react";
import { Quest } from "../types/Quest";

export function useQuests() {
  const [quests] = useState<Quest[]>([
    {
      id: '1',
      title: 'Register ENS Name',
      description: 'Register your first ENS name on Base',
      points: 100,
      requirements: {
        type: 'ENS_REGISTRATION'
      },
      completed: false
    },
    // Add more quests here
  ]);

  const completeQuest = async (questId: string) => {
    // Implement quest completion logic
    console.log('Completing quest:', questId);
  };

  return { quests, completeQuest };
}