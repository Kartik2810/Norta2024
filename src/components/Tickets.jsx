import React, { useState } from "react";
import individual from "../img/Bookmyshow-Poster-Horizontal-05-1.jpg";
import seasonal from "../img/Bookmyshow-Poster-Horizontal-04-1.jpg";
function Tickets() {
  const [activeButton, setActiveButton] = useState("individual");

  const handleClick = (button) => {
    setActiveButton(button);
  };
  const ticketContent = {
    individual: [
      {
        imgSrc: individual,
        description: "Regular Ticket (Single Day)",
        originalPrice: 699,
        discountedPrice: 624,
        discount: "10% off",
      },
      {
        imgSrc: seasonal,
        description: "VVIP Ticket (Single Day)",
        originalPrice: 1499,
        discountedPrice: 1349,
        discount: "10% off",
      },
    ],
    seasonal: [
      {
        imgSrc: individual,
        description: "Regular Ticket (Season)",
        originalPrice: 6299,
        discountedPrice: 5099,
        discount: "19% off",
      },
      {
        imgSrc: seasonal,
        description: "VVIP Ticket (Season)",
        originalPrice: 13499,
        discountedPrice: 10999,
        discount: "19% off",
      },
    ],
  };
  console.log(ticketContent.seasonal[0].description);
  console.log(ticketContent.individual[0].description);

  return (
    <div
      id="pricing"
      className="font-[Plus Jakarta Sans] p-2 2xl:w-[70%] w-[90%] m-auto pt-5 text-white pb-20 max-md:w-11/12"
    >
      <div className="flex items-center">
        <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
          ―
        </span>{" "}
        <h1 className=" highlight_title font-semibold md:text-2xl text-lg cursor-pointer">
          {" "}
          Tickets
        </h1>
      </div>

      <div className=" flex justify-between max-md:flex-col">
        <h1 className="md:w-1/2 w-full font-[Poppins] md:text-6xl text-4xl font-bold">
          Buy Now!
        </h1>
        <p className="w-1/2 font-[Open Sans] text-gray-500 md:text-lg text-base max-md:w-full max-md:mt-5">
          Book your tickets for Norta 2024 Now! Enjoy vibrant Garba, delicious
          food, and live music. Book now for an unforgettable Navratri
          celebration!
        </p>
      </div>
      <div className="text-center mt-10 flex justify-center items-center cursor-pointer">
        <div className="text-white flex justify-center items-center py-2 rounded-xl border border-gray-400 w-[260px]">
          <h2
            onClick={() => handleClick("individual")}
            className={`py-2 px-7 rounded-lg transition-colors duration-400 ${
              activeButton === "individual" ? "bg-red-500" : ""
            }`}
          >
            Individual
          </h2>
          <h2
            onClick={() => handleClick("seasonal")}
            className={`py-2 px-7 rounded-lg transition-colors duration-400 ${
              activeButton === "seasonal" ? "bg-red-500" : ""
            }`}
          >
            Seasonal
          </h2>
        </div>
      </div>

      <div className="flex justify-center md:flex-row flex-col gap-5 pt-5">
        <div>
          <img
            className="md:rounded-3xl rounded-2xl "
            src={individual}
            alt="individual"
          />
          <p className="p-2 text-xl font-medium">
            {activeButton === "individual"
              ? ticketContent.individual[0].description
              : ticketContent.seasonal[0].description}
          </p>
          <div className="flex justify-between max-sm:flex-wrap items-center md:p-5 p-1 ">
            <div className="xl:text-5xl lg:text-4xl text-3xl font-bold">
              <span className="line-through decoration-red-600 decoration-4 lg:mr-5 mr-2">
                {activeButton === "individual"
                  ? ticketContent.individual[0].originalPrice
                  : ticketContent.seasonal[0].originalPrice}
              </span>
              <span className="title text">
                <i class="fa-solid fa-indian-rupee-sign lg:text-4xl text-2xl"></i>
                {activeButton === "individual"
                  ? ticketContent.individual[0].discountedPrice
                  : ticketContent.seasonal[0].discountedPrice}{" "}
              </span>
              <span className="text-base">
                {activeButton === "individual"
                  ? ticketContent.individual[0].discount
                  : ticketContent.seasonal[0].discount}{" "}
              </span>
            </div>
            <button className="bg-red-700 lg:px-5 px-3 max-md:w-full max-md:my-3 py-2 rounded-xl lg:text-lg text-base mr-2 buy_ticket lg:font-semibold font-medium">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="md:rounded-3xl rounded-2xl "
            src={seasonal}
            alt="individual"
          />
          <p className="p-2 text-xl font-medium">
            {activeButton === "individual"
              ? ticketContent.individual[1].description
              : ticketContent.seasonal[1].description}
          </p>
          <div className="flex justify-between max-sm:flex-wrap items-center md:p-5 p-1 ">
            <div className="xl:text-5xl lg:text-4xl text-3xl font-bold">
              <span className="line-through decoration-red-600 decoration-4 lg:mr-5 mr-2">
                {activeButton === "individual"
                  ? ticketContent.individual[1].originalPrice
                  : ticketContent.seasonal[1].originalPrice}
              </span>
              <span className="title text">
                <i class="fa-solid fa-indian-rupee-sign lg:text-4xl text-2xl"></i>
                {activeButton === "individual"
                  ? ticketContent.individual[1].discountedPrice
                  : ticketContent.seasonal[1].discountedPrice}{" "}
              </span>
              <span className="text-base">
                {activeButton === "individual"
                  ? ticketContent.individual[1].discount
                  : ticketContent.seasonal[1].discount}{" "}
              </span>
            </div>
            <button className="bg-red-700 lg:px-5 px-3 max-md:w-full max-md:my-3 py-2 rounded-xl lg:text-lg text-base mr-2 buy_ticket lg:font-semibold font-medium">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
