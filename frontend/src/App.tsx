import logo from "./assets/logoipsum-custom-logo.svg";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function App() {

  return (
    <div className="bg-rose-50/50 h-screen">

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Header */}
      <div className="w-full px-6 py-4 bg-rose-800/12 flex items-center justify-between ">

        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 object-contain" />
        </div>

        <div className="text-sm flex flex-col items-end font-zilla-slab-light-italic  not-md:hidden">
          <p>Copyright ©2025 <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://adityabanka.com/" target="_blank" rel="noreferrer" className="font-zilla-slab-italic hover:underline">Aditya Banka</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex flex-col">
                <p className="text-sm">Aditya Banka is a software engineer and entrepreneur with a passion for building innovative solutions that make a difference in people's lives.</p>
                <p className="text-sm">He is the founder of Aditya Banka Technologies, a company that specializes in developing cutting-edge software applications.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          </p>
          <p>All rights reserved</p>
        </div>
      </div>





      {/* Body */}
      <div>
        <div className="w-fit pt-40 mx-[10%] md:mx-[20%] flex flex-col items-center justify-center">
          
          <div className="flex flex-col items-start">
            <p className="text-4xl font-zilla-slab-bold my-5">Let's <span className="text-rose-400 text-5xl">Heal</span> our minds together</p>
            <p className="font-zilla-slab-regular">We build the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals.</p>
          </div>

          <div className="w-full flex items-center justify-center my-5 bg-white/50 rounded-full shadow-lg p-10">
            <input type="text" placeholder="Hello World" className="bg-white w-full mx-10"></input>
          </div>
        </div>



      </div>

      {/* Footer */}
      <div>

      </div>

    </div>
  )
}

export default App
