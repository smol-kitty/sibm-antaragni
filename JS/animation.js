const carouselItems = document.querySelectorAll(".carousel-item");

carouselItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.animationPlayState = "paused";
  });

  item.addEventListener("mouseleave", () => {
    item.style.animationPlayState = "running";
  });
});
