"use client"
import React from 'react'
import Image from 'next/image'

function IntroCard() {
  return (
    <div id="introCard" className="card h-full w-full bg-accent shadow-xl text-neutral p-6 grid grid-cols-4">
    
    <div className='relative aspect-square col-span-1'>
    <figure >
    <Image src="/assets/Me.jpg" alt="me" className="rounded-lg" fill={true} />
    </figure>
    </div>

    <div className="pl-4 lg:pl-10 col-span-3 flex flex-col justify-center">
      <h1 className="text-heads5 lg:text-heads4 font-vergilia">Hi! I'm Meghana Rathanraj!</h1>
      <p className='text-bases lg:text-heads5 leading-tight'>A Full Stack Web Developer based in Bangalore India. I build web based solutions to problems in varied fields including Web3, Agritech and Surveillance</p>
      <div className="divider divider-secondary" > Interesting Facts</div>
      <div className="flex flex-wrap">
        {/* --------------------------------------Modal 1---------------------------------------------------- */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Patent</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Patent</h3>
          <p className="py-4">Developed a Patented System</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* --------------------------------------Modal 2---------------------------------------------------- */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>KSCST Grant</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">KSCST Grant</h3>
          <p className="py-4">Awarded the KSCST Project Grant in 2023</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* --------------------------------------Modal 3---------------------------------------------------- */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>TiH IoT Grant</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">TiH IoT Grant</h3>
          <p className="py-4">Awarded the TiH IoT Project Grant in 2022</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* --------------------------------------Modal 4---------------------------------------------------- */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>YESIST 12</button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">YESIST 12</h3>
          <p className="py-4">IEEE YESIST 12 Winner</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* --------------------------------------Modal 5---------------------------------------------------- */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Atman Summmit</button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Atman Summit</h3>
          <p className="py-4">Project Presentation to Department of Science and Technology India</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      
      
      
      </div>
      
    </div>
  
  </div>
  )
}

export default IntroCard