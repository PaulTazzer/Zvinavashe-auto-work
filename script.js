// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Mobile Menu Toggle
const toggle = document.createElement("div");
toggle.classList.add("menu-toggle");
toggle.innerHTML = "<span></span><span></span><span></span>";
document.querySelector("header").appendChild(toggle);

toggle.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});
