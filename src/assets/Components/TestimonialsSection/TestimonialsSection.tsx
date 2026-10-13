import { useEffect, useState } from "react";
import type { TestimonialsSectionProps } from "../../interfaces";
import ArrowButton from "../ArrowButton/ArrowButton";
import SectionHeader from "../SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard";
import styles from "./TestimonialsSection.module.css";
const MOBILE_BREAKPOINT = 992;
const DESKTOP_VISIBLE = 3;
const TestimonialsSection = ({header,testimonials}: TestimonialsSectionProps) => {
  const [currentCard,setCurrentCard] =useState(0);
  const [isMobile,setIsMobile] =useState(false);

  useEffect(() => {
    const checkIfMobile=()=>setIsMobile(window.innerWidth<=MOBILE_BREAKPOINT);
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return()=>window.removeEventListener("resize",checkIfMobile);
  }, []);

  const total = testimonials.length;
  const visibleCount=Math.min(isMobile?1: DESKTOP_VISIBLE, total);
  const visibleTestimonials = Array.from(
    { length: visibleCount },
    (_,i)=>testimonials[(currentCard+i)%total],
  );

  const nextCard = () => setCurrentCard((currentCard+1) % total);
  const prevCard = () => setCurrentCard((currentCard - 1+total)%total);

  const hasArrows = total>1;

  return (
    <section className={styles.section}>
      <SectionHeader {...header} />

      <div className={styles.slider}>
        {hasArrows&&(
          <div className={styles.prev}>
            <ArrowButton direction="prev" onClick={prevCard} />
          </div>
        )}

        <div className={styles.cards}>
          {visibleTestimonials.map(({ id, ...card }) => (
            <TestimonialCard key={id} {...card} />
          ))}
        </div>

        {hasArrows && (
          <div className={styles.next}>
            <ArrowButton direction="next" onClick={nextCard} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;