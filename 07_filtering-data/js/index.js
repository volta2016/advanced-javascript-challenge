// Implementar un buscador de datos, donde los resultados se muestren tan
// pronto el usuario escriba texto en el input disponible

const input = document.getElementById("input");
const results = document.getElementById("results");

// listener

input.addEventListener("input", () => {
  results.innerHTML = "";
  const valor = input.ariaValueMax.toLocaleLowerCase;
  const filteringData = DATOS.filter(
    (dato) => dato.nombre.toLowerCase().indexOf(valor) > -1
  );
  const fragment = document.createDocumentFragment();

  for (const dato of filteringData) {
    fragment.appendChild(generateElement(dato));
  }
  results.appendChild(fragment);
});

function generateElement() {}
