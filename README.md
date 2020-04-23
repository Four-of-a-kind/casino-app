# Project name: Four-of-kind.

# Team member names: Jaime Sanders, Charlie Smith, Jake Pendergraft, Dan Bennington

## This project is a  9*9 slot machine. wins are by rows and diagonals. 

The overall problem domain and how the project solves those problems

## The team created a function to take equal rows and diagonals in three arrays and produce a win or loss with increasing or decreasing money in a user wallet.

Verision 1.1 was setting up a repo with alchemy-bootstrap.
Team then made folders, started with HTML and JS linking for homepage, slots page, and results page was done to start. <br><br>
After homepage HTML and JS linked, team created a 'makeUser' function which takes in a name, adds a wallet value and  would stores it to local storage for the slots.js page when a button was clikced. <br><br>
After the function was created, team added an event listener was added on the homepage to create.  Function and advent listener tested. User sent to local and verified.
Made a static page(added elements and spans) for Slots.html imported the local storage data in the slots.JS<br><br>
Function created to loadProfile from localstorage. <br><br>
Added a data.js array to pull imformation and import in slots.js. <br><br>
Created a generateRandom function to get data fro data.js, radomize and create new array for reel. <br><br>
Created a 'disable'/alert for homepage when no username is entered. Tested and works.
Created a function to check if items are a match. (started with only 2 items). Tested and works.<br><br>
Created a path for images in data.js to be imported and assigned in slots.js. Created an adventlistener for spinButton in slots.js. On click, wallet decrease -5, click would generate 2 random objects, assign randomly generated objects to image src from data.js, function checkResult would see if imgs were equal. If equal, wallet increases by value assigned in data.js. Regardless spin count decreases. If spin count is zero, it will take put user info in local storage and send to results page. 
Created a third 'reel' and updated elements and functions to reflect added reel. Everything tested and works. <br><br>
Results text (win/loss) was added on slots.html and text-content added in slots.js to reflect values for wins/losses. Spin text and out of money text was added as well. 
Check results function(for 3 reels) was put to the test to make sure no false positives. test passed.<br><br>
Moved on to results page, added spans in HTML and used the elements to display user and wallet which was imported from local storage (via loadUserProfile function). 
Leaderboard (which will be all time user in separate local storage array) was added (in HTML and results.js) which will be rendered over time with different user and different scores. If there is no leaderboard, one is created for future use. 
Reset button was added which will send user to begin at homepage again. Text results will vary depending on users score. Images will be added as well at a later time which reflect different user scores. <br><br>
Created 3 arrays to create more data for reels, array formed 'superArray' which was exported. Created a function that would dynamically render the slots from data.js. 
Tinkered with code and fixed to create a superarray from a function rather pulling from 3 pre-built arrays. To create certain values, id were storaged in local storage and called later once loaded. <br><br>
Updated checkResults function to correct for new arrays that were built, created a test for 3 rows, then added for diagonals. Tests passed and no false positives returned.<br><br>
Leadboard sorting function created and checked.<br><br>
Updated assests for use in data.js<br><br>
Updated the array to be bigger for purpose of CSS creating faux animation. <br><br>
CSS transitions were created to minic a rolling reel. <br><br>
CSS added to results and home page. <br><br>
Assests images continued to be updated due to evolving concept.<br><br>
CSS on slots page to create an overlay and other things. <br><br>
"About me" page created and styled.<br><br>
Data added in assests for sound and values changed with new images.<br>

## www.vecteezy.com was used to create images used in app.
