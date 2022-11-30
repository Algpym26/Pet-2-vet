const addDogHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const size = document.querySelector("#size").value.trim();
  const age = document.querySelector("#age").value.trim();
  const weight = document.querySelector("#weight").value.trim();

  const response = await fetch("/patients/add", {
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

// const updatePetHandler = (event) => {
//   event.preventDefault();
// };

// const deletePetHandler = (event) => {
//   event.preventDefault();
// };

document
  .querySelector("#submit-dog-button")
  .addEventListener("click", addPetHandler);

// document
//   .querySelector("#update-button")
//   .addEventListener("click", updatePetHandler);

// document
//   .querySelector("#delete-button")
//   .addEventListener("click", deletePetHandler);
