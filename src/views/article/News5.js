import React from 'react'

function News5() {
  return (
    <div>
      <div className="overflow-hidden mb-4 pb-8 border-b-2 border-neutral-600">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news5.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center">
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

        <div className="py-8 hidden">
          <div className="relative">
            <h2 className="uppercase text-4xl font-FuturaBold text-center">LATEST BLOG POSTS</h2>
            <div className="absolute bottom-0 right-0 left-0 mx-auto -mb-4 w-28 border-b-8 border-yellow-primary"></div>
          </div>
          <div className="flex flex-nowrap justify-start xl:justify-center overflow-auto no-scrollbar my-12 mb-8">
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <a href="{{ url('news/news6') }}">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="{{ url('image/web/news/ekonomi3.jpg') }}" alt="News Urban Athletes"/>
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4 text-sm">
                    <p className="font-PoppinsSemiBold text-base text-white">12</p>
                    <p className="text-yellow-primary">APR '12</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                    <p className="text-yellow-primary">Artikel Update</p>
                  </div>
                  <div className="text-left">
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-black">Verawaty Budiyanto, Pendiri Urban Athletes: Membuat Orang Ketagihan Hidup Sehat</p>
                  <p className="text-sm text-neutral-700">
                    Meski baru didirikan September 2016, Urban Athletes telah menjadi salah satu tempat latihan kebugaran atau fitness center pilihan utama masyarakat…..
                  </p>
                </div>
              </a>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <a href="{{ url('news/news2') }}">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="{{ url('image/web/news/original2.jpg') }}" alt="News Urban Athletes"/>
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4 text-sm">
                    <p className="font-PoppinsSemiBold text-base text-white">12</p>
                    <p className="text-yellow-primary">APR '12</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                    <p className="text-yellow-primary">Artikel Update</p>
                  </div>
                  <div className="text-left">
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-black">Menjaga Kebugaran Tanpa Terikat Jadwal dan Waktu</p>
                  <p className="text-sm text-neutral-700">
                    Centroone.com - Menjaga kebugaran sebagai bagian dari salah satu cara untuk menjaga kesehatan adalah hal penting. Tapi karena kesibukan kerja dan rutinitas sehari-hari di kantor, terutama……
                  </p>
                </div>
              </a>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <a href="{{ url('news/news3') }}">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="{{ url('image/web/news/virtual-studio-tis-4.jpg') }}" alt="News Urban Athletes"/>
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4 text-sm">
                    <p className="font-PoppinsSemiBold text-base text-white">12</p>
                    <p className="text-yellow-primary">APR '12</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                    <p className="text-yellow-primary">Artikel Update</p>
                  </div>
                  <div className="text-left">
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-black">Pertama di Jatim, Urban Athletes Kenalkan Virtual Fitness Studio</p>
                  <p className="text-sm text-neutral-700">
                    Kesibukan masyarakat Surabaya yang kian padat, kerap menjadi alasan mereka untuk tidak bisa menjaga kebugaran sehari-hari. Kini kendala itu coba diatasi oleh Urban Athletes…..
                  </p>
                </div>
              </a>
            </div>
            <div className="max-w-[300px] min-w-[300px] mx-2">
              <a href="{{ url('news/news4') }}">
                <div className="relative overflow-hidden">
                  <img className="aspect-square object-cover object-center mx-auto" src="{{ url('image/web/news/brt247716752.jpg') }}" alt="News Urban Athletes"/>
                  <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4 text-sm">
                    <p className="font-PoppinsSemiBold text-base text-white">12</p>
                    <p className="text-yellow-primary">APR '12</p>
                  </div>
                  <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                    <p className="text-yellow-primary">Artikel Update</p>
                  </div>
                  <div className="text-left">
                  </div>
                </div>
                <div className="p-2">
                  <p className="font-black">Urban Athletes Akan Buka 5 Cabang Lagi Tahun Depan</p>
                  <p className="text-sm text-neutral-700">
                    Kesadaran masyarakat khususnya di kota-kota besar untuk hidup sehat terus meningkat. Ini dapat dilihat dengan kian maraknya kehadiran pusat kebugaran ….
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News5