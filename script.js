console.log("Welcome to The Green Brew!");

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Welcome to The Green Brew Cafe! ☕🌿");
  });
});
