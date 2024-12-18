function changeImage() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Check if no option is selected
  if (choice === "") {
    alert("No Content Selected!");
    return;
  }

  // Path to the HTML file based on choice
  var htmlPath = "assets/html/" + choice + ".html"; // Fixed file extension

  // Update the result div with the selected HTML content in an iframe
  var result = document.getElementById("result");
  result.innerHTML = "<iframe src='" + htmlPath + "' style='width: 100%; height: 100%; border: none;'></iframe>";
}
