// Find by Id function
export function findById(idtoFind, arrayToSearch) { 
    for (let i = 0; i < arrayToSearch.length; i++) {
        const array = arrayToSearch[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}


   
