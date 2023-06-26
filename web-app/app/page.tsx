'use client';
import { Button } from "@/components/button";
import React from "react"

export default function Home() {

  const onButtonClick = () => {
    console.log("pippo paperino e pluto :)))");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Home
        <br/>
        <Button text="Click!" onClick={onButtonClick} />
      </div>
    </main>
  )
}
