"use client"

import Player1 from "./components/Player1"
import Link from "next/link"
import Player2 from "./components/Player2"
import Image from "next/image"
export default function Component() {
  return (
    <>
      <main className="flex flex-col gap-32">
        <div className="flex justify-between items-center px-4 py-5">
          <Player1 />
          <Player2 />
        </div>
        <div className="grid items-center justify-center gap-5">
          <Link href="/playGround"><button className="h-24 w-52 text-5xl rounded-full font-semibold bg-orange-600 shadow-xl shadow-orange-800">Start</button></Link>
          <button className="h-12 w-52 text-2xl rounded-full font-medium bg-orange-300 shadow-xl shadow-orange-800">Reset</button>
        </div>
      </main>
    </>
  )
}