import React from 'react'

function TimeTable() {
  return (
    <div>
      <div className="px-4 md:px-0 flex flex-nowrap overflow-visible overflow-x-auto no-scrollbar text-black">
        <table className="table-fixed min-w-max mx-auto text-center">
          <thead>
            <tr className="">
              <th colspan="7">
                <div className="m-2 h-1"></div>
              </th>
            </tr>
            <tr className="text-yellow-primary">
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">MONDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">TUESDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">WEDNESDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">THURSDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">FRIDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">SATURDAY</p></th>
              <th className="w-44"><p className="m-1 py-1 bg-neutral-700">SUNDAY</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="7">
                <div className="grid grid-cols-7">
                  <div>
                    <div className="py-2 bg-white m-1">
                      <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                      <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                      <p>Nama instruktur</p>
                      <p>Nama Club</p>
                    </div>
                    <div className="py-2 bg-white m-1">
                      <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                      <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                      <p>Nama instruktur</p>
                      <p>Nama Club</p>
                    </div>
                  </div>
                  <div>
                    <div className="py-2 bg-white m-1">
                      <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                      <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                      <p>Nama instruktur</p>
                      <p>Nama Club</p>
                    </div>
                    <div className="py-2 bg-white m-1">
                      <p className="bg-yellow-primary mx-1 rounded-sm">10.00 - 11.00 WIB</p>
                      <img className="h-20 p-2 mx-auto" src="/image/logo_kelas/VinyasaYoga.png" alt="Class"/>
                      <p>Nama instruktur</p>
                      <p>Nama Club</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TimeTable