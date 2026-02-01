const buttons = document.querySelectorAll("[data-carousel-btn]");
const dots = document.querySelectorAll("[data-carousel-dot]"); // Get dots elements
let autoSlideInterval;

function slide(button) {
  return () => {
    clearInterval(autoSlideInterval); // Stop auto-slide when a button is clicked

    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slidesContainer = button
      .closest("[data-carousel]")
      .querySelector("[data-carousel-slides]");
    const slides = slidesContainer.querySelectorAll("[data-carousel-slide]");
    const activeSlide = slidesContainer.querySelector("[data-active]");
    let nextSlideIndex = [...slides].indexOf(activeSlide) + offset;

    // Handle edge cases for looping
    if (nextSlideIndex < 0) {
      nextSlideIndex = slides.length - 1;
    } else if (nextSlideIndex >= slides.length) {
      nextSlideIndex = 0;
    }

    // Update active slide and dot
    slides[nextSlideIndex].dataset.active = true;
    activeSlide.removeAttribute("data-active");

    // Update active dot
    dots.forEach((dot, index) => {
      if (index === nextSlideIndex) {
        dot.dataset.active = true;
      } else {
        dot.removeAttribute("data-active");
      }
    });
  };
}

window.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => button.addEventListener("click", slide(button)));

  // Auto-slide (optional)
  autoSlideInterval = setInterval(() => {
    slide(buttons[1])(); // Assuming buttons[1] is the "next" button
  }, 3500);
});