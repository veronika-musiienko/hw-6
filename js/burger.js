(() => {
  let isOpen = false;

    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-burger-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector("[data-burger-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-burger]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      isOpen = !isOpen;
      if(isOpen){
        document.body.style.overflow = 'hidden'
        refs.modal.classList.add("is-open-burger");
      }else{
        document.body.style.overflow = 'auto'
        refs.modal.classList.remove("is-open-burger");
      }
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    }
  })();