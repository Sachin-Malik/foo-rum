import { PlusIcon, Mic, Send, Video } from "lucide-react";
import { FC } from "react";

export type EditorFooterProps = {
  onClick: () => void;
  disabled: boolean;
};

export const EditorFooter: FC<EditorFooterProps> = ({ onClick, disabled }) => {
  return (
    <div className="flex flex-row justify-between border-t-[1px] border-[lightgrey]/60 py-2 px-4">
      <div className="flex flex-row gap-4 items-center">
        <button
          className="flex flex-row gap-2 items-center p-1 rounded-md bg-[lightgrey]/40 hover:scale-110 transition-all hover:bg-[lightgrey]/60"
          onClick={onClick}
        >
          <PlusIcon className="h-5 w-5" />
        </button>
        <Mic className="h-5 w-5" />
        <Video className="h-5 w-5" />
      </div>
      <button
        className={`pr-2 transition-all disabled:opacity-50 ${
          !disabled ? " hover:scale-110 " : ""
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        <Send
          fill={`${disabled ? "grey" : "#7879F1"}`}
          className={`${
            disabled ? "text-gray-200" : "text-primary-70"
          } rotate-45 w-5 h-5`}
        />
      </button>
    </div>
  );
};
