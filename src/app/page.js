import Image from "next/image";
import Section1 from "./components/section1";
import Services from "./services/page";
import About from "./components/about";
import Galrery from "./components/galery";

export default function Home() {
  return (
    <>
      <Section1 />
      <Services />
      <About />
      <Galrery />
    </>
  );
}
