'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import SingleLineList from '../components/home/SingleLineList';
import { getMany, queryMarkets } from "@/services/api-helpers";
// import {cardsInfo} from '../resources/homeCardsInfo';

// query markets and pass them as props to the SingleLineList component
const markets = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
export default function Home() {
  const [marketData, setMarketData ] = useState([]);
    useEffect(() =>{
      queryMarkets()
    getMany().then(res=>{
      console.log(res);
    })

  }, [])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center bg-white dark:bg-black sm:items-start">
        {
          // markets.map
        }
      </main>
    </div>
  );
}
