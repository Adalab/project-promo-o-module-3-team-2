'use strict';

// Collapsable Headers
const designHeader = document.querySelector('.js_designHeader');
const formHeader = document.querySelector('.js_formHeader');
const shareHeader = document.querySelector('.js_shareHeader');

//Recogemos el div del color
const cardDecoration = document.querySelector('.card__decoration');
const borderIcons = document.querySelectorAll('.js_icon_border');
const imageIcons = document.querySelectorAll('.js_icon_image');
const previeNameColor = document.querySelector('.js_previeNameColor');

//Para el collapse de Twitter xD
const shareCollapse = document.querySelector('.js_shareCollapse');

function handleClickHeader(event) {
  event.currentTarget.nextElementSibling.classList.toggle('js_collapsed');
  event.currentTarget.lastElementChild.classList.toggle('js_arrowRotate');
}

designHeader.addEventListener('click', handleClickHeader);
formHeader.addEventListener('click', handleClickHeader);
shareHeader.addEventListener('click', handleClickHeader);

// Form
const allInputs = document.querySelectorAll('.js_allInputs');

const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

// console.log(data);

for (const eachInput of allInputs) {
  eachInput.addEventListener('keyup', handleWriteInput);
}

function handleWriteInput(event) {
  const userInput = event.currentTarget.id;
  const userValue = event.currentTarget.value;

  if (userInput === 'name') {
    data.name = userValue;
  } else if (userInput === 'job') {
    data.job = userValue;
  } else if (userInput === 'email') {
    data.email = userValue;
  } else if (userInput === 'phone') {
    data.phone = userValue;
  } else if (userInput === 'linkedin') {
    data.linkedin = userValue;
  } else if (userInput === 'github') {
    data.github = userValue;
  } else if (userInput === 'photo') {
    data.photo = userValue;
  }
  renderPreview();

  setlocalStorage();
}

const previewName = document.querySelector('.js_previewName');
const previewJob = document.querySelector('.js_previewJob');
const previewEmail = document.querySelector('.js_previewEmail');
const previewPhone = document.querySelector('.js_previewPhone');
const previewLinkedin = document.querySelector('.js_previewLinkedin');
const previewGithub = document.querySelector('.js_previewGithub');

function renderPreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }

  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }

  if (data.email === '') {
    previewEmail.href = '';
  } else {
    previewEmail.href = `mailto:${data.email}`;
  }

  if (data.phone === '') {
    previewPhone.href = '';
  } else {
    previewPhone.href = data.phone;
  }

  if (data.linkedin === '') {
    previewLinkedin.href = '';
  } else {
    previewLinkedin.href = data.linkedin;
  }

  if (data.github === '') {
    previewGithub.href = '';
  } else {
    previewGithub.href = data.github;
  }
}

//Paleta de colores

//Para lso iconos
const allPalettes = document.querySelectorAll('.js_palette');

for (const eachPalette of allPalettes) {
  eachPalette.addEventListener('click', handleClickPalette);
}

function handleClickPalette(ev) {
  const paletteValue = parseInt(ev.currentTarget.value);

  //Borro todas las clases porque no se cual tenia
  limpiaClases();
  data.palette = paletteValue;

  renderPalette();
  setlocalStorage();
}

function renderPalette() {
  if (data.palette === 1) {
    cardDecoration.classList.add('card__decoration__palette1');
    modificaNameAndLastName('namePreview__pallete1');
    modificaSocialIcons('social__icon__palette1');
    modificaIconsImages('icon_image__pallete1');
  } else if (data.palette === 2) {
    cardDecoration.classList.add('card__decoration__palette2');
    modificaNameAndLastName('namePreview__pallete2');
    modificaSocialIcons('social__icon__palette2');
    modificaIconsImages('icon_image__pallete2');
  } else if (data.palette === 3) {
    cardDecoration.classList.add('card__decoration__palette3');
    modificaNameAndLastName('namePreview__pallete3');
    modificaSocialIcons('social__icon__palette3');
    modificaIconsImages('icon_image__pallete3');
  }
}

//Clases que le dan color al div, es sólo un elemento
function limpiaClases() {
  //Para la barrita
  cardDecoration.classList.remove('card__decoration__palette1');
  cardDecoration.classList.remove('card__decoration__palette2');
  cardDecoration.classList.remove('card__decoration__palette3');

  //Para eliminar las clases del nombrePreview
  previeNameColor.classList.remove('namePreview__pallete1');
  previeNameColor.classList.remove('namePreview__pallete2');
  previeNameColor.classList.remove('namePreview__pallete3');

  //Borde de los iconos
  for (const icon of borderIcons) {
    icon.classList.remove('social__icon__palette1');
    icon.classList.remove('social__icon__palette2');
    icon.classList.remove('social__icon__palette3');
  }
  //Las imagenes
  for (const image of imageIcons) {
    image.classList.remove('icon_image__pallete1');
    image.classList.remove('icon_image__pallete2');
    image.classList.remove('icon_image__pallete3');
  }
}

function modificaSocialIcons(clase) {
  //Recorremos todos los li para ponerles la clase
  for (const icon of borderIcons) {
    icon.classList.add(clase);
  }
}

//Funcion para los colores de los iconos

function modificaIconsImages(clase) {
  for (const image of imageIcons) {
    image.classList.add(clase);
  }
}

//Funcion para sacar el boton de twitter

const createBtn = document.querySelector('.js_create_button');
const cardURL = document.querySelector('.js_cardURL');

function modificaNameAndLastName(clase) {
  previeNameColor.classList.add(clase);
}

//Reset

const buttonReset = document.querySelector('.js_reset');

function handleResetForm() {
  // Set default palette again
  limpiaClases();
  const defaultPalette = document.querySelector('.js_palette_1');
  if (defaultPalette.checked === false) {
    defaultPalette.checked = true;
  }

  //Inicializar el objeto data
  data.palette = 1;
  data.name = '';
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  data.photo = '';

  // Reset card preview
  data.palette = 1;
  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';
  previewEmail.href = '';
  previewPhone.href = '';
  previewLinkedin.href = '';
  previewGithub.href = '';
  createBtn.style.backgroundColor = '#e17334';

  profileImage.style.backgroundImage = `url('./assets/images/jasonderulo_pic.png')`;
  profilePreview.style.backgroundImage = '';
  for (const eachInput of allInputs) {
    eachInput.value = '';
  }
}

buttonReset.addEventListener('click', handleResetForm);
