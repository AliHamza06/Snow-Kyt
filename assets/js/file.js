// Select all select_box elements
const selectBoxes = document.querySelectorAll(".select_box");

// Add event listeners to each select box
selectBoxes.forEach((selectBox) => {
  const selected_option = selectBox.querySelector(".selected_option");
  const option_container = selectBox.querySelector(".option_container");
  const options = selectBox.querySelectorAll(".option_li");

  selected_option.addEventListener("click", () => {
    // Check if this select box is currently open
    const isOpen = option_container.classList.contains("active");

    // Close all select boxes
    selectBoxes.forEach((box) => {
      box.querySelector(".option_container").classList.remove("active");
      box
        .querySelector(".selected_option .bi-chevron-down")
        .classList.remove("bi-chevron-up");
    });

    // Open this select box if it was closed, or close it if it was open
    if (!isOpen) {
      option_container.classList.add("active");
      selected_option
        .querySelector(".bi-chevron-down")
        .classList.add("bi-chevron-up");
    }
  });

  options.forEach((option_li) => {
    option_li.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("selected");
      });
      selected_option.querySelector("span").textContent = option_li.textContent;
      option_li.classList.add("selected");
      option_container.classList.remove("active");
      selected_option
        .querySelector(".bi-chevron-down")
        .classList.remove("bi-chevron-up");
    });
  });
});

// search js
const searchInput = document.querySelector(".search_input");
const clearIcon = document.querySelector(".clear_icon");

// Add an event listener to the search input
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    clearIcon.style.display = "block";
  } else {
    clearIcon.style.display = "none";
  }
});

// Add an event listener to the clear icon to clear the input
clearIcon.addEventListener("click", () => {
  searchInput.value = "";
  clearIcon.style.display = "none";
});
