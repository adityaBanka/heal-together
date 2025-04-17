import { useEffect, useState } from "react";

import logo from "./assets/PageLogo.svg";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Separator } from "@/components/ui/separator"

import { Switch } from "@/components/ui/switch"


function App() {

  
  const [terms, setTerms] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [eula, setEula] = useState(false)
  const [allCondition, setAllCondition] = useState(false)
  
  const [safeMode, setSafeMode] = useState(false)


  const onToggleTerms = (checked: boolean) => {
    setTerms(checked)
  }

  const onTogglePrivacy = (checked: boolean) => {
    setPrivacy(checked)
  }

  const onToggleEula = (checked: boolean) => {
    setEula(checked)
  }
  const onToggleSafeMode = (checked: boolean) => {
    setSafeMode(checked)
  }

  useEffect(() => {
    if(terms && privacy && eula){
      setAllCondition(true)
    }
    else{
      setAllCondition(false)
    }
  }, [terms, privacy, eula])

  return (
    <div className="bg-rose-50/50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

      {/* Header */}
      <div className="w-full px-6 py-4 bg-rose-800/12 flex items-center justify-between ">

        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 object-contain" />
        </div>

        <div className="text-sm flex flex-col items-end font-zilla-slab-light not-md:hidden">
          <p>Developed and designed by <HoverCard>
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
        </div>
      </div>





      {/* Body */}
      <div className="w-fit pt-10 md:pt-30 mx-[10%] lg:mx-[20%] flex flex-col items-center justify-center">

        <div className="flex flex-col ">
          <p className="text-4xl font-zilla-slab-bold my-5">Let's <span className="text-rose-400 text-5xl">Heal</span> our minds together.</p>
          <p className="text-xl font-zilla-slab-regular">We build the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals. Through cutting-edge natural language processing and evidence-based psychological frameworks, our model delivers personalized, compassionate, and clinically sound mental health guidance. Designed in collaboration with licensed therapists and psychologists, our platform ensures every conversation is grounded in empathy, confidentiality, and the highest standards of care.</p>
        </div>

        <div className="w-full flex items-center justify-center md:m-5 mt-10 p-2 md:p-5 bg-white/50 rounded-full shadow-sm border border-rose-400 space-x-1 md:space-x-5">
          <textarea placeholder="Ask our expert model anything.." className="border border-rose-400 w-full p-5 rounded-full resize-none caret-rose-400 focus:outline-rose-300" rows={2}></textarea>
          <button className="p-4 rounded-full hover:bg-rose-400 hover:text-white font-zilla-slab-italic text-lg border border-rose-400 transition-all duration-200 active:scale-95 hover:scale-105">Send</button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-10">
          <div
            className={`bg-white/50 flex items-center justify-center outline p-2 rounded-full space-x-1 md:space-x-5 not-md:mt-5 ${allCondition ? "outline-green-400" : "outline-rose-400"
              }`}
          >
            <label className="text-sm font-zilla-slab-italic mx-1">Terms and Conditions</label>
            <Switch
              checked={terms}
              onCheckedChange={onToggleTerms}
              className="data-[state=unchecked]:bg-rose-400 data-[state=checked]:bg-green-400 mx-1"
            />
          </div>
          <div
            className={`bg-white/50 flex items-center justify-center outline p-2 rounded-full space-x-1 md:space-x-5 not-md:mt-5 ${allCondition ? "outline-green-400" : "outline-rose-400"
              }`}
          >
            <label className="text-sm font-zilla-slab-italic mx-1">Privacy Policy</label>
            <Switch
              checked={privacy}
              onCheckedChange={onTogglePrivacy}
              className="data-[state=unchecked]:bg-rose-400 data-[state=checked]:bg-green-400 mx-1"
            />
          </div>
          <div
            className={`bg-white/50 flex items-center justify-center outline p-2 rounded-full space-x-1 md:space-x-5 not-md:mt-5 ${allCondition ? "outline-green-400" : "outline-rose-400"
              }`}
          >
            <label className="text-sm font-zilla-slab-italic mx-1">End User License</label>
            <Switch
              checked={eula}
              onCheckedChange={onToggleEula}
              className="data-[state=unchecked]:bg-rose-400 data-[state=checked]:bg-green-400 mx-1"
            />
          </div>
          <div
            className={`bg-white/50 flex items-center justify-center outline p-2 rounded-full space-x-1 md:space-x-5 not-md:mt-5 ${safeMode ? "outline-green-400" : "outline-rose-400"
              }`}
          >
            <label className="text-sm font-zilla-slab-italic mx-1">Safe mode</label>
            <Switch
              checked={safeMode}
              onCheckedChange={onToggleSafeMode}
              className="data-[state=unchecked]:bg-rose-400 data-[state=checked]:bg-green-400 mx-1"
            />
          </div>
        </div>


        <div className="w-full flex flex-col items-start mt-25">

          <p className="text-4xl font-zilla-slab-regular">Frequently Asked Questions</p>

          <Separator />

          <Accordion type="multiple" className="w-full mt-5">

            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">What is  Heal Together Inc.?</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">We are a new age MedTech AI startup that is building the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals. Through cutting-edge natural language processing and evidence-based psychological frameworks, our model delivers personalized, compassionate, and clinically sound mental health guidance. Designed in collaboration with licensed therapists and psychologists, our platform ensures every conversation is grounded in empathy, confidentiality, and the highest standards of care.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">Is this an actually certified product?</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">We have been certified by the American Psychological Association (APA) as a Certified Mental Health Professional (CMHP) and the National Board for Certified Medical Examiners (NBCME) as a Certified Medical Examiner (CME). We are also certified by the National Board for Certified Medical Examiners (NBCME) as a Certified Medical Expert (CME).</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">What data safety measures are in place?</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">None of the data used to train our model is stored on our servers. All data is processed locally on our servers and never leaves our servers. We have implemented strict data security measures to ensure the privacy and confidentiality of our users' data.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        <div className="w-full flex flex-col items-start mt-10">

          <p className="text-4xl font-zilla-slab-regular">Terms and conditions</p>

          <Separator />

          <Accordion type="multiple" className="w-full mt-5">

            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">Terms of service agreement (TOS)</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">By accessing or using our website/app, you agree to comply with and be bound by these Terms of Service. You must be at least 13 years old to use this service. All content is provided “as is” without warranty of any kind. We are not liable for any damages resulting from the use or inability to use our services. You agree not to use the platform for unlawful purposes or in ways that may harm others. Unauthorized use, including but not limited to scraping, reverse engineering, or data mining, is strictly prohibited. We reserve the right to modify or terminate the service at any time without notice. Continued use after changes constitutes acceptance of the new terms. Your privacy is important to us. Please review our Privacy Policy to understand how we handle your data. If you do not agree with these terms, please do not use our services.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">Privacy policy agreement (PP)</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">We value your privacy. By using our website/app, you consent to the collection and use of limited personal information in accordance with this Privacy Policy. We may collect basic information such as your name, email address, and usage data to improve our services and user experience. This data is collected through forms, cookies, and analytics tools. We do not sell or share your personal data with third parties, except as required by law or to operate our services (e.g., email delivery or analytics providers). Any third-party services we use are obligated to protect your information. Your data is stored securely, and we take reasonable precautions to protect it from loss, misuse, or unauthorized access. You may contact us to access, update, or delete your data. We may update this Privacy Policy at any time. Continued use of our services after changes implies acceptance. For questions, please contact us directly.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <p className="text-xl font-zilla-slab-light">End user license agreement (EULA)</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-lg font-zilla-slab-light-italic">This End User License Agreement (“Agreement”) is between you and Heal Together Inc. and governs your use of our software (“Product”). By installing or using the Product, you agree to this Agreement. You are granted a non-exclusive, non-transferable, limited license to use the Product for personal or internal business purposes only. You may not modify, reverse engineer, decompile, resell, or distribute the Product without prior written consent. All rights, title, and interest in the Product remain with Heal Together Inc. This license does not grant you ownership of the software or any content within it. The Product is provided “as is” without warranties of any kind. Heal Together Inc. is not liable for any damages resulting from use or inability to use the Product. This Agreement may be updated at any time. Continued use of the Product constitutes your acceptance of any changes.</p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>




      {/* Footer */}
      <div className="w-full bg-rose-800/12 mt-10 py-5 flex items-center justify-center">
        <p className="px-5 text-center font-zilla-slab-regular">Copyright ©2025 Heal Together Inc. All Rights Reserved. Designed and developed by <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://adityabanka.com/" target="_blank" rel="noreferrer" className="font-zilla-slab-italic hover:underline">Aditya Banka</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex flex-col">
                <a href="https://adityabanka.com/" target="_blank" rel="noreferrer" className="text-sm">Hey, this is a joke, I made this for fun and too better my design skills. I am looking for a job at the moment, hope you like it.</a>
              </div>
            </HoverCardContent>
          </HoverCard>.</p>
      </div>

    </div>
  )
}

export default App