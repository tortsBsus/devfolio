import React from 'react'

function Skill(props) {
  return (
    <div className="card h-full w-full bg-secondary shadow-xl">
    <div className="card-body flex flex-col justify-end text-heads5 lg:text-heads4 text-start text-neutral font-vergilia">
      {props.title}
    </div>
  </div>
  )
}

export default Skill