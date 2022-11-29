const addPetHandler = (event) => {
  event.preventDefault();
};

const updatePetHandler = (event) => {
  event.preventDefault();
};

const deletePetHandler = (event) => {
  event.preventDefault();
};

document
  .querySelector("#signup-button")
  .addEventListener("click", addPetHandler);

document
  .querySelector("#signup-button")
  .addEventListener("click", updatePetHandler);

document
  .querySelector("#signup-button")
  .addEventListener("click", deletePetHandler);
