"use client";
import { useState } from "react";
import { Smile } from "lucide-react";
import { EditorFooter } from "./EditorFooter";
import { EditorHeader } from "./EditorHeader";
import { toast } from "react-toastify";
import _size from "lodash/size";
import { SignupDialog } from "../Dialogs/AuthDialog";

export const Editor = () => {
  const [text, setText] = useState("");

  const isSendDisabled = _size(text) === 0;

  const handleSubmitPost = () => {
    toast.error("Functionality not implemented");
  };

  const handleTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="rounded-xl bg-gray-100 w-[600px] max-w-[100%] p-2">
      <div className="bg-[white] rounded-xl shadow-md">
        <EditorHeader />
        <div className="flex flex-row gap-2 p-4">
          <Smile className="w-5 h-5 text-gray-200" />
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-[100px] border-none outline-none resize-none font-sans placeholder:text-[gray] font-inter placeholder:text-[14px]"
            value={text}
            onChange={handleTextUpdate}
          ></textarea>
        </div>
        <EditorFooter onClick={handleSubmitPost} disabled={isSendDisabled} />
      </div>
      <SignupDialog />
    </div>
  );
};

export default Editor;
