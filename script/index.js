const navLinks = document.querySelectorAll(".link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    // remove the active class first
    navLinks.forEach((button) => button.classList.remove("active"));
    // add the active class to the button you clicked
    link.classList.add("active");
  })
);

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
