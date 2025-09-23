'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
console.log('tabs: ', tabs);
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', function (e) {
  console.log(
    `\n//#85 How to get coordinates of the web element that we want to scroll to`
  );
  const s1Coord = section1.getBoundingClientRect();
  console.log('section--1: ', s1Coord);
  console.log('targetted element: ', e.target.getBoundingClientRect());

  console.log('current scroll(X/Y): ', window.pageXOffset, window.pageYOffset);

  console.log(
    'width and height of current viewport: ',
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

  // window.scrollTo(
  //   s1Coord.left + window.pageXOffset,
  //   s1Coord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1Coord.left + window.pageXOffset,
  //   top: s1Coord.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  console.log(`\n//#85.2 smooth scroll`);
  section1.scrollIntoView({ behavior: 'smooth' });
});

console.log(`\n/#86 Event delegation: Page navigation`);

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('e.target: ', e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log('id: ', id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

console.log(`\n//#87 DOM Traversing`);
console.log(`\n//#87.2 Going downwards`);
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';

console.log(`\n//#87.3 Going upwards`);
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('h1'));

console.log(`\n//#87.3 Going sideways: siblings`);

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log('clicked: ', clicked);

  //Gaurd class
  if (!clicked) return;

  // remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate table
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  // console.log(`this: , ${this} current target: ${e.currentTarget}`);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree buil!', e);
});

window.addEventListener('load', function (e) {
  console.log('page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

/*[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});*/

/*// #80 creating element in the DOM by JS
const message = document.createElement('div');
message.classList.add('cookie-message')
message.innerHTML = 'We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

// #81 deleting the element from the DOM by JS
document.querySelector('.btn--close-cookie')
.addEventListener('click', function(){
  message.remove();
})

// #82 adding/manipulating inline styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(message.style.color);

// #82.2 Manipulating pre defined css file style 
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// #83 Attributes

const logo = document.querySelector('.nav__logo')
console.log(logo);

console.log(logo.alt);
logo.alt = 'Beautiful minimalist logo'
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

console.log(logo.designer);  // undefined
console.log(logo.getAttribute('designer'));



console.log(logo.className);
console.log(logo.id);


// #83.2 Data Attributes
console.log(logo.dataset.versionNumber);

// #84. Adding/Removing/Toggling/Contains classes to the web element
logo.classList.add('c', 'j');
console.log(logo.classList.contains('c', 'j'));  // contains() not includes() in the context of classList()
logo.classList.toggle('c');
logo.classList.remove('c', 'j')
// Don't use, this will override
// logo.className = 'jonas' */

/* const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading: D');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); */
