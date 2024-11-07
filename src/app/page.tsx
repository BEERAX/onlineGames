"use client";

import Header from "../components/Header";
import Banner from "@/components/base/banner/Banner";
import CategoryList from "@/components/category-list/CategoryList";
import GameList from "@/components/games/GameList";
import { ContextProvider } from "@/context/ContextProvider";
import Footer from "@/components/Footer";
import classNames from "@/utils/classNames";

export default function Page() {
  const images = ["/images/banner1.jpg", "/images/banner2.jpg"];
  return (
    <ContextProvider>
      <div
        className={classNames(
          "flex flex-col items-center justify-items-center",
          "min-h-screen font-[family-name:var(--font-geist-sans)]"
        )}
      >
        <div className="flex-1 flex flex-col w-full">
          <Header />
          <Banner images={images} autoSlideInterval={4000} />
          <CategoryList />
          <GameList />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
}
33;
