// Step 1: Grab elements from the page
const input = document.getElementById("foodInput");
const button = document.getElementById("orderBtn");
const status = document.getElementById("orderStatus");

// Step 2: Add button click listener
button.addEventListener("click", () => {
  const dish = input.value; // what user typed
  status.textContent = `Your ${dish} is getting ready! 🍽️`;
});
