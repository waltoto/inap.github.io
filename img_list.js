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
  // Récupérer la sélection de l'utilisateur (dropdown 1 et dropdown 2 ont des IDs distincts)
  var choice = document.getElementById("choice1").value;

  // Si aucun choix n'est fait
  if (!choice) {
    alert("No Image Selected!");
    return;
  }
  
  // Afficher le choix sélectionné dans la console pour vérification
  console.log(choice);

  // Construire le chemin du fichier HTML
  var htmlPath = "assets/img/" + choice + ".html";
  
  // Afficher le chemin généré pour déboguer
  console.log(htmlPath);
  
  // Récupérer l'élément cible où insérer le graphique (div résultat pour le second menu déroulant)
  var result = document.getElementById("result1");

  // Mettre à jour le contenu de l'élément avec un iframe
  result.innerHTML = `<iframe src="${htmlPath}" 
                           style="width: 100%; height: 100%; border: none;"
                           title="Interactive Chart"></iframe>`;
}
