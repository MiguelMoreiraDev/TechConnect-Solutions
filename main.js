import './style.css';
import { createIcons, Menu, X, UserRound, Mail, KeyRound } from 'lucide';

createIcons({
  icons: {
    Menu,
    X,
    UserRound,
    Mail,
    KeyRound,
  },
});

import initMenuHamburguer from './scripts/menu-hamburguer.js';
initMenuHamburguer();
