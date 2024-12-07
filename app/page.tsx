// app/page.tsx
import { NavBar } from "./components/NavBar";
import { QuestBoard } from "./components/QuestBoard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <QuestBoard />
      </div>
    </main>
  );
}