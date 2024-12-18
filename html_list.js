function changeContent() {
  // Get the value of the dropdown
  var choice = document.getElementById("choice").value;

  // Hide all content divs
  var contentDivs = document.querySelectorAll(".content");
  contentDivs.forEach(function (div) {
    div.style.display = "none";
  });

  // Show the selected content
  if (choice) {
    var selectedDiv = document.getElementById(choice);
    if (selectedDiv) {
      selectedDiv.style.display = "block";
    } else {
      alert("Content not found!");
    }
  }
}
