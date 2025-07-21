import { get } from "./solicitudes";

export const isAuth = async () => {
    try {
        let response = await get("protected");

        // Verifica si fue exitoso
        if (response.success) return true;

        if (response.errorCode === "TOKEN_EXPIRED") {

            const refreshOk = await genNewToken();
            if (refreshOk) {
                // Intentar de nuevo la petición original
                response = await get("protected");
                console.log(response);
                
                return response.success;
            } else return false;
        }

        if (response.errorCode === "TOKEN_INVALID") {
            console.warn("Token inválido.");
            return false;
        }

        if (response.errorCode === "TOKEN_MISSING") {
            console.warn("Token no proporcionado.");
            return false;
        }

        console.warn("Error de autenticación no manejado:", response);
        return false;

    } catch (error) {
        console.error("Error al verificar autenticación:", error);
        return false;
    }
};


const genNewToken = async () => {
  try {
    const response = await get("auth/refresh");

    return response.success;

  } catch (error) {
    console.error("Error al renovar token:", error);
    return false;
  }
};