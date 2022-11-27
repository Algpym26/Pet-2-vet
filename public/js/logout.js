const logout = async () => {
  const response = await fetch("/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("logout reponse ok");
    document.location.replace("/login");
  } else {
    document.location.replace("/login");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
