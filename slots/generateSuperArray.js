import { generateRandom } from './slots.js';

// very cool function! I would have liked to see a test for this, since so much of the app hinges on this piece working as expected 
// this function creates an array that contains three individual arrays taken randomly from slots data
export function generateSuperArray(array) {
    // initialize empty arrays
    const arrayOne = [];
    const arrayTwo = [];
    const arrayThree = [];

    // push three random objects to individual arrays
    //arrayOn now creates 10 objects
    for (let i = 0; i < 10; i++) {
        arrayOne.push(generateRandom(array));
        arrayTwo.push(generateRandom(array));
        arrayThree.push(generateRandom(array));
    }

    // combine three arrays into big superarray
    // return superarray
    return [arrayOne, arrayTwo, arrayThree];
}