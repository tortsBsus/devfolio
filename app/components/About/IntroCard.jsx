"use client"
import React from 'react'
import Image from 'next/image'

function IntroCard() {
  return (
    <div className="card h-full w-full bg-accent shadow-xl text-neutral p-6 grid grid-cols-4">
    
    <div className='relative aspect-square col-span-1'>
    <figure >
    <Image src="/assets/profile.jpg" alt="me" className="rounded-lg" fill={true} />
    </figure>
    </div>

    <div className="pl-4 lg:pl-10 col-span-3 flex flex-col justify-center">
      <h1 className="text-heads5 lg:text-heads4 font-vergilia">I'm Meghana Rathanraj!</h1>
      <p className='text-bases lg:text-heads5 leading-tight'>A Software Developer based in Bangalore with 2 years of experience. Bringing ideas to life through end-to-end development!</p>
    </div>
  
  </div>
  )
}

export default IntroCard