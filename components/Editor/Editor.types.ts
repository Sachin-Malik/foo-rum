export enum EditorButtonType {
  BOLD = "bold",
  ITALIC = "italic",
  UNDERLINE = "underline",
  ORDERED_LIST = "orderedList",
  UNORDERED_LIST = "unorderedList",
  QUOTE = "quote",
  CODE = "code",
}

export type Post = {
  text: string;
  emoji: string;
  authorName: string;
  createdAt: string;
  profilePicUrl: string;
};
