export default class Modal {
  constructor(abrirModal, fecharModal, container) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.container = document.querySelector(container);

    this.eventos = ['click', 'touchstart'];

    this.handleAbrirModal = this.handleAbrirModal.bind(this);
    this.handleFecharModal = this.handleFecharModal.bind(this);
  }

  handleAbrirModal(event) {
    event.preventDefault();
    this.container.classList.remove('hidden');
  }

  handleFecharModal(event) {
    event.preventDefault();
    this.container.classList.add('hidden');
  }

  addModalEvents() {
    this.eventos.forEach((evento) => {
      this.abrirModal.addEventListener(evento, this.handleAbrirModal);
      this.fecharModal.addEventListener(evento, this.handleFecharModal);
      document.documentElement.addEventListener(evento, (event) => {
        if (event.target === this.container) {
          this.container.classList.add('hidden');
        }
      });
    });
  }

  init() {
    if (this.abrirModal && this.fecharModal && this.container) {
      this.addModalEvents();
    }
  }
}
