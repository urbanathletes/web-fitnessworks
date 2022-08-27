import React from 'react'

function Faqs() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative h-72">
        <img src="/image/inves/OurFounder.jpg" alt="Fitnesswork Presentation" className="object-cover object-center h-full sm:min-w-full"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center bg-blue-primary bg-opacity-80">
          <h1 className="font-judul text-5xl text-center text-white">FITNESSWORK HELP CENTRE</h1>
          <div className="flex justify-center text-blue-primary my-4 px-4 w-full">
            <input type="text" className="w-full md:w-96 px-2 py-1" placeholder='ASK a Question….'/>
            <button className="bg-white mx-1 px-6">SARTCH</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-center">
          <div className="text-blue-primary mx-auto text-center space-y-3 py-4 lg:mx-0 lg:w-60">
            <img src="/image/faqs/Before_you_join.png" alt="Fitnesswork faq" className="bg-yellow-primary bg-opacity-75 p-4 rounded-xl w-20 lg:mx-auto"/>
            <p>FAQ</p>
          </div>
          <div className="text-blue-primary mx-auto text-center space-y-3 py-4 lg:mx-0 lg:w-60">
            <img src="/image/faqs/Other_useful_info.png" alt="Fitnesswork faq" className="bg-yellow-primary bg-opacity-75 p-4 rounded-xl w-20 lg:mx-auto"/>
            <p>CLUB & FACILITY</p>
          </div>
          <div className="text-blue-primary mx-auto text-center space-y-3 py-4 lg:mx-0 lg:w-60">
            <img src="/image/faqs/Keeping_you_save.png" alt="Fitnesswork faq" className="bg-yellow-primary bg-opacity-75 p-4 rounded-xl w-20 lg:mx-auto"/>
            <p>Safety & Health Protocols</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 text-blue-primary">
        <div className="container py-6">
          <h1 className="font-judul text-5xl text-center">TOP QUESTIONS</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            <div className="bg-white rounded-2xl px-6 py-6">
              <p>How do I Join?</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-6">
              <p>How old do I need to be to join?</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-6">
              <p>Can I check out the gym before joining?</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-6">
              <p>Do I get a membership card?</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Faqs