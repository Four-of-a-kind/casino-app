
// grab html elements
const usernameInput = document.getElementById('username-input');
const submitButton = document.getElementById('submit-button');




// button registers user info, adds to local storage and redirects to slots page
submitButton.addEventListener('click', () => {
    if (!usernameInput.value) {
        alert('Enter User Name!');
    } else {
        const user = makeUser(usernameInput);
        const stringifyUser = JSON.stringify(user);
        localStorage.setItem('USER', stringifyUser);
        location.href = './slots/';
    }
});


// create user object with new name from username input and default wallet
function makeUser(usernameInput) {
    const username = usernameInput.value;
    const UserObject = {
        name: username,
        wallet: 50,
    };

    return UserObject;

}



