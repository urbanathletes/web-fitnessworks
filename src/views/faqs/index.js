import React from 'react'
import { Link } from "react-router-dom";

function Faqs() {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <div className="text-blue-primary mx-auto text-center space-y-3 py-4 lg:mx-0 lg:w-60">
            <Link to="faq">
              <img src="/image/faqs/Before_you_join.png" alt="Fitnesswork faq" className="bg-yellow-primary bg-opacity-75 p-4 rounded-xl w-20 lg:mx-auto"/>
              <p>FAQ</p>
            </Link>
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