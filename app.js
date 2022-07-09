//Welcome to app.js!
//This file is used for automatically updating the years in the portfolio, and other such things.

//Opens and closes menu
const menu = document.getElementById('contents');

function openMenu() {
    menu.style.width = '100vw';
}

function closeMenu() {
    menu.style.width = '0';
}

//Updates # of years in "About Me" section

const date = new Date();
const currentYear = date.getFullYear();

const aboutMe = document.getElementById('about-me');
aboutMe.innerHTML = `Hi there! I'm Nazim. I am a full-stack software developer living in the San Francisco Bay Area. I love to code and have been doing so for the past ${currentYear - 2019} years. Currently, I am working at a software company called "Code with Corgis." People at Code with Corgis know me as the one who never gives up, tries different approaches to tackle various problems, and always knows there's room for improvement.`;

//Updates # of years in "Work Experience" section

const blockOne = document.getElementById('years-one');
const blockTwo = document.getElementById('years-two');

blockOne.innerHTML = `2019 - ${currentYear}`;
blockTwo.innerHTML = `${currentYear} - Present`;

//Update year in footer

const footerYear = document.getElementById('footer-year');
footerYear.innerHTML = `©${currentYear}`;
