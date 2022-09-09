import React from 'react'

function News2() {
  return (
    <div>
      <div className="overflow-hidden mb-4 pb-8 border-b-2 border-neutral-600">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news2.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center">
          <div className="my-2">
            <h2 className="my-2 text-xl sm:text-3xl font-black">Mengatasi mental health issue dengan berolahraga</h2>
            <div className="space-y-2 pt-2">
              <p className="text-sm sm:text-base">
              Sejak pandemi awal 2020 lalu, isu mental health mulai diperbincangkan netizen Indonesia. Mulai dari apa itu mental health sampai bagaimana cara mengatasi mental health. Semua informasi sliweran di dunia maya, bahkan banyak juga yang memberikan tips mengatasi mental health.
              </p>
              <p className="text-sm sm:text-base">
              Dikutip dari website kemkes RI, di tahun 2018 saja ada lebih dari 19 juta penduduk Indonesia berusia lebih dari 15 tahun memiliki mental health issue. Bahkan, lebih dari 12 juta penduduk berusia lebih dari 15 tahun mengalami depresi. Apa kamu salah satunya? Coba deh cek ke psikolog atau psikiatris terdekat.
              </p>
              <p className="text-sm sm:text-base">
              Lalu apa yang bisa kamu lakukan jika ternyata kamu (amit-amit) mengidap mental health issue? Atau hanya sekedar ingin mencegah dan menghindari stress saja?
              </p>
              <p className="text-sm sm:text-base">
              Menurut WHO (Wrold Health Organization), setidaknya ada 6 cara yang bisa kamu lakukan untuk mengatasi mental health issue, diantaranya:
              </p>
              <ul className="list-decimal">
                <li className="space-y-2 py-2">
                Berbicaralah dengan orang yang kamu percaya
                </li>
                <li className="space-y-2 py-2">
                Berbicaralah dengan orang yang kamu percaya
                </li>
                <li className="space-y-2 py-2">
                Jangan gunakan zat-zat berbahaya untuk mengatasi mental health mu
                </li>
                <li className="space-y-2 py-2">
                Merenunglah setidaknya 2 menit
                </li>
                <li className="space-y-2 py-2">
                Jaga kesehatan fisikmu
                </li>
              </ul>
              <p className="text-sm sm:text-base">
              Ya, ternyata kesehatan fisik juga dapat mempengaruhi kesehatan mental juga. Kamu sudah familiar dengan pepatah “Mens sana in corpore sano”? ternyata pepatah “di dalam tubuh yang sehat terdapat jiwa yang kuat” bukanlah karangan guru SD kita saja. Kenapa bisa demikian?
              </p>
              <p className="text-sm sm:text-base">
              Dikutip dari healthdirect.gov.au, berolahraga dapat melepaskan enzim seperti endorfin dan serotonin, enzim ini berperan penting dalam menjaga mood kamu agar tetap baik. Berolahraga dan pergi ke gym juga bisa membuatmu bertemu orang lain. Hal ini akan mengurngi perasaan kesendirian dan isolasi. Jika kamu rutin berolahraga dapat mengurangi stress dan gejala mental health lain seperti, depresi dan anxiety, dan dapat membantumu sembuh dari mental health issue.
              </p>
              <p className="text-sm sm:text-base">
              Menurut penelitian yang dilakukan ke 1,2 juta penduduk USA, telah ditemukan bahwa orang yang sering berolahraga mengalami 1,5x hari lebih sedikit dengan mental health issue dalam sebulan, dibandingkan dengan orang yang jarang berolahraga (dikutip dari sciencedaily.com). Penelitian menunjukkan bahwa olahraga beregu, bersepeda, aerobik, dan ngegym memegang peranan paling penting.
              </p>
              <p className="text-sm sm:text-base">
              Jadi jika kamu merasa mengalami gejala mental health, maka pergi ngegym adalah bukan sesuatu yang buruk. Bahkan jika kamu belum pernah pergi ngegym sama sekali banyak orang-orang baik yang akan membantumu. Personal trainer kami akan selalu siap dan sabar melatihmu hingga mencapai versi terbaik, bukan hanya secara fisikal, tapi juga mentalmu. Selain itu, ada berbagai macam kegiatan menarik lain yang bisa kamu lakukan seperti Zumba yang menyenangkan, dan Yoga yang dapat membuatmu lebih rileks dan tenang.
              </p>
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

export default News2