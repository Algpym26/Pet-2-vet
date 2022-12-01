// sign up variables used for account creation and welcome email initiation
// const name = document.querySelector("#name-signup").value.trim();
// const email = document.querySelector("#email-signup").value.trim();
// const password = document.querySelector("#password-signup").value.trim();

const signUpFormHandler = async (event) => {
  console.log("function firing");
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("fetch request firing in signup.js");
    const data = await response.json();
    if (response.ok) {
      console.log("response ok");
      console.log(data);
      // If successful, redirect the browser to the profile page
      window.open(data.url, "_blank");
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-button")
  .addEventListener("click", signUpFormHandler);

// sendEmail().catch(console.error);

// NOTE TO SELF: Ensure <script src="./js/signup.js"></script> at end of signup.handlebars file
