import React from 'react'

function Projects() {
  return (
    <div className="mt-10 px-4 lg:px-16 min-h-screen w-full">
          <h1 className="text-heads3 lg:text-titles text-center font-bold font-vergilia "> Projects </h1>
          <div className='grid grid-flow-col justify-stretch align-middle font-vergilia'>
              <div className='text-neutral bg-accent px-2 py-2 text-bases mx-1 my-1 text-center lg:text-heads4 rounded-2xl'> Frontend </div>
              <div className='text-neutral bg-accent px-2 py-2 text-bases mx-1 my-1 text-center lg:text-heads4 rounded-2xl'> Backend </div>
              <div className='text-neutral bg-accent px-2 py-2 text-bases mx-1 my-0 text-center lg:text-heads4 rounded-b-none rounded-2xl'> Blockchain </div>
              {/* <div className='text-neutral bg-accent px-2 py-2 text-bases mx-1 my-1 text-center lg:text-heads4 rounded-2xl'> Design </div> */}
          </div>
          <div className="h-full my-0 mx-1 border-accent border-solid border-2 p-10 text-neutral bg-accent rounded-b-2xl rounded-l-2xl">
            <div className="bg-{#00204F} grid grid-cols-12 grid-rows-6 p-4 rounded-3xl">
            <div className='shadow-sm  shadow-slate-100 col-span-4 row-span-6 bg-accent m-2 p-2 rounded-lg text-center'>Demo Video </div>
            <div className='shadow-sm  shadow-slate-100 col-span-8 row-span-1 bg-accent m-2 p-2 rounded-lg text-center' >Title </div>
            <div className='shadow-sm  shadow-slate-100 col-span-2 row-span-1 bg-accent m-2 p-2 rounded-lg text-center'>Live link </div>
            <div className='shadow-sm  shadow-slate-100 col-span-2 row-span-1 bg-accent m-2 p-2 rounded-lg text-center'>Github Link </div>
            <div className='shadow-sm  shadow-slate-100 col-span-4 row-span-5 bg-accent m-2 p-2 rounded-lg text-center'>Tech Stack </div>
            <div className='shadow-sm  shadow-slate-100 col-span-4 row-span-4 bg-accent m-2 p-2 rounded-lg text-center'>Description </div>
            </div>


            
          </div>
    </div>
  )
}

export default Projects