"use client"
import Server from '@/components/Server';
import '@/app/globals.css'
import { useUserContext } from '@/context/UserProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ServerList() {
    const router = useRouter()
    const { user, setUser } = useUserContext();
    
    useEffect(() => {
        if(user.username === '' && user.userPassword === '') {
            router.push("/login")
        }
    });
    
    return(
        <div className="relative flex items-left min-h-screen overflow-hidden"
            style={{
            backgroundImage: `url('/assets/img2.png')`,
            height: "720px",
            }}>
            <Server></Server>
        </div>
    )
}