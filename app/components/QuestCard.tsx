"use client";

import { Quest } from "../types/Quest";

interface QuestCardProps {
  quest: Quest;
  onComplete: (questId: string) => void;
}

export function QuestCard({ quest, onComplete }: QuestCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold">{quest.title}</h3>
      <p className="text-gray-600">{quest.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-purple-600">{quest.points} points</span>
        {!quest.completed && (
          <a
            href="https://www.basefairy.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onComplete(quest.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Complete Quest
          </a>
        )}
      </div>
    </div>
  );
}