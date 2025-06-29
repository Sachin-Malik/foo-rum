import { Trash2, ChevronDown } from "lucide-react";
import {
  TextFormatter,
  ListFormatter,
  MiscFormatter,
} from "./Editor.constants";
import EditorToolbarButton from "./EditorToolbarButton";
import Separator from "./Seprator";
import { useState } from "react";
import { EditorButtonType } from "./Editor.types";
import { toast } from "react-toastify";
import { useWindowDimension } from "@/hooks/useWindowDimension";
import Show from "../Show/Show";

export const EditorHeader = () => {
  const [selectedButton, setSelectedButton] = useState<EditorButtonType>(
    EditorButtonType.UNDERLINE,
  );

  const handleToolBarButton = (type: EditorButtonType) => {
    setSelectedButton(type);
  };

  const handleDiscardPost = () => {
    toast.error("Functionality not implemented");
  };

  return (
    <div className="p-2 flex flex-row gap-2 items-center justify-between w-full">
      <div className="flex flex-row gap-3 items-center bg-gray-100  h-[40px] rounded-lg px-2 ">
        <button className="flex flex-row gap-2 items-center p-1 bg-[white] rounded-lg px-2 shadow-md">
          <div className="text-bodyregular">Paragraph</div>
          <ChevronDown className="w-4 h-4" />
        </button>
        <Show when={useWindowDimension().width > 600}>
          <div className="flex flex-row gap-2 items-center h-full">
            {TextFormatter.map((formatter) => (
              <EditorToolbarButton
                key={formatter.type}
                formatter={formatter}
                onClick={handleToolBarButton}
                isSelected={formatter.type === selectedButton}
              />
            ))}
          </div>
          <Separator />
          <div className="flex flex-row gap-2 items-center">
            {ListFormatter.map((formatter) => (
              <EditorToolbarButton
                key={formatter.type}
                formatter={formatter}
                onClick={handleToolBarButton}
                isSelected={formatter.type === selectedButton}
              />
            ))}
          </div>
          <Separator />
          <div className="flex flex-row gap-2 items-center">
            {MiscFormatter.map((formatter) => (
              <EditorToolbarButton
                key={formatter.type}
                formatter={formatter}
                onClick={handleToolBarButton}
                isSelected={formatter.type === selectedButton}
              />
            ))}
          </div>
        </Show>
      </div>
      <button
        className="p-2 rounded-lg transition-colors bg-red-80/20 hover:bg-red-80/40"
        onClick={handleDiscardPost}
      >
        <Trash2 className="w-4 h-4 text-red-80" />
      </button>
    </div>
  );
};
