const navMenu = document.querySelector(".nav__links");
const navOpen = document.querySelector(".nav__menu");
const navClose = document.querySelector(".nav__close");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav-active");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav-active");
});

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-active");
  });
});

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__links a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__links a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
const scrollUp = () => {
  const scrollUpBtn = document.querySelector(".scroll-up");
  if (window.scrollY >= 200) {
    scrollUpBtn.classList.add("show-scroll");
  } else {
    scrollUpBtn.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);
const portfolioGrid = document.querySelector(".portfolio__grid");

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project");
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="btn__group">
          <a href="${project.demoUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Demo</a>
          <a href="${project.codeUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      `;
      portfolioGrid.appendChild(projectCard);
    });
  });

