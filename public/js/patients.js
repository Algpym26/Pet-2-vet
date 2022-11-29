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
  .querySelector("#add-button")
  .addEventListener("click", addPetHandler);

document
  .querySelector("#update-button")
  .addEventListener("click", updatePetHandler);

document
  .querySelector("#delete-button")
  .addEventListener("click", deletePetHandler);
