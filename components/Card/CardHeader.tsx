import { timeAgo } from "@/utils/common/time.utils";

export type CardHeaderProps = {
  authorName: string;
  createdAt: string;
  profilePicUrl: string;
};

export const CardHeader = ({
  authorName,
  createdAt,
  profilePicUrl,
}: CardHeaderProps) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="w-10 h-10 rounded-xl relative">
        <div className="absolute top-0 left-0 w-10 h-10 rounded-xl bg-[lightgrey]">
          <img className="rounded-md" src={profilePicUrl} alt="" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-[600] text-[black] text-bodybold ">{authorName}</p>
        <p className="text-xs text-[black]/60 text-subtextReg2">
          {timeAgo(new Date(createdAt))}
        </p>
      </div>
    </div>
  );
};
