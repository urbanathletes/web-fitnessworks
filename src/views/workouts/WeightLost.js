import React from 'react'
import ButtonLink from '../../components/ButtonLink'

function WeightLost() {
  return (
    <div>
      <div className="w-full h-7 bg-blue-primary"></div>
      
      <div className="container">
        <h1 className="my-8 font-judul text-5xl text-blue-primary text-center">Weight Lost</h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Circuit.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">CIRCUIT</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/BodyPump.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">LESMILLS <br/>BODYPUMP</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Bodycombat.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">LESMILLS <br/>BODYCOMBAT</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Vinyasa_Yoga.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">Vinyasa Yoga</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="relative max-w-xs">
              <img src="/image/workouts/WeightLoss/Yoga_Wheel.jpg" alt="Weight Loss" />
              <div className="absolute left-0 bottom-0 m-4">
                <h3 className="font-judul text-2xl text-yellow-primary">YOGA WHEEL</h3>
              </div>
            </div>
            <div>
              <ButtonLink text="VIEW MORE" link="/workouts" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WeightLost