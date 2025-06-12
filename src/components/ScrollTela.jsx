import { useRef, useEffect, useState } from "react";

function ScrollTela({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
   
          observer.unobserve(entry.target);
        }
      });
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'visible' : ''}`} ref={domRef}>
      {children}
    </div>
  );
}

export default ScrollTela;