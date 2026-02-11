
// import {useRouter } from 'next/router';
// import { useEffect } from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
    // const router = useRouter();
    // useEffect(() => {
    //     console.log(router.query.id)
    // }, [])
    return (
        <section>
            {children}
        </section>
    );
}  