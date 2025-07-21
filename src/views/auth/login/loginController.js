import * as validate from "../../../helpers/validaciones.js";
import * as solcitudes from "../../../helpers/solicitudes.js";
import { error, success } from "../../../helpers/alertas.js";


export function loginController(parametros = null) {
  let formulario = document.querySelector('#form');

  let correo = document.querySelector('#correo');
  let contrasena = document.querySelector('#password');
  
  correo.addEventListener("keydown", (e) => {
    validate.validarMaximo(e, 40);
  });

  contrasena.addEventListener("keydown", (e) => {
    validate.validarMaximo(e, 40);
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
      
      let response = await solcitudes.post(datos, 'auth/login');
      
      if(!response.success) {
        console.log("hola");
        
        error(response.message);
        return;
      }
      
      console.log(response);
      

      let confirmacion = await success(response.message);

      if(confirmacion.isConfirmed) window.location.href='#/categorias';
    }
  });
}