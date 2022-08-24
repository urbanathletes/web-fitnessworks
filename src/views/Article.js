import React from 'react'
// import BgArticle from ''

function Article() {

  const bgArticle = {
    width: "100%",
    backgroundImage: "url(/image/article/BGArticle.jpg)"
  };

  return (
    <div>
      <div className="bg-cover bg-center object-cover object-center relative" style={bgArticle}>
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-90"></div>
        <div className="container grid grid-cols-2 lg:grid-cols-3 py-12">
          <div className="col-span-2 row-span-2 relative group overflow-hidden">
            <a href="news/news1">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/original.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4">
                <p className="font-PoppinsSemiBold text-lg text-white">12</p>
                <p className="text-yellow-primary">APR '12</p>
              </div>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">TIPS & TRICK</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-lg text-white mb-2">Resmi Dibuka, Urban Athletes Marvell City Hadirkan The Valor</p>
                  <p className="text-yellow-primary text-sm">centroone.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative group overflow-hidden">
            <a href="news/news2">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/original2.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 left-0 bg-black bg-opacity-50 p-2 m-4">
                <p className="font-PoppinsSemiBold text-lg text-white">12</p>
                <p className="text-yellow-primary">APR '12</p>
              </div>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-white mb-2">Menjaga Kebugaran Tanpa Terikat Jadwal dan Waktu</p>
                  <p className="text-yellow-primary text-xs">centroone.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative group overflow-hidden">
            <a href="news/news3">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/virtual-studio-tis-4.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-white mb-2">Pertama di Jatim, Urban Athletes Kenalkan Virtual Fitness Studio</p>
                  <p className="text-yellow-primary text-xs">harianbhirawa.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative group overflow-hidden">
            <a href="news/news4">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/brt247716752.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-white mb-2">Urban Athletes Akan Buka 5 Cabang Lagi Tahun Depan</p>
                  <p className="text-yellow-primary text-xs">beritajatim.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative group overflow-hidden">
            <a href="news/news5">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/circuit.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-white mb-2">Berganti Nama, Urban Athletes Targetkan Buka Lima Cabang di Surabaya</p>
                  <p className="text-yellow-primary text-xs">suarakawan.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="relative group overflow-hidden">
            <a href="news/news6">
              <img className="object-cover object-center h-full w-full mx-auto group-hover:scale-105 transition-all duration-300" src="image/article/ekonomi3.jpg" alt="News Urban Athletes"/>
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 py-1 px-4 m-4">
                <p className="text-yellow-primary">Article Update</p>
              </div>
              <div className="absolute bottom-0 top-0 right-0 left-0 text-left bg-gradient-to-t from-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="h-fit px-4 pb-6 absolute bottom-0 right-0 left-0">
                  <p className="font-AmpleSoft text-white mb-2">Verawaty Budiyanto, Pendiri Urban Athletes: Membuat Orang Ketagihan Hidup Sehat</p>
                  <p className="text-yellow-primary text-xs">memorandum.id</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article