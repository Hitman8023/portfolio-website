import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex items-center justify-center flex-col overflow-hidden w-full h-screen">
      <div className="w-full h-full m-0 p-0">
        <Hero />
      </div>
    </main>
  );
}

