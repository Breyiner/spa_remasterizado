const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete"];

export const validarTexto = (event) => {
  const key = event.key;
  const regex = /^[\D]*$/i;

  if (!regex.test(key) && !teclasEspeciales.includes(key)) { 

    event.preventDefault();
  }
};

export const validarCampo = (event) => {

  let campo = event.target;

  if (((campo.tagName == "INPUT" || campo.tagName == "TEXTAREA") && campo.value.trim() == "") || (campo.tagName == "SELECT" && campo.selectedIndex == 0)) {
    agregarError(campo.parentElement);
    return false;
  }

  if (campo.parentElement.className.includes('error'))
    quitarError(campo.parentElement);

  return true;
};

export const agregarError = (campo, mensaje = "El campo es obligatorio.") => {
  campo.classList.add('error');
  campo.style.setProperty('--error-message', `"${mensaje}"`);
};


export const quitarError = (campo) => {
  campo.classList.remove('error');
};

export const validarMaximo = (event, maximo) => {
  const key = event.key;
  if (!teclasEspeciales.includes(key) && event.target.value.length >= maximo) event.preventDefault(); 
};

export const validarMinimo = (event, minimo) => {
  let campo = event.target;

  if((campo.tagName == "INPUT" || campo.tagName == "TEXTAREA") && campo.value.length < minimo) {
    agregarError(campo.parentElement, `Mínimo ${minimo} caracteres`);
  }

  if (campo.parentElement.className.includes('error') && campo.value.length >= minimo)
    quitarError(campo.parentElement);

}


export const datos = {};
export const validarCampos = (event) => {

  let valido = true;

  const campos = [...event.target].filter((elemento) => elemento.hasAttribute("required") && (elemento.tagName == "INPUT" || elemento.tagName == "TEXTAREA"));

  campos.forEach((campo) => {
    if (!validarCampo({ target: campo })) valido = false;

    datos[campo.getAttribute("name")] = campo.value;
  });

  return valido;
};