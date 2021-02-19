'use strict';
{
  const headerMenuBtn = document.querySelector(`.header__btn-menu`);
  const headerMenu = document.querySelector(`.header__nav`);
  headerMenu.classList.remove(`header__nav--nojs`);
  headerMenuBtn.addEventListener(`click`, () => {
    headerMenu.classList.toggle(`header__nav--active`);
  });
}
