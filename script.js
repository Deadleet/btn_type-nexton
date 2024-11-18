function turnTheCircle() {
  // Sélectionner l'élément ayant l'ID 'circle1'
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');
  const hovercircle = document.getElementById('hovercircle');

  // Désactiver le hover temporairement
  disableHoverTemporarily(hovercircle, 3000)
  // Vérifier si l'élément existe
  if (!circle1) {
      console.error("Aucun élément avec l'ID 'circle1' n'a été trouvé.");
      return; // Arrête la fonction si l'élément n'existe pas
  }
  // P1 - exentrer les cercles
  console.log('P1 - exentrer les cercles');
  circle1.style.transition = 'transform 0.5s ease-in-out';
  circle1.style.transform = 'rotate(-45deg) translateX(85px) rotate(-45deg)';
  circle2.style.transition = 'transform 0.5s ease-in-out';
  circle2.style.transform = 'rotate(135deg) translateX(85px) rotate(45deg)';

  // P2 - tourner les cercles
  setTimeout(() => {
    console.log('P2 - tourner les cercles');
    circle1.style.transition = 'transform 2s ease-in-out';
    circle2.style.transition = 'transform 2s ease-in-out';
    circle1.style.transform = 'rotate(315deg) translateX(85px) rotate(-45deg)';
    circle2.style.transform = 'rotate(495deg) translateX(85px) rotate(45deg)';
  }, 500);
  // P3 - concentrer les cercles
  setTimeout(() => {
    console.log('P3 - concentrer les cercles');
    circle1.style.transition = 'transform 0.5s ease-in-out';
    circle2.style.transition = 'transform 0.5s ease-in-out';
    circle1.style.transform = 'rotate(315deg) translateX(75px) rotate(-45deg)';
    circle2.style.transform = 'rotate(495deg) translateX(75px) rotate(45deg)';
  }, 2500);
  // P4 - Reset
  setTimeout(() => {
    console.log('P4 - Reset');
    circle1.style.transition = 'transform 0s ease-in-out';
    circle2.style.transition = 'transform 0s ease-in-out';
    circle1.style.transform = 'rotate(-45deg) translateX(65px) rotate(-45deg)';
    circle2.style.transform = 'rotate(135deg) translateX(65px) rotate(45deg)';
  }, 3000);
}


function concentrateCircle() {
  // Sélectionner l'élément ayant l'ID 'circle1'
  const hovercircle2 = document.getElementById('hovercircle2');
  disableHoverTemporarily(hovercircle2, duration)
}
// Fonction pour désactiver le hover temporairement
function disableHoverTemporarily(element, duration) {
  if (!element) {
      console.error('Aucun élément valide fourni.');
      return;
  }

  // Ajouter une classe qui désactive le hover
  element.classList.add('no-hover');

  // Après la durée spécifiée, retirer la classe
  setTimeout(() => {
      element.classList.remove('no-hover');
  }, duration);
}
