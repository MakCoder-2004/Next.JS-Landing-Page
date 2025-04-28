import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
    </div>
  );
}
