import React from "react";

function Organized() {
  return (
    <div id="location" className="text-white pb-5 2xl:w-[70%] w-[90%] mx-auto ">
      <div className="md:p-14 p-5 flex justify-between md:flex-row flex-col  mt-20 border border-gray-600 md:rounded-3xl rounded-2xl bg-[#0c0614] max-md:flex-wrap">
        <div className="flex-1 md:pr-10 pr-1">
          <div className="flex items-center">
            <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
              ―
            </span>{" "}
            <h1 className=" highlight_title font-semibold md:text-2xl text-lg  cursor-pointer">
              {" "}
              Organized by
            </h1>
          </div>

          <div className="md:pt-5 pt-1">
            <h1 className="font-[Poppins] music md:text-6xl text-4xl font-bold">
              SMJ Events
            </h1>
            <p className=" music_pera text-gray-500 md:text-lg text-base max-md:w-full max-md:mt-5 md:pt-5 pt-1">
              For more information, contact us. We’re here to assist you with
              any questions or details.
            </p>
            <div className="mt-5">
              <h5 className="md:text-2xl text-xl mb-2">info@smjevents.in</h5>
              <h5 className="md:text-2xl text-xl">+91 9913292930</h5>
            </div>
          </div>
        </div>

        <div className="flex-1 max-md:mt-10">
          <div className="flex items-center">
            <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
              ―
            </span>{" "}
            <h1 className=" highlight_title font-semibold md:text-2xl text-lg cursor-pointer">
              {" "}
              Event Location
            </h1>
          </div>

          <div className="mt-5 md:top-40 top-48 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117424.3824806983!2d72.4623154918155!3d23.11495517138586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9de66bf15aa1%3A0x344a80e6b94bd2fe!2sANMOL%20FARM%20%26%20PARTY%20PLOT!5e0!3m2!1sen!2sin!4v1725257710551!5m2!1sen!2sin"
              title="Google Map of ANMOL FARM & PARTY PLOT"
              className="rounded-xl w-full h-72"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organized;
