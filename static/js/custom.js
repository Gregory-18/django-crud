
// document.querySelector("#submit").addEventListener("click", e => {
//   e.preventDefault();

//   const telefono = "+584147324042";
//   const negocio = "Envoltoriza";

//   const caja_nombre = document.querySelector("#caja_nombre").innerText;
//   const caja_precio = document.querySelector("#caja_precio").innerText;
//   const caja_alto = document.querySelector("#caja_alto").innerText;
//   const caja_ancho = document.querySelector("#caja_ancho").innerText;
//   const caja_largo = document.querySelector("#caja_largo").innerText;
//   const caja_material = document.querySelector("#caja_material").innerText;

//   const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
//   *_${negocio}_*%0A
//   *¿Producto?*%0A
//   ${caja_nombre}%0A
//   *Precio del producto*%0A
//   ${caja_precio}%0A
//   *MEDIDAS*%0A
//   *Alto*%0A
//   ${caja_alto}%0A
//   *Ancho*%0A
//   ${caja_ancho}%0A
//   *Largo*%0A
//   ${caja_largo}%0A
//   *¿Material del producto?*%0A
//   ${caja_material}%0A`;

//   window.open(url);
// });


document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  const telefono = "+584147324042";
  const negocio = "Envoltoriza";

  const caja_nombre = document.querySelector("#caja_nombre").innerText;
  const caja_precio = document.querySelector("#caja_precio").innerText;
  const caja_alto = document.querySelector("#caja_alto").innerText;
  const caja_ancho = document.querySelector("#caja_ancho").innerText;
  const caja_largo = document.querySelector("#caja_largo").innerText;
  const caja_material = document.querySelector("#caja_material").innerText;
  const caja_cantidad = document.querySelector("#caja_cantidad").value;

  // Obtener los colores seleccionados
  const selectedColors = [];
  colorCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selectedColors.push(checkbox.value);
      }
  });

  // Crear el mensaje de WhatsApp con los colores seleccionados
  const colorsText = selectedColors.length > 0 ? "*Colores seleccionados:*%0A" + selectedColors.join("%0A") : "";

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
  *_${negocio}_*%0A
  *¿Producto?*%0A
  ${caja_nombre}%0A
  *Precio del producto*%0A
  ${caja_precio}%0A
  *MEDIDAS*%0A
  ${caja_alto}%0A
  ${caja_ancho}%0A
  ${caja_largo}%0A
  *¿Material del producto?*%0A
  ${caja_material}%0A
  *Cantidad*%0A
  ${caja_cantidad}%0A
  ${colorsText}`;

  window.open(url);
});

// scripts.js

// Obtener todos los checkboxes de colores
const colorCheckboxes = document.querySelectorAll(".color-checkbox");

// Escuchar el evento clic en cada checkbox de color
colorCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        // Cambiar la opacidad del botón de color en función del estado del checkbox
        const colorBtn = checkbox.nextElementSibling;
        colorBtn.style.opacity = checkbox.checked ? "1" : "0.2";
        
    });
});
