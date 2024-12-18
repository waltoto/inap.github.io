function changeImage() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Check if no option is selected
  if (choice === "") {
    alert("No Content Selected!");
    return;
  }

  // Map the dropdown choice to the corresponding HTML file
  var result = document.getElementById("result");

  // Clear existing content
  result.innerHTML = "";

  // Dynamically load the HTML content using Jekyll's include directive
  switch (choice) {
    case "histogram_English_Language":
      result.innerHTML = `{% include_relative assets/img/histogram_English_Language.html %}`;
      break;
    case "histogram_French_Language":
      result.innerHTML = `{% include_relative assets/img/histogram_French_Language.html %}`;
      break;
    case "histogram_Hindi_Language":
      result.innerHTML = `{% include_relative assets/img/histogram_Hindi_Language.html %}`;
      break;
    case "histogram_Italian_Language":
      result.innerHTML = `{% include_relative assets/img/histogram_Italian_Language.html %}`;
      break;
    case "histogram_Spanish_Language":
      result.innerHTML = `{% include_relative assets/img/histogram_Spanish_Language.html %}`;
      break;
    default:
      alert("Content not available!");
      break;
  }
}
