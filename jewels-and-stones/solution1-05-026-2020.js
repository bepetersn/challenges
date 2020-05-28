/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    countJewels = 0
    let jewels = J.split('') 
    for(stone of S) {
        if(jewels.includes(stone)) {
            countJewels++
        }
    }
    return countJewels
};
