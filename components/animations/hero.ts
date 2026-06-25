import gsap from "gsap";

export function startHeroAnimation() {
  const tl = gsap.timeline();

  // Hero background
  tl.fromTo(
    "#hero",
    {
      scale: 1.08,
      filter: "blur(8px)",
    },
    {
      scale: 1,
      filter: "blur(0px)",
      duration: 1.8,
      ease: "power3.out",
    }
  )

  // Content
  .fromTo(
    "#hero-content",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
    },
    "-=1.5"
  )

  // Label
  .fromTo(
    "#hero-label",
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    }
  )

  // Title
  .fromTo(
    "#hero-title",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
    },
    "-=0.3"
  )

  // Description
  .fromTo(
    "#hero-description",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.5"
  )

  // Buttons
  .fromTo(
    "#hero-buttons",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4"
  );

  return tl;
}