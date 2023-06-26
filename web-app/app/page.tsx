'use client';
import { UserProvider } from '@/common/context/UserProvider';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  return (
    <UserProvider>
    </UserProvider>
  )
}
