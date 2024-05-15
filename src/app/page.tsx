"use client"

import {
  RecoilRoot,
} from 'recoil';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <RecoilRoot>
      <main className="bg-neutral-950">
        <NavBar></NavBar>
        <HeroSection></HeroSection>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
      </main>
    </RecoilRoot>
  );
}
