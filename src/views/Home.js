import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'

function Home() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img src="/image/home/Hero_Slide.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <img src="./image/LogoFitnessworkPutih.png" alt="Fitnessworks" className="w-full" />
          <p>
            Get your 3 days trial, get rid all your excuses, change now or never! Make better version of you with Fitnessworks. #fitnessforeveryone
          </p>
          <button className="border border-yellow-primary px-4 py-1 my-4">
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="py-8">
        <h2 className="font-BebasNeue font-black text-center text-blue-primary text-4xl my-2">FIND YOUR FITNESS GOALS</h2>
        <div className="grid md:grid-cols-2 max-w-max mx-auto">
          <div className="relative group">
            <img src="/image/home/Photo_classes.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">Fitness Classes Included</h2>
                <p>We’re making fitness fun with our exciting range of fitness classes.</p>
                <div className="flex justify-center">
                  <ButtonLink text="VIEW MORE" link="/workouts" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="/image/home/Photo_pt.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">OUR Personal TraiNER</h2>
                <p>Wherever you are on your fitness journey, a personal trainer can help you reach your goals.</p>
                <div className="flex justify-center">
                  <ButtonLink text="VIEW MORE" link="/personal-trainer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:max-h-screen overflow-hidden">
        <video className="object-cover object-right min-w-min lg:min-w-full" loop autoPlay muted>
          <source src="/video/VideoBannerUA.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 my-4">
        <div className="text-center my-4 space-y-4">
          <div>
            <img src="/image/home/Icon_1.png" alt="FW Icon" className="mx-auto w-28"/>
          </div>
          <div className="text-blue-primary font-BebasNeue text-2xl font-black">
            <h2>TIME BASED MEMBERShip, <br/>With various Pricing Plan</h2>
          </div>
          <div className="max-w-xs mx-auto py-4">
            <p>By keeping our prices low we can help more people to get and stay healthy. There’s a range of membership options to choose from.</p>
          </div>
          <div className="flex justify-center mt-auto">
            <ButtonLink text="MEMBERSHIP OPTION" link="/membership" />
          </div>
        </div>
        <div className="text-center my-4 space-y-4">
          <div>
            <img src="/image/home/Icon_2.png" alt="FW Icon" className="mx-auto w-28"/>
          </div>
          <div className="text-blue-primary font-BebasNeue text-2xl font-black">
            <h2>High quality & modern design <br/>gym & Classes</h2>
          </div>
          <div className="max-w-xs mx-auto py-4">
            <p>Fully equipped, modern design gym with everything you need for a great workout, and 50+ classes each week included in your membership.</p>
          </div>
          <div className="flex justify-center mt-auto">
            <ButtonLink text="FIND OUT MORE" link="/workouts" />
          </div>
        </div>
        <div className="text-center my-4 space-y-4">
          <div>
            <img src="/image/home/Icon_3.png" alt="FW Icon" className="mx-auto w-28"/>
          </div>
          <div className="text-blue-primary font-BebasNeue text-2xl font-black">
            <h2>FREE Fitnessworks APP</h2>
          </div>
          <div className="max-w-xs mx-auto py-4">
            <p>Our top rated, free app features a personalised workout tracking for every member. you can buy or upgrade membership everywhere & anytime you need. Booking your class and PT appointment from your bed</p>
          </div>
          <div className="flex justify-center mt-auto">
            <ButtonLink text="FIND OUT MORE" link="/fitnessworks-apps" />
          </div>
        </div>
        <div className="text-center my-4 space-y-4">
          <div>
            <img src="/image/home/Icon_4.png" alt="FW Icon" className="mx-auto w-28"/>
          </div>
          <div className="text-blue-primary font-BebasNeue text-2xl font-black">
            <h2>SUPPORTING YOUR HEALTH <br/>JOURNEY</h2>
          </div>
          <div className="max-w-xs mx-auto py-4">
            <p>Whether it’s support from a Personal Trainer, your expert Gym Team, our app, help is always at hand.</p>
          </div>
          <div className="flex justify-center mt-auto">
            <ButtonLink text="FIND OUT MORE" link="/contact-us" />
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-center md:items-center my-4">
        <div>
          <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" className="md:max-w-md lg:max-w-lg mx-auto" />
        </div>
        <div className="text-center text-blue-primary py-8 md:max-w-3xl">
          <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <p>The Fitnesswork app lets you manage your membership from the palm of your hand. With contactless entry, access to over 600 workouts and personalised training plans. And so much more!</p>
          <div className="flex justify-center">
            <ButtonLink text="FIND OUT MORE" link="/fitnessworks-apps" />
          </div>
        </div>
      </div>

      <div className="bg-blue-primary py-8">
        <div className="relative py-10 text-center text-white font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl">training equipment & Merchandise</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 container mx-auto">
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Slaves_yellow.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Gym_bag_2.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Tshirt.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Mini_towel.jpg" alt="Shop" className="max-w-xs mx-auto"/>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <p className="bg-neutral-500 text-white px-3 py-1">NEW</p>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="relative w-max mx-auto">
              <img src="/image/home/Yoga_mat.jpg" alt="Shop" className="max-w-xs mx-auto"/>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="relative py-10 text-center text-blue-primary font-BebasNeue font-black">
          <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <h1 className="text-5xl">PRICING PLAN</h1>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-yellow-primary text-blue-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">EARLY RISER</h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">UNLIMITED <br/>ACCES</h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">START FROM</h1>
              <div className="flex pb-4">
                <p>RP</p><p className="text-4xl font-black mx-2">248.000</p><p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Free Access All Class</p>
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Get Gym Bag</p>
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Free 3 sessions with <br/>Personal Trainer</p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full mx-auto lg:mx-8 my-8">
            <div className="bg-blue-primary text-yellow-primary text-center">
              <h1 className="text-4xl py-4 font-BebasNeue font-black tracking-wider">NIGHT OWL</h1>
            </div>
            <div className="bg-neutral-100 p-6 text-blue-primary">
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8">UNLIMITED <br/>ACCES</h1>
              <h1 className="font-BebasNeue font-black tracking-wider text-4xl leading-8 pt-8">START FROM</h1>
              <div className="flex pb-4">
                <p>RP</p><p className="text-4xl font-black mx-2">278.000</p><p className="mt-auto">All Club / Month</p>
              </div>
              <div className="ml-8 text-lg py-4">
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Free Access All Class</p>
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Get Gym Bag</p>
                <p className="-indent-8"><span className="text-2xl mr-2">&#9745;</span> Free 3 sessions with <br/>Personal Trainer</p>
              </div>
              <div className="text-center py-4">
                <div className="flex justify-center">
                  <ButtonLink text="View More" link="/membership" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-blue-primary">
        <h1 className="font-judul text-center text-6xl">LATEST BLOG POSTS</h1>
        <div className="container mx-auto md:flex md:flex-wrap md:justify-center">
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img src="/image/home/News_Example_1.jpg" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">Example of article title</h2>
                <p>Fitnessworks ia a new concept in smart gym with high value, low investment and faster return of investment.</p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img src="/image/home/News_Example_3.jpg" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">Example of article title</h2>
                <p>Fitnessworks ia a new concept in smart gym with high value, low investment and faster return of investment.</p>
              </div>
            </Link>
          </div>
          <div className="max-w-xs overflow-hidden mx-auto my-8">
            <Link to="/article">
              <img src="/image/home/News_Example_2.jpg" alt="LATEST BLOG POSTS" className="object-cover object-center min-w-min mx-auto"/>
              <div className="p-2">
                <h2 className="font-judul text-2xl tracking-wider mb-4">Example of article title</h2>
                <p>Fitnessworks ia a new concept in smart gym with high value, low investment and faster return of investment.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <p className="font-judul text-2xl">UNPARALLELED</p>
          <h2 className='font-judul text-6xl text-blue-primary'>BUSINESS SUPPORT</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center py-4 lg:px-10">
          <img src="/image/logo/LOGO_UA_HITAM_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-LOGO_JR_HIRES.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/URBAN-FALCON FINAL-TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/Valor_TM.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/LogoFitnessworkPanjang.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
          <img src="/image/logo/CIRCUIT.png" alt="BUSINESS SUPPORT" className="h-20 m-4"/>
        </div>
      </div>

    </div>
  )
}

export default Home