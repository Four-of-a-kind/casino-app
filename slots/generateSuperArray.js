export function generateRandomArray(array) {
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];

    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));
    arrayOne.push(generateRandom(array));

    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));
    arrayTwo.push(generateRandom(array));

    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));
    arrayThree.push(generateRandom(array));

    let newArray = [arrayOne, arrayTwo, arrayThree];

    return newArray
}