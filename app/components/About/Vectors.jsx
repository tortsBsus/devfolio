import React from "react";
import Image from "next/image";

function Vectors(props) {
  return (
    <div className="card h-full w-full bg-accent shadow-xl">
      <div className="card-body">
          <Image src={props.imgAddr} alt="me" fill="true" className="p-5" objectFit="contain"  />
      </div>
    </div>
  );
}

export default Vectors;
