window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", showNotification);
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
};

/** Cette fonction est appelée lorsque la personne clique sur la flèche droite du carrousel pour naviguer vers la droite */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) { //si el valor de izquierda es menor a -270, para de mover el contenido
    return;
  }
  let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Cette fonction est appelée lorsque la personne clique sur la flèche droite du carrousel pour naviguer vers la gauche */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { // Si la valeur de gauche est 0, retourner pour ne pas continuer à déplacer le contenu
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
}

/** Cette fonction est appelée lorsque la personne clique sur le bouton d'envoi du formulaire de contact */
function showNotification() {
  document.querySelector(".notification").style.display = "flex";
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/** Cette fonction est appelée lorsque la personne clique sur n'importe quel projet du carrousel */
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
}

/** Cette fonction est appelée pour fermer le modal */
function closeModal(e) {
// Si le clic a eu lieu à l'intérieur des images du carrousel ou à l'intérieur du modal, le modal ne se ferme pas
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
