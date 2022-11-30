const addDogHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const size = document.querySelector("#size").value.trim();
  const age = document.querySelector("#age").value.trim();
  const weight = document.querySelector("#weight").value.trim();

  const response = await fetch("/patients/add-dog", {
    method: "POST",
    body: JSON.stringify({ name, size, age, weight }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/patients");
  } else {
    alert(response.statusText);
  }
};

// const addCatHandler = async (event) => {
//   console.log("cat button working")
//   event.preventDefault();

//   const name = document.querySelector("#name").value.trim();
//   const declawed = document.querySelector("#declawed").value.trim();
//   const age = document.querySelector("#age").value.trim();
//   const weight = document.querySelector("#weight").value.trim();

//   const response = await fetch("/patients/add-cat", {
//     method: "POST",
//     body: JSON.stringify({ name, declawed, age, weight }),
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     document.location.replace("/patients");
//   } else {
//     alert(response.statusText);
//   }
// };

// const updatePetHandler = (event) => {
//   event.preventDefault();
// };

// const deletePetHandler = (event) => {
//   event.preventDefault();
// };

document
  .querySelector("#submit-dog-button")
  .addEventListener("click", addDogHandler);

// document
//   .querySelector("#submit-cat-button")
//   .addEventListener("click", addCatHandler);

// document
//   .querySelector("#update-button")
//   .addEventListener("click", updatePetHandler);

// document
//   .querySelector("#delete-button")
//   .addEventListener("click", deletePetHandler);
