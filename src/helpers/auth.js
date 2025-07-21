import { get } from "./solicitudes"

export const isAuth = async () => {
    let response = await get('protected');

    console.log(response);
    

    if(!response.success) return false;

    return true;
}