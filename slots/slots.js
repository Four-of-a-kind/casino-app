import { slotsData1 } from '../data/slots-data.js';
import { generateSuperArray } from './generateSuperArray.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
const spinButton = document.getElementById('spin-button');
const resultDescription = document.getElementById('result-description');
const reelZone = document.getElementById('reel-zone');
const spinMessage = document.getElementById('spin-message');
const topRowWinLine = document.getElementById('top-row-win-line');
const middleRowWinLine = document.getElementById('middle-row-win-line');
const bottomRowWinLine = document.getElementById('bottom-row-win-line');
const diagonalRowWinLineOne = document.getElementById('diagonal-1-row-win-line');
const diagonalRowWinLineTwo = document.getElementById('diagonal-2-row-win-line');
const resultsButton = document.getElementById('results-button');
const winSound = document.getElementById('win-sound');
const spinStart = document.getElementById('spin-start-sound');
const spinningSound = document.getElementById('spinning');

const delay = 2900;
const longerDelay = 3300;

let allTimeArray = JSON.parse(localStorage.getItem('LEADERBOARD'));

const user = JSON.parse(localStorage.getItem('USER'));

// intialize spins
let spinCounter = 25;
spinSpan.textContent = spinCounter;

resultDescription.textContent = '';

loadUserProfile(user);


// make superArray from slotsData
const superArray = generateSuperArray(slotsData1);

// this for loop creates three list items from superarray on page load
function makeImages(_superArray) {
    for (let i = 0; i < 3; i++) {

        // create three list items with images of each object in the superarray
        const imgli = document.createElement('li');
             
        for (let j = 0; j < 10; j++) {
            const someImg = document.createElement('img');
            someImg.id = `${i}img${j + 1}`;
            someImg.src = _superArray[i][j].image;
            someImg.classList.add('slotimg');
            imgli.append(someImg);
        }

        imgli.id = 'imgli';
        reelZone.classList.add('imgli');
        reelZone.append(imgli);       
    }
}

makeImages(superArray);

const slotImgs = document.querySelectorAll('.slotimg');
spinButton.addEventListener('click', () => {
    // on click generate new superArray
    // one function that takes in array and changes images
    // another function that takes in three arrays and places them into superarray
    
   
    resultDescription.classList.add('hidden');
    resultDescription.textContent = '';

    if (reelZone.classList.contains('imgli')) {
        reelZone.classList.remove('imgli');
        return reelZone;
    }
    reelZone.classList.add('imgli');

    topRowWinLine.classList.add('hidden');
    middleRowWinLine.classList.add('hidden');
    bottomRowWinLine.classList.add('hidden');
    diagonalRowWinLineOne.classList.add('hidden');
    diagonalRowWinLineTwo.classList.add('hidden');
    

    const newSuperArray = generateSuperArray(slotsData1);

    slotImgs.forEach(thisImg => {
        const numbersArray = thisImg.id.split('img');
        const row = Number(numbersArray[0]);
        const col = Number(numbersArray[1]) - 1;
        thisImg.src = newSuperArray[row][col].image;
    
    });

//everything works. No further action required. 
    
    // play spin start
    playSound(spinningSound);

    user.wallet = user.wallet - 5;
    walletSpan.textContent = user.wallet;

    const resultValue = checkResult(newSuperArray);

    if (resultValue === 0) {
        resultDescription.classList.remove('hidden');
        resultDescription.style.color = 'red';
        setTimeout(() => {resultDescription.textContent = 'You Lose'; }, longerDelay);
        setTimeout(() => {playSound(spinStart); }, longerDelay);

    } else {
        resultDescription.classList.remove('hidden');
        resultDescription.style.color = 'lime';
        setTimeout(() => {resultDescription.textContent = `You win $${resultValue}`; }, longerDelay);
    
        user.wallet += resultValue;
        
        setTimeout(() => {playSound(winSound); }, delay);

        
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
        if (!allTimeArray) {
            allTimeArray = [];
        }

        // if it does exist, push user object into the array
        allTimeArray.push(user);
        
        const stringifyallTimeArray = JSON.stringify(allTimeArray);
        localStorage.setItem('LEADERBOARD', stringifyallTimeArray);

        if (spinCounter === 0){
            spinMessage.textContent = 'You are out of spins';
        } else {
            resultDescription.textContent = 'Out of money!';
        }

        spinButton.disabled = true;
        resultsButton.classList.toggle('hidden');
    }   
});

resultsButton.addEventListener('click', () => {
    location.href = '../results/';
});

// generates a random object from the slots data
export function generateRandom(array) {
    const indexNumber = Math.floor(Math.random() * 17);
    const randomObject = array[indexNumber];

    return randomObject;
}

// load user profile function
function loadUserProfile(user){
    setTimeout(() => {walletSpan.textContent = user.wallet; }, delay);
    userNameSpan.textContent = user.name;
}

// playSound function plays sound
function playSound(x) {
    x.play();
}


function checkResult(superArray) {
    let totalWinValue = 0;

    // here's a way to get all the values out and name them (called array destructuring)
    const [
        [topLeft, topMiddle, topRight],
        [middleLeft, middle, middleRight],
        [bottomLeft, bottomMiddle, bottomRight]
    ] = superArray;

    // horizontal rows
    if (superArray[0][0].id === superArray[1][0].id && superArray[0][0].id === superArray[2][0].id){
        totalWinValue += superArray[0][0].value;
        
        setTimeout(() => {topRowWinLine.classList.remove('hidden'); }, delay);
    }  

    if (superArray[0][1].id === superArray[1][1].id && superArray[0][1].id === superArray[2][1].id){
        totalWinValue += superArray[0][1].value;

        setTimeout(() => {middleRowWinLine.classList.remove('hidden'); }, delay);
    }

    if (superArray[0][2].id === superArray[1][2].id && superArray[0][2].id === superArray[2][2].id){
        totalWinValue += superArray[0][2].value;
 
        setTimeout(() => {bottomRowWinLine.classList.remove('hidden'); }, delay);
    }

    // diagonals
    if (superArray[0][0].id === superArray[1][1].id && superArray[0][0].id === superArray[2][2].id){
        totalWinValue += superArray[2][2].value;
        
        setTimeout(() => {diagonalRowWinLineOne.classList.remove('hidden'); }, delay);
    }

    if (superArray[0][2].id === superArray[1][1].id && superArray[0][2].id === superArray[2][0].id){
        totalWinValue += superArray[2][0].value;

        setTimeout(() => {diagonalRowWinLineTwo.classList.remove('hidden'); }, delay);
    }

    return totalWinValue;
}