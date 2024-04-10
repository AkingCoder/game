"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
const Navbar = () => {
    const { data: session } = useSession()
    const handleAuth = (prop) => {
        if (prop == "google") {
            signIn("google")
        }
        else if (prop == "github") {
            signIn("github")
        }
        else {
            signOut()
        }
    }
    return (
        <nav className='bg-[#342952]'>
            <ul className='flex items-center justify-between px-4 py-2'>
                <li className='text-3xl font-semibold cursor-pointer text-white'><Link href='/'>Home</Link></li>
                <li> {session ?
                    <div>
                        <img src={session.user.image} alt="userImage" />
                        <button className='text-lg px-3 py-1 rounded-full bg-white' onClick={() => handleAuth()}>Sign out</button>
                    </div> :
                    <div className='flex gap-4'>
                        <button className='text-lg px-4 py-1 rounded-full bg-white text-black font-semibold' onClick={() => handleAuth("github")}>Github</button>
                        <button className='text-lg px-4 py-1 rounded-full bg-white text-black font-semibold'  onClick={() => handleAuth("google")}>Google</button>
                    </div>}</li>
            </ul>

        </nav>
    )
}

export default Navbar
