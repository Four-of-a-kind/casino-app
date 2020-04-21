import { slotsData } from '../data/slots-data.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
const reel1Image = document.getElementById('reel-one-image');
const reel2Image = document.getElementById('reel-two-image');
const spinButton = document.getElementById('spin-button');

const user = JSON.parse(localStorage.getItem('USER'));

// intialize spins
let spinCounter = 5;
spinSpan.textContent = spinCounter;

loadUserProfile(user);

// uses generate random function to set reel
let reel1 = generateRandom(slotsData);
let reel2 = generateRandom(slotsData);

// will be placed in event listener function
function checkResult(reel1, reel2) {
    if (reel1.id === reel2.id) {
        return 1;
    } else {
        return 0;
    }
}



// generates a random object from the slots data
function generateRandom(array) {
    const indexNumber = Math.floor(Math.random() * 3);
    const randomObject = array[indexNumber];

    return randomObject;
}

// load user profile function
function loadUserProfile(user){
    userNameSpan.textContent = user.name;
    walletSpan.textContent = user.wallet;  
}
