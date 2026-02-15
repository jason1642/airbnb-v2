'use client'
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
export default function Page() {
    const params = useParams();
    
    useEffect(() => {
        if (params.id){
            console.log(params.id[0])
        }
      
    }, [])
    return (
        <div>Single room page based on {params.id}</div>
    );
}