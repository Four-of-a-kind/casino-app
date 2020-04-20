
// grab html elements
const usernameInput = document.getElementById('username-input');

// create user object with new name from username input and default wallet
function makeUser(usernameInput) {
    const username = usernameInput.value;
    const UserObject = {
        name: username,
        wallet: 50,
    };

    return UserObject;

}

