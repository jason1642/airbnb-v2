'use client'
// import Image from "next/image";
import { useEffect, useState } from "react";
import SingleLineList from '../components/home/SingleLineList';
import { getMany, queryMarkets } from "@/services/api-helpers";
import ListingTypes from "@/types/listing";
// import {cardsInfo} from '../resources/homeCardsInfo';
interface AggregatedMarketData {
  market: string;
  listingsArray: [ListingTypes];
}

// query markets and pass them as props to the SingleLineList component
const markets = ['New York', 'Oahu', 'Montreal', 'Porto', 'Sydney', 'Barcelona'];
export default function Home() {
  const [marketData, setMarketData ] = useState<{market: string, listingsArray: [ListingTypes]}[]>([]);
    useEffect(() =>{
      markets.forEach(market => {
        queryMarkets({name: market, limit: 6}).then(res =>{
          console.log(res)
          setMarketData(prev => [...prev, {market: market, listingsArray: res.data}]);
        }).catch(err => console.log(err))
      })
    getMany().then(res=>{
      console.log(res);
    })

  }, [])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center bg-white dark:bg-black sm:items-start">
        {
          marketData && 
          marketData.map((item) => 
            <div key={item.market}>
              {SingleLineList(item)}
            </div>
           )
        }
      </main>
    </div>
  );
}
