import { format } from "date-fns";

export function timeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // if more than a day ago just return the date
  if (days > 1) return format(date, "dd MMMM, yyyy");
  if (hours > 0) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  if (minutes > 0) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  if (seconds == 0) return "just now";
  return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
}
