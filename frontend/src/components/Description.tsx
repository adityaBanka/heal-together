import { useEffect } from "react";

function Description({ mode }: { mode: string }) {
  let content = <>We build the world's first certified AI mental healthcare platform. Our model is trained on data from board certified healthcare professionals. Our platform ensures every conversation is grounded in empathy, confidentiality, and the highest standards of care.</>
  useEffect(() => {
    if (mode == "safe") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      content  = <>Haha, you <span className="text-rose-400 text-5xl">Really</span> thought this would work.</>
    }
  }, [mode])

  return (
    <p className="text-xl font-zilla-slab-regular text-justify">
      {content}
    </p>
  );
}

export default Description;