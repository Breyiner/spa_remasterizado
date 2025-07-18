import { renderHeader } from './components/header';
import { router } from './router/router';
import './styles/style.css'


const header = document.querySelector("#header");
const app = document.querySelector("#app");

renderHeader(header)

window.addEventListener('DOMContentLoaded', () => {
  router(app)
});

window.addEventListener('hashchange', () => {
  router(app)
})