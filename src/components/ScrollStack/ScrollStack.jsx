// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import useIsMobile from "../../hooks/useIsMobile";
// import "./scrollStack.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollStack({ children }) {
//   const isMobile = useIsMobile(768);
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     if (!isMobile || !containerRef.current) return;

//     const ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");
//       panels.forEach((panel) => {
//         ScrollTrigger.create({
//           trigger: panel,
//           start: "top top",
//           pin: true,
//           pinSpacing: false,
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [isMobile]);

//   return (
//     <div ref={containerRef} className="stack-container">
//       {React.Children.map(children, (child) => (
//         <section className="panel">{child}</section>
//       ))}
//     </div>
//   );
// }





import React, { useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import "./ScrollStack.css";

export default function ScrollStack({ children }) {
  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (!isMobile) return;

    const sections = document.querySelectorAll(".stack-section");

    const onScroll = () => {
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          sec.classList.remove("dimmed");

          for (let j = 0; j < i; j++) {
            sections[j].classList.add("dimmed");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // ⚡ Desktop → return normal children
  if (!isMobile) {
    return <>{children}</>;
  }

  // ⚡ Mobile → wrap with stack effect
  return (
    <div className="stack-wrapper">
      {React.Children.map(children, (child, i) => (
        <section className="stack-section" key={i}>
          {child}
        </section>
      ))}
    </div>
  );
}
