import { useRouter, useSearchParams } from "next/navigation";

export const useAuthDialog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const openAuthDialog = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("dialog", "login");
    router.push(`?${newSearchParams.toString()}`);
  };
  return { openAuthDialog };
};
