import * as validate from "../../../helpers/validaciones.js";
import * as solcitudes from "../../../helpers/solicitudes.js";
import { error, success } from "../../../helpers/alertas.js";


export async function editarController(parametros = null) {

  const {id} = parametros;
  // console.log(parametros);

  const resultado = await solcitudes.get(`categorias/${id}`);
  // console.log(resultado);
  
  if (!resultado.success) {
    error('Se presentó un error inesperado');
    return;
  }

  const {data} = resultado;

  
  

  let formulario = document.querySelector('#form');

  let nombre = document.querySelector('#nombre');
  let descripcion = document.querySelector('#descripcion');
  
  console.log(nombre);
  nombre.value = data.nombre;
  descripcion.textContent = data.descripcion;
  
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
    if (validate.validarCampos(e)) {
      const respuesta = await solcitudes.put(validate.datos, `categorias/${id}`);
      if (!respuesta.success) {
        error('Se presentó un error inesperado');
        return;
      }
      const alerta = await success(respuesta.message);

      if(alerta.isConfirmed) window.location.href='#/categorias';
    }
  })
}