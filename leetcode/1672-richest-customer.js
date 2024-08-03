/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0
    //Loop through the account users
    for( let i = 0; i <accounts.length; i++){
        //Reduce all accounts to find the highest number
        const sum = accounts[i].reduce((i,j) => {return i+j }, 0)
        if(sum > richest) {
        richest = sum;
        }
    }
    return richest
}