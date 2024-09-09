import React from "react";
import footerimg from "../img/cropped-Norta-2024-_-Logo.png";
function Footer() {
  return (
    <footer className="border-t-2 mt-5">
      <div className="text-white px-2 flex flex-wrap 2xl:justify-around md:justify-between justify-center items-center">
        <h5 className="text-xl max-md:hidden">
          © Norta 2024 All rights Reserved.{" "}
        </h5>
        <img className="md:w-[7%] w-[20%]" src={footerimg} alt="footer_img" />
        <h5 className="text-xl max-md:hidden">
          Terms & Conditions | Privacy Policy
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
