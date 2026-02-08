'use client'
import Image from "next/image";
import { useEffect } from "react";
import SingleLineList from '../components/home/SingleLineList';
import { getMany } from "@/services/api-helpers";
// import {cardsInfo} from '../resources/homeCardsInfo';

// query markets and pass them as props to the SingleLineList component
export default function Home() {
    useEffect(() =>{
    getMany().then(res=>{
      console.log(res);
    })

  }, [])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center bg-white dark:bg-black sm:items-start">
        <SingleLineList data={cardsInfo[0]}/>
        <SingleLineList data={cardsInfo[1]}/>
        <SingleLineList data={cardsInfo[2]}/>
      </main>
    </div>
  );
}
