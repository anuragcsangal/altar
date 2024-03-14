import Link from "next/link";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] md:flex md:flex-row text-neutral-700 font-thin">
      <Hero />
      <Projects />
    </main>
  );
}
