const navLinks = document.querySelectorAll(".link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    // remove the active class first
    navLinks.forEach((button) => button.classList.remove("active"));
    // add the active class to the button you clicked
    link.classList.add("active");
  })
);
