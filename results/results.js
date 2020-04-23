
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');
const resultSpan = document.getElementById('result-span');
const resultImage = document.getElementById('result-image');
const resetButton = document.getElementById('reset-button');
const leaderboardList = document.getElementById('leaderboard-ul');

let allTimeArray = JSON.parse(localStorage.getItem('LEADERBOARD'));
const user = JSON.parse(localStorage.getItem('USER'));


loadUserProfile(user);

const sortedAllTimeArray = allTimeArray.sort(function(a, b) {
    return b.wallet - a.wallet;
});


sortedAllTimeArray.forEach((userScore) => {
    const list = document.createElement('li');
    const name = document.createElement('h1');
    const score = document.createElement('h1');

    name.textContent = `name: ${userScore.name}`;
    score.textContent = `score: ${userScore.wallet}`;

    list.append(name, score);
    leaderboardList.append(list);
});


const stringyAllTimeArray = JSON.stringify(allTimeArray);
localStorage.setItem('LEADERBOARD', stringyAllTimeArray);

if (user.wallet < 10){
    resultSpan.textContent = 'You won some soap!';
    resultImage.src = '../assets/soap.png';
} if (user.wallet > 9 && user.wallet < 50){
    resultSpan.textContent = 'You won hand sanitizer!';
    resultImage.src = '../assets/hand_sanitizer.png';
}
else {
    resultSpan.textContent = 'You won toilet paper!!!';
    resultImage.src = '../assets/tp.png';
}
    
resetButton.addEventListener('click', () => {
    window.location = '../';
});






function loadUserProfile(user){
    userNameSpan.textContent = user.name;
    walletSpan.textContent = `$${user.wallet}`;  
}