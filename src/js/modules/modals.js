const modals = () => {
    function bindModal(openModalSelector, modalSelector, closeModalSelector) {
        const openModal = document.querySelectorAll(openModalSelector);
        const modal = document.querySelector(modalSelector);
        const closeModal = document.querySelector(closeModalSelector);

        openModal.forEach((item) => {
            item.addEventListener('click', (evt) => {
                if (evt.target) {
                    evt.preventDefault();
                }
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('data-open');
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('data-open');
        });

        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('data-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;