// Typing Loop
const roles = ["IT Support Engineer", "Network Specialist", "System Administrator"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Particles config
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { speed: 1 },
    line_linked: { enable: true }
  }
});
