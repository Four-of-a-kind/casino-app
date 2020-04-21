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


spinButton.addEventListener('click', () => {
    // uses generate random function to set reel
    let reel1 = generateRandom(slotsData);
    let reel2 = generateRandom(slotsData);

    user.wallet = user.wallet - 5;

    reel1Image.src = reel1.image;
    reel2Image.src = reel2.image;
    //check results/compare reel1 and reel2, if equal update view
    const result = checkResult(reel1, reel2);
    if (result === true) {
        user.wallet += reel1.value;

    }
    //decrease spin counter
    spinCounter--;
    //decrease spin and update view
    spinSpan.textContent = spinCounter;
    //update userprofile view
    loadUserProfile(user);
    if (spinCounter === 0) {
        //update player stats before sending to local storage
        const stringifyUser = JSON.stringify(user);
        localStorage.setItem('USER', stringifyUser);
        window.location = '../results/';

    } 
    
});











// will be placed in event listener function
function checkResult(reel1, reel2) {
    if (reel1.id === reel2.id) {
        return true;
    } else {
        return false;
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
