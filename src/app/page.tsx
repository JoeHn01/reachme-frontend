import Hero from "@/components/Main/Hero/Hero";
import Metrics from "@/components/Main/Metrics/Metrics";
import Actions from "@/components/Main/Actions/Actions";
import Skills from "@/components/Main/Skills/Skills";
import Careers from "@/components/Main/Careers/Careers";
import Blog from "@/components/Main/Blog/Blog";
import FAQ from "@/components/Main/FAQ/FAQ";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Metrics />
      <Actions />
      <Skills />
      <Careers />
      <Blog />
      <FAQ />
    </div>
  );
}
