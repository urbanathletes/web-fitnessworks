import React from 'react'
import { Link } from 'react-router-dom'

function News3() {
  return (
    <div>
      <div className="overflow-hidden mb-4 pb-8">
        <div className="pb-8 flex justify-center max-h-[30vh] lg:max-h-[80vh] relative">
          <img className="object-cover object-top w-full mx-auto" src="/image/article/news3.png" alt="News"/>
        </div>
        
        <div className="container flex flex-col md:flex-row-reverse justify-center pb-8">
          <div className="my-2">
            <h2 className="my-2 text-xl sm:text-3xl font-black">5 hal yang perlu kamu siapkan sebelum pertama kali pergi ke gym?</h2>
            <div className="space-y-2 pt-2">
              <p className="text-sm sm:text-base">
              Buat kamu yang pertama kali melakukan sesuatu biasanya mengalami kebingungan dan keraguan. Apalagi untuk memulai ngegym. Buat kamu yang belum pernah ngegym sebelumnya pasti bingung apa saja yang harus disiapkan sebelum pertama kali ngegym. Biar kamu ga kebingungan berikut kami sajikan 5 hal yang perlu kamu siapkan sebelum pertama kali ngegym.
              </p>
              <ul className="list-decimal">
                <li className="space-y-2 py-2">
                  Mindset
                  <p className="py-2">
                  Banyak yang lupa, hal pertama yang harus disiapkan sebelum pertama kali ngegym adalah membangun mindset yang tepat. Sebelum memutuskan membeli membership gym, kamu harus menata mindset terlebih dahulu. Mindset yang dibutuhkan adalah, bahwa tidak ada yang namanya instan. Apalagi untuk mencapai fitness / body goals yang kamu inginkan. Butuh perjalanan yang tidak sebentar dan komitmen untuk mencapainya. Pergi ke gym hanyalah awal dari fitness Journey mu. 
                  </p>
                  <p className="py-2">
                  Hal lain yang perlu diingat adalah bahwa perkembangan setiap orang itu berbeda-beda. Jangan sedih apalagi sampai patah semangat jika kamu merasa perkembanganmu lebih lama dibandingkan orang lain. Membangun mindset seperti ini penting agar kamu tidak merasa kecewa. 
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Outfit yang nyaman (tidak perlu mahal)
                  <p className="py-2">
                  Outfit yang bagus bisa jadi menambah kepedeanmu melangkahkan kaki di gym. Tapi bukan berarti harus mahal. Yang terpenting justru adalah fungsi dan kenyamanannya. Outfit untuk ngegym harus dari bahan yang kuat, elastis, dan menyerap keringat. Tergantung aktivitasmu, mungkin kamu membutuhkan sneakers dengan sol yang rata dan dari bahan yang anti slip, sangat disarankan jika kamu melakukan latihan tubuh bagian bawah. Jangan lupa juga membawa handuk kecil untuk menyeka keringat. Jika kamu memutuskan untuk melakukan angkat beban yang berat, maka kamu akan membutuhkan waist belt untuk mencegahmu dari cidera punggung.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Botol minum
                  <p className="py-2">
                  Jika kamu berlangganan di gym kami maka kamu tidak perlu membawa minuman sendiri setiap ngegym, kami sudah menyediakan dispenser air gratis untuk mu. Kamu cukup menyediakan botol kosong dari rumah. Tidak perlu mahal, cukup pastikan botol yang kamu beli dari bahan food grade agar aman untuk dipakai. Selalu pastikan kamu membawanya setiap akan ngegym karena saat tubuh bekerja keras, tubuh mengeluarkan cairan yang banyak. Jangan sampai kamu pingsan karena kekurangan cairan. Jika kamu lupa atau tidak punya botol sendiri, kamu bisa membeli minuman di vending machine kami.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Orang yang membimbingmu
                  <p className="py-2">
                  Saat pertama kali ngegym, kami tidak menganjurkan untuk melakukan latihan sendiri. Karena tanpa pengalaman mungkin kamu bisa saja mengalami cidera saat berolahraga. Jangan ragu untuk bertanya pada orang disekitarmu tentang bagaimana cara yang benar menggunakan suatu alat. Kamu juga bisa menggunakan jasa personal trainer. Menggunakan jasa personal trainer akan lebih aman dan nyaman buat kamu yang baru pertama kali ngegym. Karena personal trainer bisa membimbing dan mengarahkan latihanmu agar mencapai hasil yang maksimal. Bahkan di beberapa tempat gym (seperti tempat kami), personal trainer tidak hanya mengarahkan latihan mu tapi juga bisa menjadi konsultan nutrisi mu. Jika kamu lebih suka berolahraga bersama banyak orang kamu bisa juga mengikuti kelas. Dengan mengikuti kelas maka kamu akan dibimbing oleh instruktur profesional, sehingga resiko cedera dapat terhindarkan.
                  </p>
                </li>
                <li className="space-y-2 py-2">
                  Finansial
                  <p className="py-2">
                  Jika semua aspek diatas dirasa kamu sudah siapkan dan pahami, maka ini saatnya kamu menyiapkan uang untuk langganan membership. Jangan asal berlangganan membership, tapi pastikan dulu fasilitas yang kamu inginkan dan dapatkan sesuai dengan uang yang kamu keluarkan. Jika aspek finansial ini menjadi pertimbanganmu, maka menjadi membership kami mungkin adalah jawabannya. Kami bisa memastikan anda mendapatkan harga termurah dibandingkan fasilitas yang didapat. Ada berbagai macam pilihan membership plan juga yang bisa anda pilih, menyesuaikan kebutuhan dan alokasi dana yang anda miliki.
                  </p>
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

export default News3