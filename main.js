document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
  
    // Insert dots into the DOM
    items.forEach((_, index) => {
      let dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });
  
    let dots = document.querySelectorAll(".dot");
  
    // Function to show a specific item
    function showItem(index) {
      items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
          item.classList.add("active");
          dots[idx].classList.add("active");
        }
      });
    }
  
    // Event listeners for buttons
    document.querySelector(".prev").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });
  
    // Event listeners for dots
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        let index = parseInt(dot.dataset.index);
        showItem(index);
      });
    });
  });
  

  
const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "block";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "block";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));



const gap1 = 25;

const carousel1 = document.getElementById("carousel1"),
  content1 = document.getElementById("content1"),
  next1 = document.getElementById("next1"),
  prev1 = document.getElementById("prev1");

next1.addEventListener("click", e => {
  carousel1.scrollBy(width + gap1, 0);
  if (carousel1.scrollWidth !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollWidth - width - gap1 <= carousel1.scrollLeft + width) {
    next1.style.display = "block";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(width + gap1), 0);
  if (carousel1.scrollLeft - width - gap1 <= 0) {
    prev1.style.display = "block";
  }
  if (!content1.scrollWidth - width - gap1 <= carousel1.scrollLeft + width) {
    next1.style.display = "flex";
  }
});

let width1 = carousel1.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
