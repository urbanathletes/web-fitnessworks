import React from 'react'

function About() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative 2xl:container 2xl:mx-auto">
        <img src="/image/aboutUs/About_Us.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[60vh]"/>
      </div>

      <div className="container mx-auto max-w-2xl text-center my-8 text-blue-primary">
        <h1 className="font-judul text-5xl py-4">FITNESSWORKS DIFFERENCE</h1>
        <p>As Indonesia’s favorite fitness center, we are here to help more people in more places live healthier lives every day.</p>
      </div>
      <div className="my-4 lg:flex lg:justify-center lg:items-center lg:space-x-4 bg-neutral-100">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <img src="/image/workouts/Weight_loss.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
        </div>
        <div className="px-4 grid items-center text-blue-primary">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-judul">ABOUT US</h2>
            <div className="my-4">
              <p>Fitnessworks is a new experience in fitness. we are the first gym & fitness Centre with technology based, in Indonesia. with technology we can provide high level facility & activity with low-cost membership plan, so everyone can join & begin their fitness journey. it is our mission to create fitness for everyone.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-2xl text-center my-8 text-blue-primary">
        <h1 className="font-judul text-5xl py-4">QUALITY, AFFORDABLE GYMS, EVERYWHERE</h1>
        <p>We’re committed to bringing high quality, affordable gyms to everyone, everywhere. We do this by keeping our prices, low, making it as easy to leave as it is to join, opening our gyms night and day and providing our members with the support and inspiration they need where and when they need it.</p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 my-4">
        <div className="text-center my-4 space-y-4">
          <div>
            <img src="/image/home/Icon_1.png" alt="FW Icon" className="mx-auto w-28"/>
          </div>
          <div className="text-blue-primary font-BebasNeue text-2xl font-black">
            <h2>Low Prices, <br/>With various Pricing Plan</h2>
          </div>
          <div className="max-w-xs mx-auto py-4">
            <p>By keeping our prices low we can help more people to get and stay healthy. There’s a range of membership options to choose from.</p>
          </div>
          <div>
            <button className="border border-blue-primary text-blue-primary px-4 py-1">
              MEMBERSHIP OPTION
            </button>
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
          <div>
            <button className="border border-blue-primary text-blue-primary px-4 py-1">
              FIND OUT MORE
            </button>
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
          <div>
            <button className="border border-blue-primary text-blue-primary px-4 py-1">
              FIND OUT MORE
            </button>
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
          <div>
            <button className="border border-blue-primary text-blue-primary px-4 py-1">
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="grid md:grid-cols-2 max-w-max mx-auto">
          <div className="relative group">
            <img src="/image/home/Photo_classes.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">Fitness Classes Included</h2>
                <p>We’re making fitness fun with our exciting range of fitness classes.</p>
                <button className="border border-white px-4 py-1 mt-8">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img src="/image/home/Photo_pt.jpg" alt="Fitnesswork"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-primary bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-sm text-center text-white tracking-wider">
                <h2 className="font-BebasNeue text-2xl text-yellow-primary mb-4">OUR Personal TraiNER</h2>
                <p>Wherever you are on your fitness journey, a personal trainer can help you reach your goals.</p>
                <button className="border border-white px-4 py-1 mt-8">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center my-4 lg:container mx-auto">
        <div>
          <img src="/image/home/FitnessWork_apps.png" alt="Mobile App Fitness Works" className="max-w-lg mx-auto" />
        </div>
        <div className="container mx-auto lg:mx-0 text-blue-primary py-8 lg:max-w-2xl">
          <h2 className="font-BebasNeue font-black text-4xl mb-4">SUPPORTING YOU EVERY STEP OF THE WAY</h2>
          <p>Our great new features ensure you’re able to manage your membership from the palm of your hand.</p>
          <br/>
          <p>- Contactless entry to the gym through the app</p>
          <p>- Book Into your favourite classes</p>
          <p>- Manage your membership from changing your gym to updating payment details</p>
          <button className="mt-4 border py-1">
          <img src="/image/aboutUs/button-google-play.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
          <button className="mt-4 border py-1">
          <img src="/image/aboutUs/button-app-store.png" alt="Mobile App Fitness Works" className="h-12 mx-2" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default About