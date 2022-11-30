const addCatHandler = async (event) => {
  console.log("cat button working");
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  // const declawed = document.querySelector("#declawed").value.trim();
  const age = document.querySelector("#age").value.trim();
  const weight = document.querySelector("#weight").value.trim();

  console.log(document.querySelector("#declawed").value.trim());

  if (document.querySelector("#declawed").value.trim() === "True") {
    var declawed = true;
  } else {
    var declawed = false;
  }

  console.log(declawed);

  const response = await fetch("/patients/add-cat", {
    method: "POST",
    body: JSON.stringify({ name, declawed, age, weight }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/patients");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#submit-cat-button")
  .addEventListener("click", addCatHandler);
