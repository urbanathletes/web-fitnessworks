import React from 'react'
import { Link } from 'react-router-dom'

function News5() {
  return (
    <div>
      <div className="overflow-hidden mb-4 pb-8">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news5.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center pb-8">
          <div className="my-2">
            {/* <p className="text-yellow-primary text-xs sm:text-sm">CENTROONE.COM</p> */}
            <h2 className="my-2 text-xl sm:text-3xl font-black">Program diet untuk turunkan berat badan</h2>
            <div className="space-y-2 pt-2">
              <p className="text-sm sm:text-base">
                Terkadang untuk menurunkan berat badan, olahraga saja tidak cukup. Beberapa orang, mungkin membutuhkan program diet yang tepat untuk membantu menurunkan berat badannya. Banyak sekali program diet yang bisa membantumu menurunkan berat badan. Berikut kami rangkum beberapa program diet yang dapat membantumu menurunkan berat badan.
              </p>
              <ul className="list-decimal">
                <li className="space-y-2 py-2">
                  <p>The Volumetrics Diet</p>
                  <p>Metode diet ini dicetuskan pertama kali oleh ilmuwan nutrisi, Dr. Barbara Rolls. Dikutip dari healthline, fokus diet ini adalah untuk mendahulukan makanan dengan kalori rendah dan kaya nutrisi ketika makan. Berdasarkan diet ini, kita mengurangi rasa lapar dengan memperbanyak mengonsumsi makanan yang rendah kalori – tinggi air dan kaya nutrisi, seperti buah, sayur, dan sup. Di sisi lain mengurangi makanan yang tinggi kalori dan gula, seperti kue dan manisan.</p>
                  <p>Diet ini membagi makanan dalam beberapa kategori di antaranya:</p>
                  <ul className="list-disc mx-5">
                    <li>kategori 1 (kepadatan kalori sangat rendah): kepadatan kalori kurang dari 0.6</li>
                    <li>Category 2 (kepadatan kalori rendah): kepadatan kalori ada di antara 0.6–1.5</li>
                    <li>Category 3 (kepadatan kalori medium): kepadatan kalori ada di antara of 1.6–3.9</li>
                    <li>Category 4 (kepadatan kalori tinggi): kepadatan kalori ada di antara of 4.0–9.0</li>
                  </ul>
                </li>
                <li className="space-y-2 py-2">
                  <p>Diet Plant-based</p>
                  <p>Diet ini adalah versi lebih fleksibel dari vegetarian. Pada dasarnya kamu harus mendahulukan mengonsumsi makanan yang berasal dari tumbuhan dengan sedikit tambahan daging, telur atau produk hewani lain. Dalam diet ini kamu akan banyak mengonsumsi serat dari tumbuhan dan lebih sedikit lemak. Sehingga total kalori yang kamu makan sehari-harinya akan lebih sedikit daripada biasanya. Dalam menjalani diet plant-based usahakan untuk mengonsumsi “whole food” atau makanan yang masih natural. Semisal konsumsilah buah utuh daripada membeli jus di minimarket.</p>
                </li>
                <li className="space-y-2 py-2">
                  <p>Intermitten Fasting</p>
                  <p>Jika kamu tipe yang susah sekali makan ‘bersih’ mungkin intermitten fasting bisa menjadi solusi.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row md:flex-col mt-2 mr-4">
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/like.png" alt="icon"/>
            </button>
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/share.png" alt="icon"/>
            </button>
            <button className="w-10 sm:w-12 my-4 mx-2 flex justify-center rounded-full border border-black">
              <img className="w-5 sm:w-7 m-2" src="/image/icon/comment.png" alt="icon"/>
            </button>
          </div>
        </div>

        <div className="py-8 border-t-2 border-neutral-600">
          <div className="text-blue-primary">
            <h2 className="uppercase text-4xl font-judul text-center">LATEST BLOG POSTS</h2>
          </div>
          <div className="flex flex-nowrap justify-start md:justify-center space-x-8 overflow-auto no-scrollbar my-12 mb-8">
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link to="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news5.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">Program diet untuk turunkan berat badan</p>
                  <p className="text-sm text-neutral-700 py-1">
                    Terkadang untuk menurunkan berat badan, olahraga saja tidak cukup. Beberapa orang, mungkin ... 
                  </p>
                </div>
              </Link>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link to="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news1.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">Apa penyebab lemak perut</p>
                  <p className="text-sm text-neutral-700 py-1">
                    Lemak perut memang menjengkelkan. Apalagi kalau sudah merusak penampilan dan jadi membatasi ruang ... 
                  </p>
                </div>
              </Link>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <Link to="/article">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="/image/article/news3.png" alt="News Urban Athletes"/>
                </div>
                <div className="p-2">
                  <p className="font-black">Program diet untuk turunkan berat badan</p>
                  <p className="text-sm text-neutral-700 py-1">
                    Buat kamu yang pertama kali melakukan sesuatu biasanya mengalami kebingungan dan keraguan. Apalagi ...
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News5