const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (sectionTop < trigger) {
      section.classList.add("active");
    }
  });
});
