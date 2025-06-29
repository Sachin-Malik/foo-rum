import { ICard } from "@/components/Card/Card.types";

export const emojis = [
  "🥳",
  "😭",
  "😒",
  "☺️",
  "✍️",
  "🔥",
  "💯",
  "😎",
  "🙌",
  "🎉",
  "🤔",
  "😴",
  "👍",
  "👀",
  "🚀",
  "💡",
  "🧠",
  "🥺",
  "😡",
  "😅",
  "🤯",
  "❤️",
  "🎯",
];

export const cardData: ICard[] = [
  {
    authorName: "Alice Johnson",
    profilePicUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    createdAt: "2025-06-26T14:23:00Z",
    text: "Just finished reading an amazing book on system design patterns. It dives deep into scalability, fault tolerance, and real-world architecture trade-offs. Highly recommend it for any engineer aiming to level up!",
    emoji: "🥳",
  },
  {
    authorName: "Rahul Verma",
    profilePicUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    createdAt: "2025-06-25T10:15:00Z",
    text: "Loving the new UI improvements in our dashboard. It's cleaner, much more intuitive, and significantly boosts our workflow speed. The design and frontend teams did an incredible job!",
    emoji: "😭",
  },
  {
    authorName: "Sophie Lin",
    profilePicUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    createdAt: "2025-06-24T08:45:00Z",
    text: "Exploring React Server Components lately—exciting stuff! The ability to offload rendering logic to the server and still maintain interactivity is a total game-changer for modern web apps.",
    emoji: "😒",
  },
  {
    authorName: "David Kim",
    profilePicUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    createdAt: "2025-06-23T18:05:00Z",
    text: "If you're debugging async code today, don't forget to hydrate! Dealing with promises, race conditions, and nested effects can be rough—stay focused and take breaks when needed. ☕",
    emoji: "☺️",
  },
];
