import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Work } from "../components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { useState } from "react";
export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  return (
    <div className="flex items-center flex-col overflow-x-hidden relative">
      <Header isOpenMenu={isOpenMenu} handleMenu={handleMenu} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}
