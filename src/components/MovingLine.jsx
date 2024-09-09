import React from "react";

function MovingLine() {
  return (
    <div className=" font-[Open Sans] overflow-hidden">
 <div className="bg-[#04000a]  movingline">
      <marquee behavior="" scrollamount="10" direction="right" className="text-white md:my-10  xl:text-[180px] lg:text-[140px] md:text-[100px]  max-md:text-[70px]  font-extrabold ">
        {" "} 
        <span className="text text-[#0c0614]">CELEBRATE</span> / NORTA 2024
      </marquee>
    </div>
    </div>
  );
}
 
export default MovingLine;
