import Image from "next/image";
import {FloatingNavDemo} from "../components/main";
import {BackgroundBoxesDemo} from "../components/body";
import {HoverEffect} from "../components/ui/card-hover-effect";
import {LampDemo} from "../components/ai";
import {InfiniteMovingCardsDemo} from "../components/review";
import { AppleCardsCarouselDemo} from "../components/text";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="">
      <FloatingNavDemo/>
      <BackgroundBoxesDemo/>
      <HoverEffect items={[
        { title: "Title 1", description: "Description 1", link: "https://example.com/1" },
        { title: "Title 2", description: "Description 2", link: "https://example.com/2" },
        { title: "Title 3", description: "Description 3", link: "https://example.com/3" },
        { title: "Title 1", description: "Description 1", link: "https://example.com/1" },
        { title: "Title 2", description: "Description 2", link: "https://example.com/2" },
        { title: "Title 3", description: "Description 3", link: "https://example.com/3" }
      ]}/>
      <LampDemo/>
      < AppleCardsCarouselDemo/>
      <Footer/>
    </main>
  );
}
