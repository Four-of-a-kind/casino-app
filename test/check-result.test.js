// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../common/utils.js';


const test = QUnit.test;


test('test checkResult function with superArray', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const slotsData1 = [
        {
            id: 1,
            value: 5,
            image: '../assets/dan.jpeg'
        },
        {
            id: 2,
            value: 10,
            image: '../assets/jake.jpeg'
        },
        {
            id: 3,
            value: 20,
            image: '../assets/jaime.jpeg'
        },
    ];

    const slotsData2 = [
        {
            id: 1,
            value: 5,
            image: '../assets/dan.jpeg'
        },
        {
            id: 1,
            value: 5,
            image: '../assets/dan.jpeg'
        },
        {
            id: 3,
            value: 20,
            image: '../assets/jaime.jpeg'
        },
    ];

    const slotsData3 = [
        {
            id: 1,
            value: 5,
            image: '../assets/dan.jpeg'
        },
        {
            id: 2,
            value: 10,
            image: '../assets/jake.jpeg'
        },
        {
            id: 1,
            value: 5,
            image: '../assets/dan.jpeg'
        },
    ];
    
    const testArray = [
        slotsData1, slotsData2, slotsData3
    ];
    
    const expected = 10;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(testArray);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});
