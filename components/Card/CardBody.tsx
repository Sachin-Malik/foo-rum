export type CardBodyProps = {
  emoji: string;
  text: string;
};

export const CardBody = ({ emoji, text }: CardBodyProps) => {
  return (
    <div className="flex flex-row gap-2 items-start cursor-default mt-2 py-2">
      <div className="flex flex-row min-w-[40px] justify-center">
        <div className="rounded-full p-1 bg-[lightgrey]/40 w-[28px] h-[28px] mt-1  flex flex-row items-center justify-center hover:bg-[lightgrey]/60 transition-all cursor-default">
          <p className="text-[20px] p-1">{emoji}</p>
        </div>
      </div>
      <p className="text-bodyregular">{text}</p>
    </div>
  );
};
