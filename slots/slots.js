import { slotsData1 } from '../data/slots-data.js';
import { checkResult } from '../common/utils.js';
import { generateSuperArray } from './generateSuperArray.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
const spinButton = document.getElementById('spin-button');
const resultsButtonDiv = document.getElementById('results-button-div');
const resultDescription = document.getElementById('result-description');
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
const superArray = generateSuperArray(slotsData1);


// this for loop creates three list items from superarray on page load
function makeImages(_superArray) {
    for (let i = 0; i < 3; i++) {

        // create three list items with images of each object in the superarray
        const imgli = document.createElement('li');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        const img3 = document.createElement('img');
        img1.src = _superArray[i][0].image;
        img2.src = _superArray[i][1].image;
        img3.src = _superArray[i][2].image;

        reelZone.append(imgli);
        imgli.append(img1, img2, img3);
        imgli.id = 'imgli';
        img1.id = JSON.stringify(i) + 'img1';
        img2.id = JSON.stringify(i) + 'img2';
        img3.id = JSON.stringify(i) + 'img3';


    }
}
makeImages(superArray);

const img1 = document.getElementById('0img1');
const img2 = document.getElementById('0img2');
const img3 = document.getElementById('0img3');
const img4 = document.getElementById('1img1');
const img5 = document.getElementById('1img2');
const img6 = document.getElementById('1img3');
const img7 = document.getElementById('2img1');
const img8 = document.getElementById('2img2');
const img9 = document.getElementById('2img3');

spinButton.addEventListener('click', () => {
// on click generate new superArray
// one function that takes in array and changes images
// another function that takes in three arrays and places them into superarray

    const newSuperArray = generateSuperArray(slotsData1);

    img1.src = newSuperArray[0][0].image;
    img2.src = newSuperArray[0][1].image;
    img3.src = newSuperArray[0][2].image;
    img4.src = newSuperArray[1][0].image;
    img5.src = newSuperArray[1][1].image;
    img6.src = newSuperArray[1][2].image;
    img7.src = newSuperArray[2][0].image;
    img8.src = newSuperArray[2][1].image;
    img9.src = newSuperArray[2][2].image;
    

    // const result = checkResult(newSuperArray);
    // if (result === true) {
    //     user.wallet += superArray[0][0].value;

    //     resultDescription.textContent = `You win $${superArray[0][0].value}`;
    // } else {
    //     resultDescription.textContent = `You lose`;
    // }
    // for (let i = 0; i < 3; i++) {

    // create three list items with images of each object in the superarray

    console.log(newSuperArray);


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
