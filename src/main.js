import { renderHeader } from './components/header';
import { changeButtons, logout } from './helpers/actionsButtons';
import { router } from './router/router';
import './styles/style.css'


const header = document.querySelector("#header");
const app = document.querySelector("#app");

renderHeader(header)

const btnLogin = document.querySelector('#login');
const btnSignUp = document.querySelector('#siginup');
const btnLogOut = document.querySelector('#logout');


window.addEventListener('DOMContentLoaded', async () => {
  await changeButtons(btnLogin, btnSignUp, btnLogOut);
  router(app)
});

window.addEventListener('hashchange', async () => {
  await changeButtons(btnLogin, btnSignUp, btnLogOut);
  router(app)
})

btnLogOut.addEventListener('click', async () => {
  await logout();
})