import React from 'react'

function ContactUs() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-96">
        <img src="/image/home/Hero_slide_2.jpg" alt="Fitnesswork Contact Us" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center h-24 bg-white bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-blue-primary">Market Strategy</h1>
        </div>
      </div>
      <div>
        <iframe title='map' src="https://www.google.com/maps/d/u/1/embed?mid=1BLfrcfUk0H2FggTjFXoI0RILoBbTR-o&ehbc=2E312F" width="100%" height="480"/>
      </div>
      
      <div className="container text-blue-primary grid lg:grid-cols-2">
        <div className="my-4 lg:pr-16">
          <div className="py-4 border-b-2 border-neutral-100">
            <h1 className="font-judul text-5xl">FEEL FREE TO ASK US!</h1>
            <p>find out more and ask us something to find a solution to your problem.</p>
          </div>
          <div className="py-4">
            <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
            <div className="my-4">
              <div className="inline-flex">
                <i className="icofont-instagram p-2 bg-blue-primary text-white"></i>
                <p className="py-1 px-4 border-2 border-blue-primary">Fitnessworks.id</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <label className="relative group">
                <span className="absolute mx-2 top-2 left-0 group-focus:-top-5 group-focus:-left-3 group-focus:scale-75 transition-all duration-300">Full Name</span>
                <input type="text" className="w-full bg-white border border-blue-primary h-10 px-2"/>
              </label>
              <input type="text" className="w-full bg-white border border-blue-primary"/>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default ContactUs