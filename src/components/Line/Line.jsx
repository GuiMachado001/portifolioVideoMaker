import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LinhaZigZagCurva() {
  const pathRef = useRef(null);

  useEffect(() => {
    const comprimento = pathRef.current.getTotalLength();

    pathRef.current.style.strokeDasharray = comprimento;
    pathRef.current.style.strokeDashoffset = comprimento;

    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 4,  // animação mais lenta
      ease: 'power2.out',
      scrollTrigger: {
        trigger: pathRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  }, []);

  return (
    <svg
      width="100%"
      height="40"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      style={{ display: 'block', margin: '30px 0' }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="#F5D042"
        strokeWidth="4"
        strokeLinecap="round"
        d="
          M 0 20
          C 5 0, 15 0, 20 20
          C 25 40, 35 40, 40 20
          C 45 0, 55 0, 60 20
          C 65 40, 75 40, 80 20
          C 85 0, 95 0, 100 20
        "
      />
    </svg>
  );
}
