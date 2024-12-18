
function changeImage() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Check if no option is selected
  if (choice === "") {
    alert("No Image Selected!");
    return;
  }

  // Path to the image based on choice
  var imagePath = "assets/img/" + choice + ".png";

  // Update the result div with the selected image
  var result = document.getElementById("result");
  result.innerHTML = "<img src='" + imagePath + "' style='max-width: 100%; height: 100%;' alt='Selected Image'>";
}

function changeImageHTML() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Check if no option is selected
  if (choice === "") {
    alert("No Image Selected!");
    return;
  }

  // Path to the .html file based on choice
  var htmlPath = "assets/img/" + choice + ".html";

  // Update the result div with the selected HTML file using an <iframe>
  var result = document.getElementById("result");
  result.innerHTML = "<iframe src='" + htmlPath + "' style='width: 100%; height: 100%; border: none;' title='Selected HTML'></iframe>";
}
