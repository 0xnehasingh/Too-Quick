"use client";

import { useQuests } from "../hooks/useQuest";
import { QuestCard } from "./QuestCard";

export function QuestList() {
  const { quests, completeQuest } = useQuests();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Available Quests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
            onComplete={completeQuest}
          />
        ))}
      </div>
    </div>
  );
}