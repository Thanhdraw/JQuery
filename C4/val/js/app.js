let username = document.querySelector("#username");
let password = document.querySelector("#password");
let form = document.querySelector("#login");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  if (username.value === "" || password.value === "") {
    alert("Please fill in both fields.");
  } else {
    // Proceed with form submission
    console.log(
      "Form submitted with username:",
      username.value,
      "and password:",
      password.value
    );
  }
});
