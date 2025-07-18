import { confirm, error, success } from "../../helpers/alertas";
import { delet, get } from "../../helpers/solicitudes";

const eliminar = async(e) => {
  const elemento = e.target;

  if (elemento.closest(".eliminar")) {
    const dataId = elemento.dataset.id
    console.log(dataId);

    const confirmacion = await confirm();
    if(confirmacion.isConfirmed){
      const fila = document.querySelector(`.tabla__fila[data-id= "${dataId}"]`)
      const respuesta = await delet(`categorias/${dataId}`);
      
      if(!respuesta.success){
        console.log(respuesta);
        error(respuesta.message);
        return
      }
      
      success(respuesta.message)
      fila.remove();
    }
  }
}


export const categoriaController = async (parametros = null) => {
    const {data} = await get('categorias');

    const tabla = document.querySelector('table');
    
    data.forEach( ({id, nombre, descripcion}) => {
        // Creamos los elementos
        const fila = document.createElement('tr');
        const td_id = document.createElement('td');
        const td_nombre = document.createElement('td');
        const td_descripcion = document.createElement('td');
        const td_editar = document.createElement('td');
        const td_eliminar = document.createElement('td');
        // Agregamos los estilos
        fila.classList.add('tabla__fila');
        td_id.classList.add('tabla__celda');
        td_nombre.classList.add('tabla__celda');
        td_descripcion.classList.add('tabla__celda');
        td_editar.classList.add('tabla__celda', 'tabla__celda--boton');
        td_eliminar.classList.add('tabla__celda', 'tabla__celda--boton');
        // Agregamos el nodo de texto
        fila.setAttribute("data-id", id);
        td_id.textContent = id;
        td_nombre.textContent = nombre;
        td_descripcion.textContent = descripcion;

        //creacion de los botones
        const boton_editar = document.createElement('a');
        const boton_eliminar = document.createElement('button');
        //Agregamos los estilos
        boton_editar.classList.add('boton', 'boton--azul', 'editar');
        boton_eliminar.classList.add('boton','boton--rojo', 'eliminar');
        //Agregamos el contenido de texto
        boton_editar.textContent = "Editar";
        boton_editar.setAttribute('href',`#/categorias/editar/id=${id}`);
        boton_eliminar.setAttribute("data-id", id);
        boton_eliminar.textContent = "Eliminar";
        //Agregamos los botones a las celdas
        td_editar.append(boton_editar);
        td_eliminar.append(boton_eliminar);
        // Agregamos las columnas a la fila
        fila.append(td_id, td_nombre, td_descripcion,td_editar, td_eliminar);
        tabla.append(fila);
    });
};
document.addEventListener('click', eliminar);