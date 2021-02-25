'use strict';
{
  const headerMenuBtn = document.querySelector(`.header__btn-menu`);
  const headerMenu = document.querySelector(`.header__nav-wrapper`);
  const body = document.querySelector(`body`);
  headerMenu.classList.remove(`header__nav-wrapper--nojs`);
  headerMenuBtn.classList.remove(`header__btn-menu--nojs`);

  const openCloseMenu = () => {
    headerMenu.classList.toggle(`header__nav-wrapper--active`);
    body.classList.toggle(`body--js`);
    headerMenuBtn.classList.toggle(`header__btn-menu--active`);
  }

  headerMenuBtn.addEventListener(`click`, () => {
    openCloseMenu();
  });
  headerMenu.addEventListener(`click`, (evt) => {
    let trg = evt.target;
    if (trg.tagName === `A`) {
      openCloseMenu();
    }
  });
}
