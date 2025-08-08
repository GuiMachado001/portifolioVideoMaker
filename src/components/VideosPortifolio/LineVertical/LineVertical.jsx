// src/components/LinhaVertical.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LinhaVertical() {
  const lineRef = useRef(null);

  useEffect(() => {
    const length = lineRef.current.getTotalLength();

    lineRef.current.style.strokeDasharray = length;
    lineRef.current.style.strokeDashoffset = length;

    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <svg
      width="4"
      height="200"
      viewBox="0 0 4 200"
      style={{ display: "block", margin: "20px auto" }}
    >
      <line
        ref={lineRef}
        x1="2"
        y1="0"
        x2="2"
        y2="200"
        stroke="#F5D042"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
