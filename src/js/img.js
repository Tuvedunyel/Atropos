import atroposImg from "./../img/atropos-test.jpg";

function atroposImage() {
  let img = document.getElementById("atropos-image");
  img.src = atroposImg;
  img.alt = "Test de l'effet d'atropos sur une image";
}

export default atroposImage;
