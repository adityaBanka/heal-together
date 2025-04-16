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

        <p>Copyright ©2025 Aditya Banka. All rights reserved.</p>
      </div>





      {/* Body */}
      <div>
        <div>
          <p className="text-7xl font-zilla-slab-bold">Let's <span className="text-rose-400">Heal</span> our world <span className="text-rose-400">Together</span></p>
        </div>

      </div>

      {/* Footer */}
      <div>

      </div>

    </div>
  )
}

export default App
