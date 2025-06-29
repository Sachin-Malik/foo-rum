import { FC } from "react";
import { ICard } from "./Card.types";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";
export type CardProps = {
  card: ICard;
  index: number;
};

export const Card: FC<CardProps> = ({ card, index }) => {
  return (
    <div
      className={`p-2 rounded-xl bg-gray-100 w-[600px] max-w-[100%] animate-fade-in-up delay-[${
        index * 100
      }ms]`}
    >
      <div className={`bg-[white] p-4 rounded-xl shadow-md ]`}>
        <CardHeader
          authorName={card.authorName}
          createdAt={card.createdAt}
          profilePicUrl={card.profilePicUrl}
        />
        <CardBody emoji={card.emoji} text={card.text} />
      </div>
      <CardFooter />
    </div>
  );
};
