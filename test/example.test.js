// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { checkResult } from '../common/utils.js';

const test = QUnit.test;


test('test checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const reel1 = {
        id: 1
    };
    const reel2 = {
        id: 1
    };

    const reel3 = {
        id: 1
    };

    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(reel1, reel2, reel3);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
