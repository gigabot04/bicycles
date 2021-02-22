'use strict';
{
  const headerMenuBtn = document.querySelector(`.header__btn-menu`);
  const headerMenu = document.querySelector(`.header__nav`);
  headerMenu.classList.remove(`header__nav--nojs`);
  headerMenuBtn.classList.remove(`header__btn-menu--nojs`);
  headerMenuBtn.addEventListener(`click`, () => {
    headerMenu.classList.toggle(`header__nav--active`);
    headerMenuBtn.classList.toggle(`header__btn-menu--active`);
  });
}
