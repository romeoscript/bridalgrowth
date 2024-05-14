import Hero from "@/Components/Hero";
import Partners from "@/Components/Partners";
import Result from "@/Components/Result";
import Service from "@/Components/Service";
import Image from "next/image";


export default function Home() {
  return (
    <main >
      <Hero />
      <Partners />
      <Service />
      <Result />
    </main>
  );
}
