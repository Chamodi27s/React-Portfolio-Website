import React, { useEffect, useState, useRef } from "react";
import "./About.css";

export default function About() {
  const paragraphs = [
    "Hi! I'm Chamodi Sandeepani, a Frontend Developer, AI Enthusiast, and QA Tester based in Sri Lanka.",
    "I build responsive, user-friendly web applications using React, JavaScript, Tailwind CSS, and MongoDB.",
    "I enjoy exploring AI, chatbots, and automation, and ensure high-quality web experiences.",
    "Quick learner, collaborative, and always eager to solve challenging problems creatively."
  ];

  const [displayedText, setDisplayedText] = useState(Array(paragraphs.length).fill(""));
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTyping(0); // start typing from first para
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Recursive typing function
  const startTyping = (index) => {
    if (index >= paragraphs.length) return;

    const para = paragraphs[index];
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[index] = para.slice(0, i + 1);
        return newText;
      });
      i++;

      if (i === para.length) {
        clearInterval(interval);
        // type next paragraph after a small delay
        setTimeout(() => startTyping(index + 1), 600);
      }
    }, 40); // typing speed
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-left">
          <iframe
            title="3D Animation"
            src="https://my.spline.design/genkubgreetingrobot-RyDRJtzvBgADrEHRnwoKXChJ/"
            frameBorder="0"
            width="100%"
            height="500px"
            allow="fullscreen"
          ></iframe>
        </div>

        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          {displayedText.map((text, idx) => (
            <p key={idx} className="about-text">
              {idx === 0 ? (
                <>
                  Hi! I'm <span className="highlight-name">Chamodi Sandeepani </span>
                  {text.slice(28)}
                </>
              ) : (
                text
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
