// Implementar un buscador de datos, donde los resultados se muestren tan
// pronto el usuario escriba texto en el input disponible

const input = document.getElementById("input");
const results = document.getElementById("results");

console.log("ok");

// listener

input.addEventListener("input", () => {
  results.innerHTML = "";
  const valor = input.value.toLowerCase();

  const filteringData = DATOS.filter(
    (dato) => dato.nombre.toLowerCase().indexOf(valor) > -1
  );
  const fragment = document.createDocumentFragment();

  for (const dato of filteringData) {
    fragment.appendChild(generateElement(dato));
  }

  results.appendChild(fragment);
});

function generateElement(info) {
  const div = document.createElement("div");
  div.innerHTML = `<p></p><b>id:</b> ${info.id}</p>
  <p><b>name:</b> ${info.nombre}</p>
  <p><b>company:</b>${info.compania}</p>
  <p><b>date:</b> ${info.fdn}</p>
  <p><b>adress:</b> ${info.direccion}</p>
  <p><b>about:</b>${info.acerca}</p>
  `;

  return div;
}
