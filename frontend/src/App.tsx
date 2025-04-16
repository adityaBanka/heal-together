import logo from "./assets/logoipsum-custom-logo.svg";
function App() {

  return (
    <div className="bg-rose-50/50 h-screen">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Header */}
      <div className="w-full px-6 py-4 bg-rose-800/12 flex items-center justify-between ">

        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 object-contain" />
        </div>

        <p>Copyright ©2025 <a href="https://adityabanka.com/">Aditya Banka</a>. All rights reserved.</p>
      </div>





      {/* Body */}
      <div>
        <div className="pt-40 px-80 space-y-5">
          <p className="text-4xl font-zilla-slab-bold">Let's <span className="text-rose-400 text-5xl">Heal</span> our world together</p> 
          <p className="font-zilla-slab-regular">We build the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals.  </p> 
        </div>

      </div>

      {/* Footer */}
      <div>

      </div>

    </div>
  )
}

export default App
