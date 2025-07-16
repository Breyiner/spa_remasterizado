import { categoriaController } from "../views/categories/categoriasController";
import { homeController } from "../views/home/homeController";
import {loginController} from "../views/login/loginController.js"
import { productosController } from "../views/products/productosController.js";
import {registroController} from "../views/registro/registroController.js"

export const routers = {
   inicio: {
      path: "home/index.html",
      controller: homeController,
      private: false
   },   
   categorias: {
      "": {
         path: "categories/index.html",
         controller: categoriaController,
         private: false,
      },
      crear: {
         path: "home/index.html",
         controller: homeController,
         private: false,
      },
      editar: {
         path: "categories/editar.html",
         controller: categoriaController,
         private: false,
      }
   },   
   productos: {
      path: "products/index.html",
      controller: productosController,
      private: false
   },
   login: {
      path: "login/index.html",
      controller: loginController,
      private: false
   },
   registro:{
      path: "registro/index.html",
      controller: registroController,
      private: false
   }
}