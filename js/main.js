(function () {
  const track = document.getElementById("projetosTrack");
  if (!track) return;

  const slides = track.querySelectorAll(".projeto-slide");
  const prevButton = document.querySelector(".carousel-btn.prev");
  const nextButton = document.querySelector(".carousel-btn.next");
  const carousel = document.querySelector(".projetos-carousel");

  let index = 0;
  const total = slides.length;
  let autoPlayId;

  function goTo(newIndex) {
    index = (newIndex + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function stopAutoPlay() {
    if (autoPlayId) {
      clearInterval(autoPlayId);
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayId = setInterval(function () {
      goTo(index + 1);
    }, 4500);
  }

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      goTo(index - 1);
      startAutoPlay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      goTo(index + 1);
      startAutoPlay();
    });
  }

  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEventListener("mouseleave", startAutoPlay);
  }

  goTo(0);
  startAutoPlay();
})();
