import thumbnail from "/thumbnail.svg";

import { Avatar, AvatarFallback, AvatarImage } from "/src/components/ui/avatar"
import { TextEffect } from '/components/motion-primitives/text-effect.tsx';


type TextBoxProps = {
    user: boolean;
    children: React.ReactNode;
  };
const TextBox: React.FC<TextBoxProps> = ({ user, children }) => {
  return (
    <div className={`flex space-x-5 space-y-5 ${user ? "flex-row-reverse space-x-reverse" : ""} `}>
      <Avatar>
        {!user ? (
          <AvatarImage src={thumbnail} alt="User Avatar" />
        ) : null}
        <AvatarFallback className="bg-rose-200 text-white">{user ? "U" : "Ai"}</AvatarFallback>
      </Avatar>
      <TextEffect per="word" preset="scale" speedReveal={1} speedSegment={2} className="text-xl font-zilla-slab-regular text-justify">{children}</TextEffect>
      <div className="px-5"></div>
    </div>
  );
};

export default TextBox;