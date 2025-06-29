import { CardIcon } from "../Icon/CardIcon";
import { Heart, MessageCircle, Send } from "lucide-react";
export type CardFooterProps = {};
export const CardFooter = () => {
  return (
    <div className="flex flex-row gap-6 items-center p-2 pl-4">
      <CardIcon
        icon={<Heart strokeWidth={2.5} className="w-4 h-4 text-gray-200" />}
      />
      <CardIcon
        icon={
          <MessageCircle strokeWidth={2.5} className="w-4 h-4 text-gray-200" />
        }
      />
      <CardIcon
        icon={
          <Send strokeWidth={2.5} className="w-4 h-4 mt-[4px] text-gray-200" />
        }
      />
    </div>
  );
};
