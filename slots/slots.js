import { slotsData } from '../data/slots-data.js';
import { checkResult } from '../common/utils.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
const reel1Image = document.getElementById('reel-one-image');
const reel2Image = document.getElementById('reel-two-image');
const reel3Image = document.getElementById('reel-three-image');
const spinButton = document.getElementById('spin-button');
const resultsButtonDiv = document.getElementById('results-button-div');
const resultDescription = document.getElementById('result-description');

let allTimeArray = JSON.parse(localStorage.getItem('LEADERBOARD'));

const user = JSON.parse(localStorage.getItem('USER'));

// intialize spins
let spinCounter = 5;
spinSpan.textContent = spinCounter;

loadUserProfile(user);


spinButton.addEventListener('click', () => {
    // uses generate random function to set reel
    let reel1 = generateRandom(slotsData);
    let reel2 = generateRandom(slotsData);
    let reel3 = generateRandom(slotsData);

    user.wallet = user.wallet - 5;

    reel1Image.src = reel1.image;
    reel2Image.src = reel2.image;
    reel3Image.src = reel3.image;

    //check results/compare reel1 and reel2, if equal update view
    const result = checkResult(reel1, reel2, reel3);
    if (result === true) {
        user.wallet += reel1.value;

        resultDescription.textContent = `You win $${reel1.value}`;
    } else {
        resultDescription.textContent = `You lose`;
    }
    //decrease spin counter
    spinCounter--;
    //decrease spin and update view
    spinSpan.textContent = spinCounter;

    //update userprofile view
    loadUserProfile(user);

    if (spinCounter === 0 || user.wallet < 5) {
        //update player stats before sending to local storage
        const stringifyUser = JSON.stringify(user);
        localStorage.setItem('USER', stringifyUser);
        // here we'll add user item to all-time sessions
        // allTimeArray is empty, create empty index
        if(!allTimeArray) {
            allTimeArray = [];
        }

        // if it does exist, push user object into the array
        allTimeArray.push(user);
        
        const stringifyallTimeArray = JSON.stringify(allTimeArray);
        localStorage.setItem('LEADERBOARD', stringifyallTimeArray);

        if (spinCounter === 0){
            resultDescription.textContent = 'You are out of spins';
        } else {
            resultDescription.textContent = 'Out of money! You are too broke to play';
        }

        spinButton.disabled = true;
        makeResultsButton();
        // window.location = '../results/';
    } 
    
});



// results button
function makeResultsButton(){
    const resultsButton = document.createElement('button');
    resultsButton.textContent = 'Go to results';

    resultsButton.addEventListener('click', () => {
        window.location = '../results/';

    });
    resultsButtonDiv.appendChild(resultsButton);
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
