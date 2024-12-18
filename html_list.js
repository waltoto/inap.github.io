
function changeImage() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Check if no option is selected
  if (choice === "") {
    alert("No Image Selected!");
    return;
  }

  // Path to the image based on choice
  var imagePath = "assets/img/" + choice + ".htlm";

  // Update the result div with the selected image
  var result = document.getElementById("result");
  result.innerHTML = "<img src='" + imagePath + "' style='max-width: 100%; height: 100%;' alt='Selected Image'>";
}
