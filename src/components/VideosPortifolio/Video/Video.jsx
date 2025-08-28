// VideoPlayer.jsx
import './Video.css';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Video({ src, thumb, title }) {
  const videoRef = useRef(null);
  const thumbRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Abrir modal
  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  // Fechar modal
  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsOpen(false);
  };

  // Fecha modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // GSAP: anima thumbnail ao scroll
  useEffect(() => {
    if (thumbRef.current) {
      gsap.fromTo(
        thumbRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: thumbRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
  }, []);

  // GSAP: anima modal ao abrir
  useEffect(() => {
    if (isOpen && videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <div className="containerVideo">
      {/* Thumbnail + botão play */}
      <div className="thumbnailWrapper" ref={thumbRef} onClick={handleOpen}>
        <img src={thumb} alt={title || "Thumbnail"} className="thumbnail" />
        <div className="playButton"></div>
      </div>

      {/* Modal do vídeo */}
      {isOpen && (
        <div className="videoModal" onClick={handleClose}>
          <div className="videoContent" ref={videoContainerRef} onClick={(e) => e.stopPropagation()}>
            <span className="closeBtn" onClick={handleClose}>&times;</span>
            <video
              ref={videoRef}
              src={src}
              controls
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
