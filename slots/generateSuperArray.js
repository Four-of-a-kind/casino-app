import { generateRandom } from './slots.js';

// this function creates an array that contains three individual arrays taken randomly from slots data
export function generateSuperArray(array) {
    // initialize empty arrays
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];

    // push three random objects to individual arrays
    //arrayOn now creates 10 objects
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));

    //arraytwo now creates 10 objects
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));

    //arrayThree now creates 10 objects
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));



    // combine three arrays into big superarray
    let newArray = [arrayOne, arrayTwo, arrayThree];

    // return superarray
    return newArray;
}