// Find by Id function
export function findById(idtoFind, arrayToSearch) { 
    for (let i = 0; i < arrayToSearch.length; i++) {
        const array = arrayToSearch[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}



// will be placed in event listener function
export function checkResult(reel1, reel2, reel3) {
    return reel1.id === reel2.id && reel1.id === reel3.id;   
}

   
