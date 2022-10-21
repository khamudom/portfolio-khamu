const sectionBlocks = document.querySelectorAll(".block");
const navLinks = document.querySelectorAll(".link");
const chk = document.getElementById("chk");

// hide and show navigation bar
var lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop =
    this.window.scrollY || this.document.documentElement.lastScrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-96px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// change active states between navigation itemw when scrolling
window.addEventListener("scroll", function () {
  var current = "";

  sectionBlocks.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY > sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

// change active state between navigation items on click
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.forEach((button) => button.classList.remove("active"));
    link.classList.add("active");
  })
);

// send user info and message using email js
function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    subject_id: document.getElementById("subject_id").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_1f6c35r", "template_0le7g7c", params)
    .then(function (res) {
      alert("Message sent successfully!");
    });
}

// adding dark class on body to toggle light and dark theme
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
