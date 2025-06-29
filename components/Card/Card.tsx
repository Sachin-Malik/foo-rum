import { FC } from "react";
import { ICard } from "./Card.types";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";
import { timeAgo } from "@/utils/common/time.utils";
export type CardProps = {
  card: ICard;
};

export const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="p-2 rounded-xl bg-gray-100 w-[600px] max-w-[100%]">
      <div className="bg-[white] p-4 rounded-xl shadow-md">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-10 h-10 rounded-xl">
            <img className="rounded-md" src={card.profilePicUrl} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-[600] text-[black] text-[14px] ">
              {card.authorName}
            </p>
            <p className="text-xs text-[black]/60">
              {timeAgo(new Date(card.createdAt))}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full p-2 bg-[lightgrey]/40 w-[24px] h-[24px]  flex flex-row items-center justify-center">
            <p className="text-[20px]">{card.emoji}</p>
          </div>
          <p className="mt-4">{card.text}</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center p-2">
        <Heart strokeWidth={2.5} className="w-5 h-5 text-gray-200" />
        <MessageCircle strokeWidth={2.5} className="w-5 h-5 text-gray-200" />
        <Send strokeWidth={2.5} className="w-5 h-5 mt-[4px] text-gray-200" />
      </div>
    </div>
  );
};
