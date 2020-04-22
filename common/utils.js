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
export function checkResult(superArray) {
    return superArray[0][0].id === superArray[1][0].id && superArray[0][0] === superArray[2][0];   
}

   
