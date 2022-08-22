import React from 'react'
import { NavLink } from "react-router-dom";
import ButtonNav from "../buttonNav";

function Navbar() {
  const hamburger = () => {
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    menu.classList.toggle('menu-open');
    menu.classList.toggle('menu-close');
    hamburger.classList.toggle('hamburger-active');
  };

  return (
    <div className="tracking-wider overflow-visible">
      <div className="font-BebasNeue text-blue-primary overflow-visible
        lg:container lg:mx-auto lg:px-2 lg:w-full lg:flex lg:justify-between lg:my-2
        relative
      ">
        <div className="flex justify-center items-center py-2 relative">
          <img src="./image/LogoFitnessworkNavBar.png" alt="FitnessWorkc" className="h-10" />
          <div className="absolute right-0 top-0 bottom-0 mr-3 flex items-center lg:hidden">
            <button id="hamburger" onClick={hamburger} name="hamburger" type="button">
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
        </div>
        <div className="w-full absolute menu-close overflow-hidden transition-all ease-in duration-300
          lg:static lg:h-full lg:overflow-visible z-50
          bg-gradient-to-b from-white lg:from-transparent 
        " id='menu'>
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-center text-center lg:w-full lg:font-black text-2xl">
              <ul className="lg:flex lg:space-x-2 xl:space-x-4">
                <NavLink to="/" className="lg:px-3">
                  <li className="py-1.5">Home</li>
                </NavLink>
                <NavLink to="workouts" className="lg:px-3">
                  <li className="py-1.5">WorkOuts</li>
                </NavLink>
                <li className="py-1.5 lg:px-3 group relative cursor-pointer">
                  {/* <button>
                  </button> */}
                    <p>About</p>
                  <div className="h-0 group-hover:h-24 overflow-hidden transition-all duration-300
                    lg:absolute lg:group-hover:h-36 lg:min-w-max lg:-left-10
                  ">
                    <ul className="mt-2 lg:bg-white lg:p-4 lg:rounded-xl">
                      <NavLink to="about">
                        <li>
                          About Us
                        </li>
                      </NavLink>
                      <NavLink to="faq">
                        <li>
                          faq
                        </li>
                      </NavLink>
                      <NavLink to="tnc">
                        <li>
                          Term & Condition
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                </li>
                <NavLink to="/article" className="lg:px-3">
                  <li className="py-1.5">Article</li>
                </NavLink>
                <NavLink to="/shop" className="lg:px-3">
                  <li className="py-1.5">Shop</li>
                </NavLink>
              </ul>
            </div>
            <div className="font-black sm:flex sm:justify-around lg:space-x-4 lg:min-w-max text-xl">
              <ButtonNav toLink="invesment" text="Start Your Own GYM"/>
              <ButtonNav toLink="login" text="LOGIN"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar