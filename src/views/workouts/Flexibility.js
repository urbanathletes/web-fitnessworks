import React from 'react'
import ButtonLink from '../../components/ButtonLink'

function Flexibility() {
  return (
    <div>
      <div className="w-full h-7 bg-blue-primary"></div>
      
      <div className="container text-blue-primary">
        <h1 className="my-8 font-judul text-5xl text-center">FLEXIBILITY & MUSCLE KNOT RELEASE</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/Flexibility/Fitball.jpg" alt="Fitball" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">FITBALL</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/fitball" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/Flexibility/Yoga_Wheel.jpg" alt="Yoga_Wheel" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">YOGA WHEEL</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/yoga-wheel" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/Flexibility/Yoga.jpg" alt="Vinyasa Yoga" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">Vinyasa Yoga</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/vinyasa-yoga" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/Flexibility/TRX.jpg" alt="TRX" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">TRX</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts/trx" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4 grid xl:grid-cols-3 2xl:container">
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Tone_Muscle.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">TONE MUSCLE</h3>
            <p>did you want to feel more confident with your look? if it so, this program suit you better. Toning your muscle it means reduce your body fat as well as increase your muscle mass. it help your body shaping, which make your fashion suit better.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/tone-muscle" />
          </div>
        </div>
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Endurance.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">ENDURANCE</h3>
            <p>Feeling tired all the time? why you didn’t try our endurance program? this program helps you train your Endurance. Endurance is the ability of an organism to exert itself and remain active for a long period of time, as well as its ability to resist, withstand, recover from and have immunity to trauma, wounds or fatigue.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/endurance" />
          </div>
        </div>
        <div className="text-blue-primary w-full md:flex xl:block">
          <div className="md:w-1/2 xl:w-full">
            <img src="/image/workouts/Flexibility.jpg" alt="Flexibility" className="object-cover object-center w-full h-full"/>
          </div>
          <div className="p-8 space-y-4 md:my-auto md:w-1/2 xl:w-full">
            <h3 className="font-judul text-3xl">FLEXIBILITY & MUSCLE KNOT RELEASE</h3>
            <p>did you feeling tired with your daily activity? want to relax your muscle and mind? if you think so, we recommend you to join this program. This program aim to stretch your muscle and join, which increase your flexibilty and help you resting better.</p>
            <ButtonLink text="VIEW MORE" link="/workouts/flexibility" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Flexibility