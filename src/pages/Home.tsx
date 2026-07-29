import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "wouter";

import IntroOverlay from "@/components/IntroOverlay";
import MaterialsCollage from "@/components/MaterialsCollage";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import SectionIndicator from "@/components/SectionIndicator";
import MarqueeTicker from "@/components/MarqueeTicker";
import TestimonialsSection from "@/components/TestimonialsSection";

import heroImage from "@assets/generated_images/hero-interior.jpg";
import philosophyImage from "@assets/generated_images/moscow-3.jpg";

import { PROJECTS } from "@/data/projects";
import { MATERIALS } from "@/data/materials";


const EASE: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1
];

const TRANSITION = {
  duration: 1.2,
  ease: EASE
};


// The last word cycles; "Пространство как" is fixed
const CYCLE_WORDS = [
  "тишина",
  "воздух",
  "свет",
  "дыхание"
];


function HeroCycleWord() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const id = setInterval(() => {
      setIndex(i => (i + 1) % CYCLE_WORDS.length);
    }, 2600);


    return () => clearInterval(id);

  }, []);


  return (
    <span className="relative inline-block">

      <AnimatePresence mode="wait">

        <motion.span
          key={index}
          className="inline-block font-serif italic"
          initial={{
            opacity: 0,
            y: 18
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -18
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {CYCLE_WORDS[index]}

        </motion.span>

      </AnimatePresence>

    </span>
  );
}



export default function Home() {

  const [introComplete, setIntroComplete] = useState(false);

  const [, setLocation] = useLocation();

  const heroRef = useRef(null);



  useEffect(() => {

    if (!introComplete) {

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

    }

  }, [introComplete]);



  useEffect(() => {

    if ("scrollRestoration" in history) {

      history.scrollRestoration = "manual";

    }

  }, []);



  return (

    <div className="
      bg-background 
      text-foreground 
      selection:bg-accent 
      selection:text-accent-foreground 
      w-full 
      overflow-hidden 
      cursor-none
    ">

      <CustomCursor />


      <IntroOverlay
        onComplete={() => setIntroComplete(true)}
      />


      <SectionIndicator />
