export default function initMenuHamburguer() {}

const buttonMenuHamburguer = document.querySelector(
  '[data-menuHamburguer="button"]'
);
const containerMenuHamburguer = document.querySelector(
  '[data-menuHamburguer="container"]'
);
const eventos = ['click', 'touchstart'];

function handleAtivarMenuHamburguer(event) {
  event.preventDefault();
  containerMenuHamburguer.classList.toggle('hidden');
  buttonMenuHamburguer.classList.toggle('rotate-90');
}

eventos.forEach((evento) => {
  buttonMenuHamburguer.addEventListener(evento, handleAtivarMenuHamburguer);
});
