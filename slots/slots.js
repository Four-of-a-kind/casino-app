import { slotsData1 } from '../data/slots-data.js';
import { checkResult } from '../common/utils.js';
import { generateSuperArray } from './generateSuperArray.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
const reel1Images = document.getElementById('reel-one-image');
const reel2Images = document.getElementById('reel-two-image');
const reel3Images = document.getElementById('reel-three-image');
const spinButton = document.getElementById('spin-button');
const resultsButtonDiv = document.getElementById('results-button-div');
const resultDescription = document.getElementById('result-description');
const newReel = document.getElementById('render-reel');
const reelZone = document.getElementById('reel-zone');

let allTimeArray = JSON.parse(localStorage.getItem('LEADERBOARD'));

const user = JSON.parse(localStorage.getItem('USER'));

// intialize spins
let spinCounter = 5;
spinSpan.textContent = spinCounter;

loadUserProfile(user);

// uses generate random function to set reel
// let reel1 = generateRandom(slotsData1);
// let reel2 = generateRandom(slotsData1);
// let reel3 = generateRandom(slotsData1);

// reel1Image.src = reel1.image;
// reel2Image.src = reel2.image;
// reel3Image.src = reel3.image;

// make superArray from slotsData
const superArray = generateSuperArray(slotsData1)


// this for loop creates three list items from superarray on page load
for (let i = 0; i < 3; i++) {

    // create three list items with images of each object in the superarray
    const imgli = document.createElement('li');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    img1.src = superArray[i][0].image;
    img2.src = superArray[i][1].image;
    img3.src = superArray[i][2].image;

    reelZone.append(imgli);
    imgli.append(img1, img2, img3);
}


spinButton.addEventListener('click', () => {
    

    
const result = checkResult(topRow1, topRow2, topRow3);
if (result === true) {
    user.wallet += topRow1.value;

    resultDescription.textContent = `You win $${topRow1.value}`;
} else {
    resultDescription.textContent = `You lose`;
}
    

    user.wallet = user.wallet - 5;
    
    


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
        if (!allTimeArray) {
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
export function generateRandom(array) {
    const indexNumber = Math.floor(Math.random() * 3);
    const randomObject = array[indexNumber];

    return randomObject;
}

// load user profile function
function loadUserProfile(user){
    userNameSpan.textContent = user.name;
    walletSpan.textContent = user.wallet;  
}
