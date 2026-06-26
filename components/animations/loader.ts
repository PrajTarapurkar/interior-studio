import gsap from "gsap";

import { startHeroAnimation } from "./hero";


export function startLoaderAnimation() {
  const tl = gsap.timeline();

  // Glow
  tl.fromTo(
    "#loader-glow",
    {
      opacity: 0,
      scale: 0.6,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    }
  )

    // Logo
    .fromTo(
      "#loader-logo",
      {
        opacity: 0,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.7"
    )

    // Title
    .fromTo(
      "#loader-title",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    )

    // Subtitle
    .fromTo(
      "#loader-subtitle",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    )

    // Gold Line
.fromTo(
  "#loader-line",
  {
    scaleX: 0,
  },
  {
    scaleX: 1,
    duration: 0.45,
    ease: "power2.out",
    transformOrigin: "center",
  }
)

    // Gold Sweep
.fromTo(
  "#loader-sweep",
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: "100%",
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
  },
  "-=0.5"
)

    // Tagline
    .fromTo(
      "#loader-tagline",
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    )

    // Loader moves upward
.to(
  "#loader",
  {
    y: -80,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  },
  "+=0.5"
)

// Navbar appears
.to(
  "#navbar",
  {
    opacity: 1,
    y: 0,
    duration: 0.45,
    ease: "power3.out",
  },
  "-=0.5"
)

// Hero zooms in
.fromTo(
  "#hero",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.4"
)

    // Start breathing glow AFTER intro
    .call(() => {
  gsap.to("#loader-glow", {
    scale: 1.08,
    opacity: 0.9,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
}