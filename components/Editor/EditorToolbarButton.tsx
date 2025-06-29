import { FC } from "react";
import { EditorButtonType } from "./Editor.types";

export type EditorToolbarButtonProps = {
  formatter: {
    type: EditorButtonType;
    icon: React.ReactNode;
  };
  onClick: (type: EditorButtonType) => void;
  isSelected: boolean;
};

const EditorToolbarButton: FC<EditorToolbarButtonProps> = ({
  formatter,
  onClick,
  isSelected,
}) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(formatter.type);
  };
  return (
    <button
      key={formatter.type}
      className={`p-1 rounded-md transition-all
        ${
          !isSelected
            ? " bg-gray-100/20 hover:bg-[lightgrey]/60"
            : "bg-[white] shadow-md"
        }
        `}
      onClick={handleButtonClick}
    >
      {formatter.icon}
    </button>
  );
};

export default EditorToolbarButton;
