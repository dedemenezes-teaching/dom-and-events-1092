// CSS SELECTORS
// .btn {}
// #btn {}
// h1 {}

// SELECTING AN ELEMENT
// document.querySelector(CSS_SELECTOR)
const list = document.querySelector('#players');
console.log(list);

// APPENDING AN ELEMENT
list.insertAdjacentHTML('beforeend', '<li>Richarlison</li>');
list.insertAdjacentHTML('beforeend', '<li>Harry Kane</li>');

// SELECT ELEMENT FROM A SUBSET
const starWarsList = document.querySelector('#star-wars');
const redElement = starWarsList.querySelector('.red');
console.log(redElement.innerText);

// SELECTING MULTIPLE ELEMENTS
const winners = document.querySelectorAll('#fifa-wins li');
console.log(winners);
winners.forEach((winner) => {
  console.log(winner.innerText);
});

// LIVECODE APPENDING LIST-ITEM TO FIFA WINS LIST
const winnersList = document.querySelector('#fifa-wins');
winnersList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');

// ADDING STYLE TO AN ELEMENT
winnersList.style.display = 'none';
winnersList.style.display = '';
list.style.backgroundColor = 'red';

// ADD/REMOVE CLASS TO AN ELEMENT
winnersList.classList.add('text-red');
winnersList.classList.add('card');
winnersList.classList.remove('text-red');
winnersList.classList.toggle('card');
winnersList.classList.toggle('text-red');

// READ/WRITE INPUT VALUE
const input = document.querySelector('#email');
console.log(input.value);
input.value = 'seb@lewagon.org';

// EXTRACT TEXT/HTML
const link = document.querySelector('#home');
console.log(link.innerText);
console.log(link.innerHTML);

// UPDATE TEXT/HTML
// link.innerText = 'Morning <em>1092!</em>'; //=> It will add the html tag as text not as tag!
link.innerText = 'Morning 1092!';
link.innerHTML = 'Morning <strong>1092!</strong>';

// DATASET
// add data-attribute to your HTML and access it in your JS using .dataset
const player = document.querySelector('#player');
console.log(player.dataset);
console.log(player.dataset.playerId);
console.log(player.dataset.email);


// EVENT
// element.addEventListener('eventType', (event) => {
    // element manipulation
// })

// 1. SELECT THE ELEMENT YOU WANT TO LISTEN ON
const image = document.querySelector('#romain');
console.log(image);

// 2. ADD THE EVENT LISTENER
// imgTag.addEventListener('click', (event) => {
//   console.log(event);
//   console.log(event.currentTarget);
//   event.currentTarget.classList.toggle('img-circle');
// });

const images = document.querySelectorAll('img');
// debugger
console.log(images);

images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('img-circle');
  });
});
