
export const showBurger = () => {
    const burger = document.querySelector('.header__burger-menu');
    const burgerBtn = document.querySelector('.header__burger');

    burgerBtn.addEventListener('click', () => {
        burger.classList.add('open__burger');
    });
};

export const closeBurger = () => {
    const burger = document.querySelector('.header__burger-menu');
    const closeBtn = document.querySelector('.close__btn');

    closeBtn.addEventListener('click', () => {
        burger.classList.remove('open__burger');
    });
};