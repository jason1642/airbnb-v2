'use client'
import Image from "next/image";
import SingleLineList from '../components/home/SingleLineList';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center bg-white dark:bg-black sm:items-start">
        <SingleLineList />
        <SingleLineList />
        <SingleLineList />
      </main>
    </div>
  );
}
