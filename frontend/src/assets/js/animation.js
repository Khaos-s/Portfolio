// animations/homepageAnimations.js
import { gsap } from "gsap";

export const topToBottom = (ref) => {
  gsap.from(ref.current, {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
};

export const leftToRight = (ref) => {
  gsap.from(ref.current, {
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
  });
};


export const top = (ref) => {
  gsap.from(ref.current, {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.in",
  });
};