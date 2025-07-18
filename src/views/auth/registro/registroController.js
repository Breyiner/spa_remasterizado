import * as validate from "../../../helpers/validaciones.js";
import * as solcitudes from "../../../helpers/solicitudes.js";
import { error, success } from "../../../helpers/alertas.js";


export function registroController(parametros = null) {
  let formulario = document.querySelector('#form');

  let nombre = document.querySelector('#nombre');
  let correo = document.querySelector('#correo');
  let contrasena = document.querySelector('#contrasena');
  
  nombre.addEventListener("keydown", (e) => {
    validate.validarTexto(e); 
    validate.validarMaximo(e, 40);
  });
  correo.addEventListener("keydown", (e) => {
    validate.validarTexto(e); 
    validate.validarMaximo(e, 40);
  });
  contrasena.addEventListener("keydown", (e) => {
    validate.validarTexto(e);
    validate.validarMaximo(e, 40);
  });

  nombre.addEventListener("blur", (e) => {
    validate.validarCampo(e);
    validate.validarMinimo(e, 6);
  });
  correo.addEventListener("blur", (e) => {
    validate.validarCampo(e);
    validate.validarMinimo(e, 6);
  });
  contrasena.addEventListener("blur", (e) => {
    validate.validarCampo(e);
    validate.validarMinimo(e, 6);
  });

  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    if(validate.validarCampos(e)) {

      const datos = validate.datos;

      console.log(datos);
      
    //   let categoriaCreada = await solcitudes.post(datos, '');
      
    //   if(!categoriaCreada.success) {
    //     error(categoriaCreada.message);
    //   }
      
    //   console.log(categoriaCreada.message);
      

    //   let confirmacion = await success(categoriaCreada.message);

    //   if(confirmacion.isConfirmed) window.location.href='#/categorias';
    }
  });
}