'use strict';

// Boton crear tarjeta
const createButton = document.querySelector('.js_create_button');
// Boton Twitter
const btnTwitter = document.querySelector('.js_btnTwitter');

let dataCard = [];

//Boton para recoger donde aparece el fetch en html
const twitterFetch = document.querySelector('.js_twitterFetch');

function handleCreateCard(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      dataCard = data;

      if (shareCollapse.classList.contains('js_collapsed')) {
        shareCollapse.classList.remove('js_collapsed');
        createButton.style.backgroundColor = 'gray';
      }
      if (data.cardURL !== undefined) {
        twitterFetch.innerHTML = data.cardURL;
        twitterFetch.href = data.cardURL;
        btnTwitter.classList.remove('js_collapsed');
        btnTwitter.addEventListener('click', handleTweet);
        twitterFetch.previousElementSibling.innerHTML =
          'La tarjeta ha sido creada:';
      } else {
        twitterFetch.innerHTML =
          'Por favor, complete todos los campos e inténtelo de nuevo';
        twitterFetch.href = '';
        twitterFetch.previousElementSibling.innerHTML =
          'No se ha podido crear la tarjeta';
      }
    });
}
createButton.addEventListener('click', handleCreateCard);

// Function Twitter button

function handleTweet() {
  btnTwitter.href = `https://twitter.com/intent/tweet?text=${dataCard.cardURL}`;
}
