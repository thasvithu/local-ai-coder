import Sidebar from "@/components/Sidebar";
import ChatBox from "@/components/ChatBox";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-950 text-white">

      <Sidebar />

      <main className="flex-1 p-6">
        <ChatBox />
      </main>

    </div>
  );
}