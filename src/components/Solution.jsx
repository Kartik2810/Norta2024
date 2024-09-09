import React from "react";

function Solution() {
  return (
    <div className="text-white mt-20 2xl:w-[70%] w-[90%] mx-auto">
      <div>
        {" "}
        <div className="flex items-center">
          <span className="line text-[#b20e5d] md:text-5xl text-3xl font-normal md:mr-5 md:mb-2 mr-1">
            ―
          </span>{" "}
          <h1 className=" highlight_title font-semibold md:text-2xl text-lg cursor-pointer">
            {" "}
            Frequently asked questions
          </h1>
        </div>
        <div className="flex justify-between max-md:flex-col">
          <h1 className="font-[Poppins] flex-1 music sm:text-6xl text-4xl md:my-3 my-1 font-bold">
            Norta 2024
          </h1>

          <div className="w-[60%]  music_pera text-gray-500 text-lg max-md:w-full  max-md:mt-5">
            <div class="max-w-screen-xl mx-auto   min-h-sceen">
              <div class="grid divide-y divide-gray-600 max-w- mx-auto  text-white rounded-2xl border border-gray-600 p-3 bg-[#0c0614]">
                {/* que-1 */}
                <div class="py-4">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        {" "}
                        How do i book tickets for the navratri event ?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-neutral-600 mt-3 text-sm md:text-base group-open:animate-fadeIn">
                      Visit Norta.in, choose your ticket type, select the event
                      date, and follow the checkout process. You will receive a
                      confirmation email with your tickets.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        what are the event timing and location details ?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-neutral-600 mt-3 text-sm md:text-base group-open:animate-fadeIn">
                      The Navratri event starts at 8pm and is held at Anmpol
                      Farm & Party Plot, located in Shilaj, Ahmedabad. Please
                      check Norta.in for the exact address and directions
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        Are there any age restriction for attending the event ?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-neutral-600 mt-3 text-sm md:text-base group-open:animate-fadeIn">
                      Our event is family-friendly and welcomes attendees of all
                      ages. Children under 3 Years can enter for free with a
                      paying adult
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        Can i get a refund or exchang my tickets if i can not
                        attend ?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-neutral-600 mt-3 text-sm md:text-base group-open:animate-fadeIn">
                      Tickets are non-refundable. Please review our cancellation
                      policy on the website for more details.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>is the parking availble in the venue ?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-neutral-600 mt-3 text-sm md:text-base group-open:animate-fadeIn">
                      There is plenty of parking available at the venue. Please
                      follow the signs and any instructions given on the day of
                      the event.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
