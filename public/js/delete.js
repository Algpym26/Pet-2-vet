const dogDelButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/patients/add-dog/${id}`, {
      method: "DELETE",
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/patients");
    } else {
      alert("Failed to delete Dog");
    }
  }
};

const catDelButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/patients/add-cat/${id}`, {
      method: "DELETE",
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/patients");
    } else {
      alert("Failed to delete Cat");
    }
  }
};

document
  .querySelector(".dog-list")
  .addEventListener("click", dogDelButtonHandler);

document
  .querySelector(".cat-list")
  .addEventListener("click", catDelButtonHandler);
