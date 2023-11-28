const hamburger = document.querySelector("[hamburger]");
const navbar = document.querySelector(".navlist");

const navlinks = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("showMenu");
  hamburger.classList.toggle("cross");
  links();

  if (hamburger.classList.contains("cross")) {
    hamburgerAnimation();
  } else {
    const timeline = gsap.timeline();
    timeline.to(".line-1", { x: 10, duration: 0.3, y: -22, rotation: 45 });
    timeline.to(".line-2", { x: -10, duration: 0.3, y: -29, rotation: -45 });
    timeline.to(".line-1", { x: 0, duration: 0.3, y: -0, rotation: 0 });
    timeline.to(".line-2", { x: 0, duration: 0.3, y: -0, rotation: 0 });
    timeline.to(".line-1", {
      x: 33,
      duration: 0.3,
      rotation: 0,
      ease: "back(3)",
    });
    timeline.to(".line-2", {
      x: -33,
      duration: 0.3,
      rotation: 0,
      ease: "back(3)",
    });
  }
});

function hamburgerAnimation() {
  const timeline = gsap.timeline();
  timeline.to(".line-1", { xPercent: -130, duration: 0.1 });
  timeline.to(".line-2", { xPercent: 130, duration: 0.1 });
  timeline.to(".line-1", { x: 12, duration: 0.3, y: -24, rotation: 45 });
  timeline.to(".line-2", { x: -12, duration: 0.3, y: -29, rotation: -45 }, "<");
  timeline.to(".line-1", {
    x: 30,
    y: 1,
    duration: 0.3,
    delay: 0.3,
    ease: "back(3)",
  });
  timeline.to(".line-2", { x: -35, y: -7, duration: 0.3, ease: "back(3)" });
}
function links() {
  gsap.fromTo(
    "li",
    { opacity: 0, x: 30 },
    {
      opacity: 1,
      stagger: {
        amount: 0.6,
      },
      x: 0,
      duration: 0.5,
    }
  );
}

// gsap.from(".bat-container img", { opacity: 0, repeat: -1 });

navlinks.forEach((links) => {
  links.addEventListener("click", () => {
    navbar.classList.remove("showMenu");
    hamburger.classList.remove("cross");

    if (!hamburger.classList.contains("cross")) {
      const timeline = gsap.timeline();
      timeline.to(".line-1", { x: 10, duration: 0.3, y: -22, rotation: 45 });
      timeline.to(".line-2", { x: -10, duration: 0.3, y: -29, rotation: -45 });
      timeline.to(".line-1", { x: 0, duration: 0.3, y: -0, rotation: 0 });
      timeline.to(".line-2", { x: 0, duration: 0.3, y: -0, rotation: 0 });
      timeline.to(".line-1", {
        x: 33,
        duration: 0.3,
        rotation: 0,
        ease: "back(3)",
      });
      timeline.to(".line-2", {
        x: -33,
        duration: 0.3,
        rotation: 0,
        ease: "back(3)",
      });
    }
  });
});

let send = document.querySelector(".send-btn");

send.addEventListener("click", () => {
  setTimeout(() => {
    alert("sorry it is just for demo purpose");
  }, 1000);
});

// ! Animation on load
const scrolltimeLine = gsap.timeline();

scrolltimeLine.from(".bat-container img", {
  opacity: 0,
  y: -100,
  ease: "elastic",
  scale: 1.3,
  duration: 3,
});
scrolltimeLine.from(
  ".title",
  {
    opacity: 0,
    y: 60,
    ease: "back",
    duration: 0.3,
  },
  "<"
);

// color on scroll

const sections = document.querySelectorAll(".container");
let currentSection = "home";
window.addEventListener("scroll", () => {
  sections.forEach((sectionEl) => {
    let offset = sectionEl.offsetTop;

    if (window.scrollY >= offset) {
      currentSection = sectionEl.id;
    }

    navlinks.forEach((links) => {
      if (links.href.includes(currentSection)) {
        document.querySelector(".active").classList.remove("active");
        links.classList.add("active");
      }
    });
  });
});

// ! animation on scroll

gsap.from(".box", {
  y: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".box",
    start: "center center",
   
  },
});
