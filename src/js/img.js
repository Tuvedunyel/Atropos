import atroposImg from "./../img/atropos-test.jpg";

function atroposImage() {
  let container = document.getElementById("atropos-container");
  let img = document.createElement("img");
  container.append(img);
  img.src = atroposImg;
  img.alt = "Test de l'effet d'atropos sur une image";
}

export default atroposImage;
