import React, { useState } from 'react'
import InputText from '../components/InputText';

function FormFreeTrial() {
  
  const bgPage = {
    width: "100%",
    backgroundImage: "url(/image/inves/Header_Kemitraan_overlay.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function login(el) {
    el.preventDefault()
    console.log(inputs);
  }
  function singup(el) {
    el.preventDefault()
    console.log(inputs);
  }

  function changeForm(params) {
    params.preventDefault();
    var login = document.querySelector('#login');
    var singup = document.querySelector('#singup');
    login.classList.toggle('hidden');
    singup.classList.toggle('hidden');
  }

  return (
    <div>
      <div className="w-full h-screen" style={bgPage}>
        <div className="flex justify-center my-8 py-8">
          <div className="bg-red-400 relative">
            <img src="/image/trial_img.jpg" alt="Free Trial" className="w-52" />
            <div className="border-2 border-yellow-primary absolute top-3 -bottom-3 left-3 -right-3"></div>
            <div className="absolute -right-10 bottom-5 backdrop-blur-sm bg-white/30 rounded-xl pl-5 pr-10 text-yellow-primary font-judul text-xl">
              <h2>LET’S TRY THE <br/>CLUB!</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bg-white p-6 text-blue-primary">
            <h2 className="text-2xl">REDEEM FREE TRIAL ANDA!</h2>
            <div>
              <form onSubmit={singup}>
                <div className="my-4">
                  <label>
                    <span className="mx-2">Pilih Kota</span>
                    <select className="block w-full my-2 py-1 px-2 bg-white border border-blue-primary">
                      <option value="" key="">Pilih Kota</option>
                      <option value="Surabaya" key="1">Surabaya</option>
                      <option value="Jakarta" key="2">Jakarta</option>
                    </select>
                  </label> 
                </div>
                <div className="my-4">
                  <label>
                    <span className="mx-2">Pilih Club</span>
                    <select className="block w-full my-2 py-1 px-2 bg-white border border-blue-primary">
                      <option value="" key="">Pilih Club</option>
                      <option value="Club A" key="1">Club A</option>
                      <option value="Club B" key="2">Club B</option>
                    </select>
                  </label> 
                </div>
                <div className="py-0.5 flex items-end space-x-4 w-full">
                  <label className="my-4">
                    <span className="mx-2">Gender</span>
                    <select className="block w-full my-0 py-1.5 px-2 bg-white border border-blue-primary">
                      <option value="" key="">Gender</option>
                      <option value="TUAN" key="1">TUAN</option>
                      <option value="NYOYA" key="2">NYOYA</option>
                    </select>
                  </label> 
                  <div className="w-full">
                    <InputText label="Your Name" type="name" name="name" id="name"
                    value={inputs.name || ''}
                    onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="py-0.5">
                  <InputText label="Phone" type="phone" name="phone" id="phone"
                  value={inputs.phone || ''} 
                  onChange={handleChange}
                  />
                </div>
                <div className="py-0.5">
                  <InputText label="Password" type="password" name="password" 
                    value={inputs.password || ''} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="py-1 flex items-center">
                  {/* <input type="checkbox" value="true" className="w-4 h-4"/>
                  <label className="text-xs pl-2">I’VE READ AND AGREE TO DATA PRIVACY POLICY.</label> */}
                </div>
                <div className="my-4">
                  <button type='submit' className="border border-blue-primary py-1 w-full hover:bg-yellow-primary transition-all duration-300">Sing Up</button>
                </div>
                <div className="mt-8 text-sm flex space-x-2">
                  <p>Don’t have an account ? </p><button onClick={changeForm}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormFreeTrial