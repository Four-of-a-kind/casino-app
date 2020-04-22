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
    let totalWinValue = 0;

    // horizontal rows
    if (superArray[0][0].id === superArray[1][0].id && superArray[0][0].id === superArray[2][0].id){
        totalWinValue += superArray[0][0].value;
    }   
    if (superArray[0][1].id === superArray[1][1].id && superArray[0][1].id === superArray[2][1].id){
        totalWinValue += superArray[0][1].value;
    }
    if (superArray[0][2].id === superArray[1][2].id && superArray[0][2].id === superArray[2][2].id){
        totalWinValue += superArray[0][2].value;
    }
    // diagonals
    if (superArray[0][0].id === superArray[1][1].id && superArray[0][0].id === superArray[2][2].id){
        totalWinValue += superArray[2][2].value;
    }

    if (superArray[0][2].id === superArray[1][1].id && superArray[0][2].id === superArray[2][0].id){
        totalWinValue += superArray[2][0].value;
    }

    return totalWinValue;
}