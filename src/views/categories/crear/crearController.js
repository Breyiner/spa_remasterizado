import * as validate from "../../../helpers/validaciones.js";
import * as solcitudes from "../../../helpers/solicitudes.js";
import { error, success } from "../../../helpers/alertas.js";


export function crearController(parametros = null) {
  let formulario = document.querySelector('#form');

  let nombre = document.querySelector('#nombre');
  let descripcion = document.querySelector('#descripcion');
  
  nombre.addEventListener("keydown", (e) => {
    validate.validarTexto(e); 
    validate.validarMaximo(e, 20);
  });

  descripcion.addEventListener("keydown", (e) => {
    validate.validarTexto(e);
    validate.validarMaximo(e, 100);
  });

  nombre.addEventListener("blur", (e) => {
    validate.validarCampo(e);
    validate.validarMinimo(e, 6);
  });
  descripcion.addEventListener("blur", (e) => {
    validate.validarCampo(e);
    validate.validarMinimo(e, 6);
  });

  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(validate.validarCampos(e)) {

      const datos = validate.datos;

      console.log(datos);
      
      let categoriaCreada = await solcitudes.post(datos, 'categorias');
      
      if(!categoriaCreada.success) {
        error(categoriaCreada.message);
      }
      
      console.log(categoriaCreada.message);
      

      let confirmacion = await success(categoriaCreada.message);

      if(confirmacion.isConfirmed) window.location.href='#/categorias';
    }
  });
}