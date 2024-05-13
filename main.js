import './style.css';
import { createIcons, Menu, X, CircleUser, Mail, KeyRound } from 'lucide';

createIcons({
  icons: {
    Menu,
    X,
    CircleUser,
    Mail,
    KeyRound,
  },
});

import initMenuHamburguer from './scripts/menu-hamburguer.js';
initMenuHamburguer();
import Modal from './scripts/modal.js';
const loginModal = new Modal(
  '[data-loginModal = "abrir"]',
  '[data-loginModal = "fechar"]',
  '[data-loginModal = "container"]',
  '[data-loginModal = "toRegisterModal"]'
);
loginModal.init();
const registerModal = new Modal(
  '[data-registerModal = "abrir"]',
  '[data-registerModal = "fechar"]',
  '[data-registerModal = "container"]',
  '[data-registerModal = "toLoginModal"]'
);
registerModal.init();


