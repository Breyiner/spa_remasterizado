import { routers } from "./routers"

export const router = (elemento) => {
    const hash = location.hash.slice(1);
    const ruta = recorrerRutas(routers, hash);
    cargarVista(ruta.path, elemento)  
    //  ruta.controller();
    // console.log(ruta)

}

const recorrerRutas = (routers, hash) => {

    console.log(hash.split('/'));
    let hashSeparado = hash.split("/");
    
    for (const key in routers) {

        if (hashSeparado.length == 1 && hashSeparado[0] == "") {
            // console.log(routers['inicio']);
            return routers['inicio'];
        }

        if (key == hashSeparado[1]) { 
            for(const elemento in routers[key]){
                // console.log(routers[key][hashSeparado[2]]);
                
                if(typeof routers[key][elemento] == "object"){
                    return hashSeparado.length == 2 ? 
                        routers[key][elemento] : 
                        routers[key][hashSeparado[2]]
                }
            }
            return routers[key];            
        }
    }
    return "";
}

const cargarVista = async (path, elemento) => {
    console.log(path, elemento);
    const seccion = await fetch(`./src/views/${path}`);
    if (!seccion.ok) throw new Error("No pudimos leer el archivo");
    const html = await seccion.text();
    elemento.innerHTML =  html;
}