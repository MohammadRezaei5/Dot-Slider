document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".dots-wrapper ul li");
  const images = document.querySelectorAll(".images-wrapper img");
  let currentIndex = 0;
  let intervalId;

  const setActiveSlide = (index) => {
    dots.forEach((d) => d.classList.remove("active"));
    images.forEach((img) => img.classList.remove("active"));

    dots[index].classList.add("active");
    images[index].classList.add("active");

    currentIndex = index;
  };

  setActiveSlide(0);

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    setActiveSlide(currentIndex);
  };

  const startAutoPlay = () => {
    intervalId = setInterval(nextSlide,1000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalId);
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      stopAutoPlay();
      const index = parseInt(dot.dataset.index);
      setActiveSlide(index);
      startAutoPlay();
    });
  });

  startAutoPlay();
});
