"use client";

import Editor from "./../components/Editor/Editor";
import { cardData } from "./mock/cardData";
import { Card } from "@/components/Card/Card";
import { ToastContainer, toast, Slide } from "react-toastify";
import { AuthContextProvider } from "@/context/AuthContext";
import TopNavbar from "@/components/Header/TopNavbar";
import { useEffect } from "react";
import { db } from "./mock/db/dexie";
import { Post } from "@/components/Editor/Editor.types";
import { useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    db.getPosts().then((posts) => {
      const allPosts = [...posts, ...cardData];
      setPosts(allPosts);
    });
  }, [refresh]);

  const handlePostSubmit = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <AuthContextProvider>
      <TopNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-[24px] md:p-24 overflow-scroll align-center">
        <Editor onSubmit={handlePostSubmit} />
        <div className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <Card index={index} key={post.createdAt} card={post} />
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
          toastClassName="!bg-[white] !opacity-100 shadow-lg !text-[black] !rounded-lg font-inter !text-[14px] !py-2"
          theme="light"
          transition={Slide}
        />
      </main>
    </AuthContextProvider>
  );
}
