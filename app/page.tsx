'use client'
import Image from "next/image";
import { useEffect } from "react";
import SingleLineList from '../components/home/SingleLineList';
import { getManyByQuery } from "@/services/api-helpers";



export default function Home() {
    useEffect(() =>{
    getManyByQuery({}).then(res=>{
      console.log(res);
    })

  }, [])
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
