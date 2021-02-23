'use strict';
{
  const headerMenuBtn = document.querySelector(`.header__btn-menu`);
  const headerMenu = document.querySelector(`.header__nav-wrapper`);
  const body = document.querySelector(`body`);
  headerMenu.classList.remove(`header__nav-wrapper--nojs`);
  headerMenuBtn.classList.remove(`header__btn-menu--nojs`);
  headerMenuBtn.addEventListener(`click`, () => {
    headerMenu.classList.toggle(`header__nav-wrapper--active`);
    body.classList.toggle(`body--js`);
    headerMenuBtn.classList.toggle(`header__btn-menu--active`);
  });
}
