import { LogIn } from "lucide-react";
import { FC } from "react";

export type DialogHeaderProps = {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
};
const DialogHeader: FC<DialogHeaderProps> = ({ title, icon, subtitle }) => {
  return (
    <div className="flex flex-col gap-4 items-center mb-10">
      <div className="w-full flex justify-center">
        <div className="flex flex-row gap-2 p-2 rounded-full bg-gray-500 w-fit justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="font-bold text-[16px]">{title}</div>
        <div className="w-full flex justify-center">
          <div className="text-subtextReg1 font-semibold text-[black]/60 font-inter">
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DialogHeader;
