import React from 'react'
import Image from 'next/image'
function Logo() {
  return (
    <div className="card h-full w-full bg-primary shadow-xl">
  <div className="card-body">
    <div className='p-10'>
    <Image src="/assets/Logo.png" alt="me" fill="true" className="p-5" objectFit="contain" />
    </div>
  </div>
</div>
  )
}

export default Logo