import { useEffect } from "react";

function Title({ mode }: { mode: string }) {
  let content = <>Let's <span className="text-rose-400 text-5xl">Heal</span> our minds together.</>
  useEffect(() => {
    if (mode == "safe") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      content  = <>Haha, you <span className="text-rose-400 text-5xl">Really</span> thought this would work.</>
    }
  }, [mode])

  return (
    <p className="text-4xl font-zilla-slab-bold my-5">
      {content}
    </p>
  );
}

export default Title;