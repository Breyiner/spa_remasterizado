import * as validate from "../../../helpers/validaciones.js";
import * as solcitudes from "../../../helpers/solicitudes.js";
import { error, success } from "../../../helpers/alertas.js";


export function registroController(parametros = null) {
  let formulario = document.querySelector('#form');

  let nombre = document.querySelector('#nombre');
  let correo = document.querySelector('#email');
  let contrasena = document.querySelector('#password');
  
  nombre.addEventListener("keydown", (e) => {
    validate.validarTexto(e); 
    validate.validarMaximo(e, 40);
  });
  correo.addEventListener("keydown", (e) => {
    validate.validarMaximo(e, 40);
  });
  contrasena.addEventListener("keydown", (e) => {
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
      
      let usuarioCreado = await solcitudes.post(datos, 'auth/register');
      
      if(!usuarioCreado.success) {
        error(usuarioCreado.message);
      }
      
      console.log(usuarioCreado.message);
      

      let confirmacion = await success(usuarioCreado.message);

      if(confirmacion.isConfirmed) window.location.href='#/categorias';
    }
  });
}