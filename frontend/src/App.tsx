import logo from "./assets/PageLogo.svg";

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
                <a href="https://adityabanka.com/" target="_blank" rel="noreferrer" className="text-sm">Hey, this is a joke, I made this for fun and too better my design skills. I am looking for a job at the moment, hope you like it.</a>
              </div>
            </HoverCardContent>
          </HoverCard>
          </p>
          <p>All rights reserved</p>
        </div>
      </div>





      {/* Body */}
      <div>
        <div className="w-fit pt-10 md:pt-40 mx-[10%] md:mx-[20%] flex flex-col items-center justify-center">

          <div className="flex flex-col items-start">
            <p className="text-4xl font-zilla-slab-bold my-5">Let's <span className="text-rose-400 text-5xl">Heal</span> our minds together.</p>
            <p className="font-zilla-slab-regular">We build the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals. Through cutting-edge natural language processing and evidence-based psychological frameworks, our model delivers personalized, compassionate, and clinically sound mental health guidance. Designed in collaboration with licensed therapists and psychologists, our platform ensures every conversation is grounded in empathy, confidentiality, and the highest standards of care.</p>
          </div>

          <div className="w-full flex items-center justify-center m-5 p-2 md:p-5 bg-white/50 rounded-full shadow-sm border border-rose-400 space-x-1 md:space-x-5">
            <textarea placeholder="Ask our expert model anything.." className="border border-rose-400 w-full p-5 rounded-full resize-none caret-rose-400 focus:outline-rose-300" rows={2}></textarea>
            <button className="p-4 rounded-full hover:bg-rose-400 hover:text-white font-zilla-slab-italic text-lg border border-rose-400 transition-all duration-200">Send</button>
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
