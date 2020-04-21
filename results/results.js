
const userNameSpan = document.getElementById('user-name-span');
const walletSpan = document.getElementById('wallet-span');

const user = JSON.parse(localStorage.getItem('USER'));
loadUserProfile(user);



function loadUserProfile(user){
    userNameSpan.textContent = user.name;
    walletSpan.textContent = user.wallet;  
}