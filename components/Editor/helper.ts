import { emojis } from "@/app/mock/cardData";

export const pickRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

export const pickRandomProfilePic = () => {
  const randomIndex = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/men/${randomIndex}.jpg`;
};

export const updateEmoji = (text: string, emoji: string) => {
  if (text === "") {
    return "";
  }
  if (emoji === "") {
    return pickRandomEmoji();
  }
  return emoji;
};

export const makePost = (authorName: string, emoji: string, text: string) => {
  const post = {
    authorName,
    profilePicUrl: pickRandomProfilePic(),
    createdAt: new Date().toISOString(),
    text,
    emoji,
  };
  return post;
};
