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

// change active states between navigation item when scrolling
const sectionBlocks = document.querySelectorAll(".block");
const navLinks = document.querySelectorAll(".link");

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

// toggle light and dark theme and add to local storage
const themeSwitch = document.getElementById("theme-switch");

themeSwitch.checked = false;
function clickThemeHandler() {
  if (this.checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
themeSwitch.addEventListener("click", clickThemeHandler);

window.onload = checkTheme();

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");
  if (localStorageTheme !== null && localStorageTheme === "dark") {
    document.body.className = localStorageTheme;

    const themeSwitch = document.getElementById("theme-switch");
    themeSwitch.checked = true;
  }
}
