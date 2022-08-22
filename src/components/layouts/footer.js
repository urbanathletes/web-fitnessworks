import React from 'react'

function Footer() {
  return (
    <div>
      <div className="bg-blue-primary text-white font-Poppins pt-4 pb-8 text-base">
        <div className="text-center font-BebasNeue tracking-widest text-lg">
          <p><i className="icofont-instagram"></i> Follow US ON @FITNESSWORKS.ID</p>
        </div>
        <div className="py-4 flex justify-start xl:justify-center overflow-x-auto no-scrollbar">
          <img src="./image/Footer/Footer_1.jpg" alt="UA Footer" className="w-60" />
          <img src="./image/Footer/Footer_2.jpg" alt="UA Footer" className="w-60" />
          <img src="./image/Footer/Footer_3.jpg" alt="UA Footer" className="w-60" />
          <img src="./image/Footer/Footer_4.jpg" alt="UA Footer" className="w-60" />
          <img src="./image/Footer/Footer_5.jpg" alt="UA Footer" className="w-60" />
          <img src="./image/Footer/Footer_6.jpg" alt="UA Footer" className="w-60" />
        </div>
        <div className="container mx-auto font-light">
          <div className="border-b-4 border-white"></div>
          <div className="md:flex md:justify-around items-center lg:items-start">
            <div className="max-w-xs mx-auto md:mx-0 space-y-4 py-4">
              <img src="./image/LogoFitnessworkPutih.png" alt="UA Footer" className="w-60" />
              <p>Fitnessworks is a new experience in fitness. we are the first gym & fitness Centre with technology based, in Indonesia.</p>
              <ul className="space-y-4">
                <li><i className="mr-4 icofont-google-map"></i>View Location</li>
                <li><i className="mr-4 icofont-email"></i> Info@fitnessworks.co.id</li>
                <li><i className="mr-4 icofont-brand-whatsapp"></i> 0817 - 9188 - 880</li>
              </ul>
            </div>
            <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 md:ml-8 max-w-xs md:max-w-full md:w-full md:mx-0">
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">OUR GYM</h3>
                <p>Workouts</p>
                <p>Personal Trainer</p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">COMPANY</h3>
                <p>About Us</p>
                <p>Mobile Apps</p>
                <p>Presentation</p>
                <p>Partnership</p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">STORE</h3>
                <p>Membership</p>
                <p>Training Equipment <br/> & Merchandise</p>
              </div>
              <div className="md:mx-auto space-y-4 py-4">
                <h3 className="text-xl text-yellow-primary font-black">GET ASSISTANCE</h3>
                <p>Help & Contact</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youtube</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer