
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const resultSpan = document.getElementById('result-span');
const resetButton = document.getElementById('reset-button');
const leaderboardList = document.getElementById('leaderboard-ul')

let allTimeArray = JSON.parse(localStorage.getItem('LEADERBOARD'));
const user = JSON.parse(localStorage.getItem('USER'));


loadUserProfile(user);

console.log(allTimeArray);

// for(let i = 0; i < allTimeArray.length; i++) {
//     const allTimeArrayScore = allTimeArray[i];
//     const list = document.createElement('li');
//     const name = document.createElement('h1');
//     const score = document.createElement('h1');

//     name.textContent = allTimeArrayScore

// }

allTimeArray.forEach((userScore) => {
    const list = document.createElement('li');
    const name = document.createElement('h1');
    const score = document.createElement('h1');

    name.textContent = userScore.name;
    score.textContent = userScore.wallet;

    list.append(name, score);
    leaderboardList.append(list);
});



const stringyAllTimeArray = JSON.stringify(allTimeArray);
localStorage.setItem('LEADERBOARD', stringyAllTimeArray);
    







function loadUserProfile(user){
    userNameSpan.textContent = user.name;
    walletSpan.textContent = user.wallet;  
}