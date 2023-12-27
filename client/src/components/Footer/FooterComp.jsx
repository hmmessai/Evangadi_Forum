import React from 'react'
import "./Footer.css"
import logo from "../../assets/evangadi-logo-home.png";
import whiteLogo from "../../assets/eva_logo_white.png";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
const FooterComp = () => {
  return (
    <section
      style={{ marginTop: "400px" }}
      className="top_Margin h-64   relativePosition">
      <div className=" bg-[#3b455a]">
        <div className="block sm:flex sm:justify-evenly p-10 text-white">
          <div>
            <img className="h-[30px] w-[200px]" src={whiteLogo} alt="" />
            <div className="flex gap-3 text-2xl py-5">
              <FiFacebook />
              <FiInstagram />
              <FiYoutube />
            </div>
          </div>

          <div>
            <h1 className="text-xl">Usefull Links</h1>
            <ul className="py-5 opacity-50 text-sm">
              <li className="hover:underline mb-2">
                <p>How It Works</p>
                <a href=""></a>
              </li>
              <li className="hover:underline mb-2">
                <a href=""></a>
                <p>Terms Of Services</p>
              </li>
              <li className="hover:underline mb-2">
                <a href=""></a>
                <p>Privacy Policy</p>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl"></h1>
            <p>Cotact Info</p>
            <ul className="py-5 opacity-50 text-sm">
              <li className="hover:underline mb-2">
                <a href=""></a>
                <p>Evangadi Networks</p>
              </li>
              <li className="hover:underline mb-2">
                <a href=""></a>
                <p>support@evangadi.com</p>
              </li>
              <li className="hover:underline mb-2">
                <a href=""></a>
                +1-202-386-2702
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterComp
