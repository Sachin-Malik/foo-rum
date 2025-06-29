"use client";
import { FC, useState } from "react";
import { Smile } from "lucide-react";
import { EditorFooter } from "./EditorFooter";
import { EditorHeader } from "./EditorHeader";
import { toast } from "react-toastify";
import _size from "lodash/size";
import { SignupDialog } from "../Dialogs/AuthDialog";
import { Post } from "./Editor.types";
import { postDefaultState } from "./Editor.constants";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import Show from "../Show/Show";
import { db } from "@/app/mock/db/dexie";
import { makePost, updateEmoji } from "./helper";
import { useRouter, useSearchParams } from "next/navigation";

export type EditorProps = {
  onSubmit: () => void;
};

export const Editor: FC<EditorProps> = ({ onSubmit }) => {
  const { user } = useContext(AuthContext);
  const [editorState, setEditorState] = useState<Post>(postDefaultState);
  const router = useRouter();
  const searchParams = useSearchParams();

  const openAuthDialog = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };

  const isSendDisabled = _size(editorState.text) === 0;

  const handleSubmitPost = async () => {
    if (!user) {
      openAuthDialog();
      return;
    }
    const post = makePost(user, editorState.emoji, editorState.text);
    await db.addPost(post);
    toast.success("Post created successfully");
    setEditorState(postDefaultState);
    onSubmit();
  };

  const handleTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    let emoji = editorState?.emoji;
    emoji = updateEmoji(value, emoji);
    setEditorState({ ...editorState, text: value, emoji });
  };
  return (
    <div className="rounded-xl bg-gray-100 w-[400px] md:w-[600px] max-w-[100%] p-2 mb-6 mt-6">
      <div className="bg-[white] rounded-xl shadow-md">
        <EditorHeader />
        <div className="flex flex-row gap-2 p-4">
          <Show
            when={editorState?.emoji !== ""}
            fallback={<Smile className="w-5 h-5 text-gray-200" />}
          >
            <p className="w-5 h-5 text-gray-200">{editorState?.emoji}</p>
          </Show>
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-[100px] border-none outline-none resize-none font-sans placeholder:text-[gray] font-inter placeholder:text-[14px]"
            value={editorState.text}
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
