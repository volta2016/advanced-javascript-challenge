// Cargar las imágenes contenidas en la constante rutasImagenes utilizando Promise.all
// Luego cargadas, agregarlas al div #contenedor

const images = [
  {
    id: 0,
    src: "./images/picture-1.jpg",
  },
  {
    id: 2,
    src: "./images/picture-2.jpg",
  },
  {
    id: 3,
    src: "./images/picture-3.jpg",
  },
  {
    id: 4,
    src: "/images/picture-4.jpg",
  },
];

const ruoteImages = images;
const wrapper = document.getElementById("contenedor");

const promises = [];

for (const img of ruoteImages) {
  promises.push(fetch(img.src));
}

Promise.all(promises).then((res) => {
  Promise.all(res.map((resdata) => resdata.blob()))
    .then((blobs) => {
      const fragment = document.createDocumentFragment();
      for (const blob of blobs) {
        const imgURL = URL.createObjectURL(blob);
        const imgHTML = document.createElement("img");
        imgHTML.src = imgURL;
        fragment.appendChild(imgHTML);
      }
      return fragment;
    })
    .then((fragment) => wrapper.appendChild(fragment));
});
