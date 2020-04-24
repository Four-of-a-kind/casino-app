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
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        const img3 = document.createElement('img');
        const img4 = document.createElement('img');
        const img5 = document.createElement('img');
        const img6 = document.createElement('img');
        const img7 = document.createElement('img');
        const img8 = document.createElement('img');
        const img9 = document.createElement('img');
        const img10 = document.createElement('img');

       
        //img src will be equal to 10 element images created above
        img1.src = _superArray[i][0].image;
        img2.src = _superArray[i][1].image;
        img3.src = _superArray[i][2].image;
        img4.src = _superArray[i][3].image;
        img5.src = _superArray[i][4].image;
        img6.src = _superArray[i][5].image;
        img7.src = _superArray[i][6].image;
        img8.src = _superArray[i][7].image;
        img9.src = _superArray[i][8].image;
        img10.src = _superArray[i][9].image;


        imgli.id = 'imgli';
        reelZone.classList.add('imgli');
        imgli.append(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10);
        reelZone.append(imgli);
        
        
    
        img1.id = JSON.stringify(i) + 'img1';
        img2.id = JSON.stringify(i) + 'img2';
        img3.id = JSON.stringify(i) + 'img3';
        img4.id = JSON.stringify(i) + 'img4';
        img5.id = JSON.stringify(i) + 'img5';
        img6.id = JSON.stringify(i) + 'img6';
        img7.id = JSON.stringify(i) + 'img7';
        img8.id = JSON.stringify(i) + 'img8';
        img9.id = JSON.stringify(i) + 'img9';
        img10.id = JSON.stringify(i) + 'img10';
    }
}

makeImages(superArray);

const img1 = document.getElementById('0img1');
const img2 = document.getElementById('0img2');
const img3 = document.getElementById('0img3');
const img4 = document.getElementById('0img4');
const img5 = document.getElementById('0img5');
const img6 = document.getElementById('0img6');
const img7 = document.getElementById('0img7');
const img8 = document.getElementById('0img8');
const img9 = document.getElementById('0img9');
const img10 = document.getElementById('0img10');

const img11 = document.getElementById('1img1');
const img12 = document.getElementById('1img2');
const img13 = document.getElementById('1img3');
const img14 = document.getElementById('1img4');
const img15 = document.getElementById('1img5');
const img16 = document.getElementById('1img6');
const img17 = document.getElementById('1img7');
const img18 = document.getElementById('1img8');
const img19 = document.getElementById('1img9');
const img20 = document.getElementById('1img10');

const img21 = document.getElementById('2img1');
const img22 = document.getElementById('2img2');
const img23 = document.getElementById('2img3');
const img24 = document.getElementById('2img4');
const img25 = document.getElementById('2img5');
const img26 = document.getElementById('2img6');
const img27 = document.getElementById('2img7');
const img28 = document.getElementById('2img8');
const img29 = document.getElementById('2img9');
const img30 = document.getElementById('2img10');


img1.classList.add('slotimg');
img2.classList.add('slotimg');
img3.classList.add('slotimg');
img4.classList.add('slotimg');
img5.classList.add('slotimg');
img6.classList.add('slotimg');
img7.classList.add('slotimg');
img8.classList.add('slotimg');
img9.classList.add('slotimg');
img10.classList.add('slotimg');
img11.classList.add('slotimg');
img12.classList.add('slotimg');
img13.classList.add('slotimg');
img14.classList.add('slotimg');
img15.classList.add('slotimg');
img16.classList.add('slotimg');
img17.classList.add('slotimg');
img18.classList.add('slotimg');
img19.classList.add('slotimg');
img20.classList.add('slotimg');
img21.classList.add('slotimg');
img22.classList.add('slotimg');
img23.classList.add('slotimg');
img24.classList.add('slotimg');
img25.classList.add('slotimg');
img26.classList.add('slotimg');
img27.classList.add('slotimg');
img28.classList.add('slotimg');
img29.classList.add('slotimg');
img30.classList.add('slotimg');



//getting 30 elements by id and putting 10 objects in 3 arrays for our "spinning reel".


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

    img1.src = newSuperArray[0][0].image;
    img2.src = newSuperArray[0][1].image;
    img3.src = newSuperArray[0][2].image;
    img4.src = newSuperArray[0][3].image;
    img5.src = newSuperArray[0][4].image;
    img6.src = newSuperArray[0][5].image;
    img7.src = newSuperArray[0][6].image;
    img8.src = newSuperArray[0][7].image;
    img9.src = newSuperArray[0][8].image;
    img10.src = newSuperArray[0][9].image;

    img11.src = newSuperArray[1][0].image;
    img12.src = newSuperArray[1][1].image;
    img13.src = newSuperArray[1][2].image;
    img14.src = newSuperArray[1][3].image;
    img15.src = newSuperArray[1][4].image;
    img16.src = newSuperArray[1][5].image;
    img17.src = newSuperArray[1][6].image;
    img18.src = newSuperArray[1][7].image;
    img19.src = newSuperArray[1][8].image;
    img20.src = newSuperArray[1][9].image;

    img21.src = newSuperArray[2][0].image;
    img22.src = newSuperArray[2][1].image;
    img23.src = newSuperArray[2][2].image;
    img24.src = newSuperArray[2][3].image;
    img25.src = newSuperArray[2][4].image;
    img26.src = newSuperArray[2][5].image;
    img27.src = newSuperArray[2][6].image;
    img28.src = newSuperArray[2][7].image;
    img29.src = newSuperArray[2][8].image;
    img30.src = newSuperArray[2][9].image;
    
//everything works. No further action required. 
    
    // play spin start
    playSound(spinningSound);
    const resultValue = checkResult(newSuperArray);

    if (resultValue === 0) {
        resultDescription.classList.remove('hidden');
        resultDescription.style.color = 'red';
        setTimeout(function() {resultDescription.textContent = 'You Lose'; }, 3300);
        setTimeout(function() {playSound(spinStart); }, 3300);

    } else {
        resultDescription.classList.remove('hidden');
        resultDescription.style.color = 'lime';
        setTimeout(function() {resultDescription.textContent = `You win $${resultValue}`; }, 3300);

        
        user.wallet += resultValue;
        setTimeout(function() {playSound(winSound); }, 2900);

        
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
    userNameSpan.textContent = user.name;
    walletSpan.textContent = user.wallet;  
}

// playSound function plays sound
function playSound(x) {
    x.play();
}


function checkResult(superArray) {
    let totalWinValue = 0;

    // horizontal rows
    if (superArray[0][0].id === superArray[1][0].id && superArray[0][0].id === superArray[2][0].id){
        totalWinValue += superArray[0][0].value;
        
        setTimeout(function() {topRowWinLine.classList.remove('hidden'); }, 2900);
    }   
    if (superArray[0][1].id === superArray[1][1].id && superArray[0][1].id === superArray[2][1].id){
        totalWinValue += superArray[0][1].value;

        
        setTimeout(function() {middleRowWinLine.classList.remove('hidden'); }, 2900);

    }
    if (superArray[0][2].id === superArray[1][2].id && superArray[0][2].id === superArray[2][2].id){
        totalWinValue += superArray[0][2].value;

        
        setTimeout(function() {bottomRowWinLine.classList.remove('hidden'); }, 2900);
    }
    // diagonals
    if (superArray[0][0].id === superArray[1][1].id && superArray[0][0].id === superArray[2][2].id){
        totalWinValue += superArray[2][2].value;
        
        setTimeout(function() {diagonalRowWinLineOne.classList.remove('hidden'); }, 2900);

    }

    if (superArray[0][2].id === superArray[1][1].id && superArray[0][2].id === superArray[2][0].id){
        totalWinValue += superArray[2][0].value;

        setTimeout(function() {diagonalRowWinLineTwo.classList.remove('hidden'); }, 2900);

    }

    return totalWinValue;
}