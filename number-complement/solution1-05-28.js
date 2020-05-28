/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bits = Number(num).toString(2)
    let complementBits = []
    for(bit of bits) {
        complementBits.push(bit === "1" ? "0" : "1")
    }
    return parseInt(complementBits.join(''), 2)
};
