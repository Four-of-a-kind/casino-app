import { superArray, slotsData1 } from '../data/slots-data.js';
import { checkResult } from '../common/utils.js';

// bring elements from DOM
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const spinSpan = document.getElementById('spin-span');
// const reel1Image = document.getElementById('reel-one-image');
// const reel2Image = document.getElementById('reel-two-image');
// const reel3Image = document.getElementById('reel-three-image');
const spinButton = document.getElementById('spin-button');
const resultsButtonDiv = document.getElementById('results-button-div');
const resultDescription = document.getElementById('result-description');
const newReel = document.getElementById('render-reel');

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

superArray.forEach((array) => {
        
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    
    let reel1 = generateRandom(array);
    let reel2 = generateRandom(array);
    let reel3 = generateRandom(array);

    img1.id = 'imageOne';
    img2.id = 'imageTwo';
    img3.id = 'imageThree';

    
    img1.src = reel1.image;
    img2.src = reel2.image;
    img3.src = reel3.image;

    li.append(img1, img2, img3);
    ul.appendChild(li);
    newReel.appendChild(ul);
    
    console.log(newReel, 'hey');

});

spinButton.addEventListener('click', () => {
    
    superArray.forEach((array) => {

        let reel1 = generateRandom(array);
        let reel2 = generateRandom(array);
        let reel3 = generateRandom(array);
        let reel4 = generateRandom(array);
        let reel5 = generateRandom(array);
        let reel6 = generateRandom(array);
        let reel7 = generateRandom(array);
        let reel8 = generateRandom(array);
        let reel9 = generateRandom(array);
        let reel10 = generateRandom(array);


        let images = document.querySelectorAll('img');
        
        // const img1 = document.getElementById('imageOne');
        // const img2 = document.getElementById('imageTwo');
        // const img3 = document.getElementById('imageThree');

        images[0].src = reel1.image;
        images[1].src = reel2.image;
        images[2].src = reel3.image;
        images[3].src = reel4.image;
        images[4].src = reel5.image;
        images[5].src = reel6.image;
        images[6].src = reel7.image;
        images[7].src = reel8.image;
        images[8].src = reel9.image;
        images[9].src = reel10.image;

    
        // img1.src = reel1.image;
        // img2.src = reel2.image;
        // img3.src = reel3.image;
        
    });
    
    

    user.wallet = user.wallet - 5;
    
    


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
