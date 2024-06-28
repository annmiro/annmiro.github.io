const menuButton = document.querySelector(`.menu-button`);
const menu = document.querySelector(`.menu`);
const popupButton = document.querySelectorAll(`.button`);
const popup = document.querySelector(`.popup`);
const popupCrossButton = popup.querySelector(`.popup-button`)

menuButton.addEventListener(`click`, (evt) => {
  evt.preventDefault()

  menu.classList.toggle(`show`);
  menuButton.classList.toggle(`show`);

})

popupButton.forEach(element => {
  element.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    if (!popup.classList.contains(`show`)) {
      popup.classList.add(`show`);
      popupButton.classList.add(`show`);
    }
  })
});

popupCrossButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (popup.classList.contains(`show`)) {
    popup.classList.remove(`show`);
    popupButton.classList.remove(`show`);
  }
})