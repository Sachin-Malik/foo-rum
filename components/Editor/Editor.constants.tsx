import { EditorButtonType, Post } from "./Editor.types";
import {
  Bold,
  Italic,
  Underline,
  ListOrdered,
  List,
  Quote,
  Code,
} from "lucide-react";

export const TextFormatter = [
  { type: EditorButtonType.BOLD, icon: <Bold className="w-4 h-4" /> },
  { type: EditorButtonType.ITALIC, icon: <Italic className="w-4 h-4" /> },
  { type: EditorButtonType.UNDERLINE, icon: <Underline className="w-4 h-4" /> },
];

export const ListFormatter = [
  {
    type: EditorButtonType.ORDERED_LIST,
    icon: <ListOrdered className="w-4 h-4" />,
  },
  { type: EditorButtonType.UNORDERED_LIST, icon: <List className="w-4 h-4" /> },
];

export const MiscFormatter = [
  { type: EditorButtonType.QUOTE, icon: <Quote className="w-4 h-4" /> },
  { type: EditorButtonType.CODE, icon: <Code className="w-4 h-4" /> },
];

export const postDefaultState: Post = {
  authorName: "",
  createdAt: "",
  profilePicUrl: "",
  text: "",
  emoji: "",
};
