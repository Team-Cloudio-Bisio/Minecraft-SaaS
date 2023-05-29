'use client';
import Image from 'next/image'
import { useState } from 'react';

type Weather = {
  date: string,
  temperatureC: number,
  temperatureF: number,
  summary: string;
};

export default function Home() {

  const [data, setData] = useState("");

  function getData() {

    const get = async () => {
      const response = await fetch("/api/weather", {
        method: "GET",
      });

      return response.json();
    };

    get().then((data) => {
      setData(JSON.stringify(data));
      console.log(JSON.stringify(data))
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button type='submit' onClick={getData}>Get</button>
        <div>
          {data}
        </div>
      </div>
    </main>
  )
}
