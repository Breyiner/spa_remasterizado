import { categoriaController } from "../views/categories/categoriasController.js";
import { homeController } from "../views/home/homeController.js";
import {loginController} from "../views/auth/login/loginController.js"
import { productosController } from "../views/products/productosController.js";
import {registroController} from "../views/auth/registro/registroController.js"
import { crearController } from "../views/categories/crear/crearController.js";
import { editarController } from "../views/categories/editar/editarController.js";

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
         private: true,
      },
      crear: {
         path: "categories/crear/index.html",
         controller: crearController,
         private: true,
      },
      editar: {
         path: "categories/editar/index.html",
         controller: editarController,
         private: true,
      }
   },   
   productos: {
      path: "products/index.html",
      controller: productosController,
      private: true
   },
   login: {
      path: "auth/login/index.html",
      controller: loginController,
      private: false
   },
   registro:{
      path: "auth/registro/index.html",
      controller: registroController,
      private: false
   }
}