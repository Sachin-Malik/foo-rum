import Editor from "./../components/Editor/Editor";
import { cardData } from "./mock/cardData";
import { Card } from "@/components/Card/Card";
import { ToastContainer, toast, Slide } from "react-toastify";
import { AuthContextProvider } from "@/context/AuthContext";
import TopNavbar from "@/components/Header/TopNavbar";
export default function Home() {
  return (
    <AuthContextProvider>
      <TopNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Editor />
        <div className="flex flex-col gap-4">
          {cardData.map((card) => (
            <Card key={card.authorName} card={card} />
          ))}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="!bg-[white]/90 shadow-lg !text-[black] !rounded-lg font-inter !text-[14px] !py-2"
          theme="light"
          transition={Slide}
        />
      </main>
    </AuthContextProvider>
  );
}
