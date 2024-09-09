import React from "react";

function Countdown() {
  return (
    <div className="countdown bg-[#04000a] text-[#d2d2d2] p-2 ">
      <div className="section border  md:rounded-[30px] rounded-[20px]  px-5 md:py-12 py-5 relative bottom-20 2xl:w-[75%] 2xl:m-auto  ">
        <div className="grid md:grid-cols-4">
          <div className=" flex gap-5 mx-2 px-2 md:items-center max-md:my-5">
            <div>
              <h1 className="countdown-content countdown-title  text-3xl max-lg:text-2xl font-extrabold  ">
                3 to 12 Oct, 2024
              </h1>

              <p className="countdown-content text-xl max-lg:text-lg font-medium ">
                7:00 PM – 12:00AM
              </p>
            </div>
          </div>
          <div className="flex gap-5 md:justify-center mx-2 px-2  md:border-l-2 md:border-r-2 items-center  max-md:my-5">
            <div>
              <h1 className="countdown-content countdown-title  text-3xl max-lg:text-2xl  font-extrabold ">
                Venue
              </h1>

              <p className="countdown-content text-xl   max-lg:text-lg font-medium">
                Anmol farm & party plot, Ahmedabad
              </p>
            </div>
          </div>
          <div className=" flex gap-5 items-center mx-3 max-lg:px-10 max-md:px-1  md:justify-end  max-md:my-5">
            <div>
              <h1 className="countdown-content countdown-title  text-3xl max-lg:text-2xl  font-extrabold ">
                10,000+
              </h1>

              <p className="countdown-content text-xl  max-lg:text-lg font-medium ">
                Attending
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center md:justify-end max-md:my-5">
            <div className="w-full md:w-auto">
              <button className="buy_ticket w-full md:w-auto flex gap-4 items-center justify-center rounded-xl font-semibold px-12 max-lg:px-10 py-3 cursor-pointer">
                <i class="fa-solid fa-user-plus"></i> Interested
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
