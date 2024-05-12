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
  '[data-loginModal = "container"]'
);
loginModal.init();
const registerModal = new Modal(
  '[data-registerModal = "abrir"]',
  '[data-registerModal = "fechar"]',
  '[data-registerModal = "container"]'
);
registerModal.init();
