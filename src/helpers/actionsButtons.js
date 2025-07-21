import { confirm, success } from "./alertas";
import { isAuth } from "./auth";
import { get } from "./solicitudes";

export const changeButtons = async (btnLogin, btnSignUp, btnLogOut) => {
    if (await isAuth()) {
        btnLogOut.classList.remove('oculto');
        btnLogin.classList.add('oculto');
        btnSignUp.classList.add('oculto');
    }
    else {
        btnLogOut.classList.add('oculto');
        btnLogin.classList.remove('oculto');
        btnSignUp.classList.remove('oculto');
    }
}

export const logout = async () =>{

    const confirmacion = await confirm("¿Está seguro de cerrar sesión?");

    if(confirmacion.isConfirmed){
        const respuesta = await get(`auth/logout`);
        
        if(!respuesta.success){
            console.log(respuesta);
            error(respuesta.message);
            return
        }
        
        const reponseLogout = await success(respuesta.message);

        console.log(reponseLogout);
        
        if(reponseLogout.isConfirmed) window.location.href = '#/login';

    }
}