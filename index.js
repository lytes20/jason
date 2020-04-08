const userDropDown = document.querySelector(".user-dropdown");
var display = false;

function toggleDropdown() {
  console.log("toggleDropdown", display);
  display = !display;
  handleDisplayChange(display);
}

function handleDisplayChange(passedDisplay) {
  console.log("handleDisplayChange", passedDisplay);
  if (passedDisplay === true) {
    return (userDropDown.style.display = "block");
  } else {
    return (userDropDown.style.display = "none");
  }
}
