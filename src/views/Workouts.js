import React from 'react'

function Workouts() {
  return (
    <div>
      <div className="flex justify-center lg:max-h-screen overflow-hidden relative">
        <img src="/image/workouts/Header_workout.jpg" alt="Fitnesswork Hero Page" className="object-cover object-center min-w-min lg:min-w-full max-h-[80vh]"/>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-md mx-auto text-white text-center">
          <h1 className="font-judul text-7xl">MAKE FITNESS FUN</h1>
          <button className="border border-yellow-primary px-4 py-1 my-4">
            VIEW MORE
          </button>
        </div>
      </div>

      <div className="xl:container mx-auto text-blue-primary text-center py-8 text-base">
        <h1 className="font-judul text-7xl">EXCLUSIVE WORKOUT</h1>
        
        <div className="my-4 lg:flex lg:justify-between lg:items-center group hover:bg-blue-primary transition-all duration-300">
          <div className="px-4 grid items-center">
            <div className="max-w-xl mx-auto group-hover:text-yellow-primary transition-all duration-300">
              <h2 className="text-4xl font-judul">WEIGHT LOSS</h2>
              <div className="my-4">
                <p>Did you concern about your current weight?, Join our Weight Loss program. This prog will get you to burn more calories. It is suitable for beginner or people who are bored with regular routines</p>
              </div>
              <button className="border border-yellow-primary text-yellow-primary px-4 py-1 my-4">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="max-w-2xl">
            <img src="/image/workouts/Weight_loss.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse group hover:bg-yellow-primary transition-all duration-300">
          <div className="px-4 grid items-center">
            <div className="max-w-xl mx-auto group-hover:text-blue-primary transition-all duration-300">
              <h2 className="text-4xl font-judul">ENDURANCE</h2>
              <div className="my-4">
                <p>Feeling tired all the time? why you didn’t try our endurance program? this program helps you train your Endurance. Endurance is the ability of an organism to exert itself and remain active for a long period of time, as well as its ability to resist, withstand, recover from and have immunity to trauma, wounds or fatigue.</p>
              </div>
              <button className="border border-yellow-primary text-yellow-primary px-4 py-1 my-4 group-hover:text-blue-primary group-hover:border-blue-primary transition-all duration-300">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="max-w-2xl">
            <img src="/image/workouts/Endurance.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center group hover:bg-blue-primary transition-all duration-300">
          <div className="px-4 grid items-center">
            <div className="max-w-xl mx-auto group-hover:text-yellow-primary transition-all duration-300">
              <h2 className="text-4xl font-judul">TONE MUSCLE</h2>
              <div className="my-4">
                <p>did you want to feel more confident with your look? if it so, this program suit you better. Toning your muscle it means reduce your body fat as well as increase your muscle mass. it help your body shaping, which make your fashion suit better.</p>
              </div>
              <button className="border border-yellow-primary text-yellow-primary px-4 py-1 my-4">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="max-w-2xl">
            <img src="/image/workouts/Tone_Muscle.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center lg:flex-row-reverse group hover:bg-yellow-primary transition-all duration-300">
          <div className="px-4 grid items-center">
            <div className="max-w-xl mx-auto group-hover:text-blue-primary transition-all duration-300">
              <h2 className="text-4xl font-judul">FLEXIBILITY & MUSCLE KNOT RELEASE</h2>
              <div className="my-4">
                <p>did you feeling tired with your daily activity? want to relax your muscle and mind? if you think so, we recommend you to join this program. This program aim to stretch your muscle and join, which increase your flexibilty and help you resting better.</p>
              </div>
              <button className="border border-yellow-primary text-yellow-primary px-4 py-1 my-4 group-hover:text-blue-primary group-hover:border-blue-primary transition-all duration-300">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="max-w-2xl">
            <img src="/image/workouts/Flexibility.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
          </div>
        </div>
        <div className="my-4 lg:flex lg:justify-between lg:items-center group hover:bg-blue-primary transition-all duration-300">
          <div className="px-4 grid items-center">
            <div className="max-w-xl mx-auto group-hover:text-yellow-primary transition-all duration-300">
              <h2 className="text-4xl font-judul">STRENGTH</h2>
              <div className="my-4">
                <p>did you feel struggle increasing your strength? then why not join this program. this program will provide access to specific strength training equipment and supervision, as well as providing an environment that some people find supportive.</p>
              </div>
              <button className="border border-yellow-primary text-yellow-primary px-4 py-1 my-4">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="max-w-2xl">
            <img src="/image/workouts/Strength.jpg" alt="Fitnesswork" className="w-full object-cover object-center"/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Workouts