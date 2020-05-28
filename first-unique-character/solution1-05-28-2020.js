/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let counts = {}
    let char
    for(i=0; i<s.length; i++) {
        char = s[i]
        if(counts.hasOwnProperty(char)) {
            counts[char]++
        } else {
            counts[char] = 1    
        }
    }
    for(i=0; i<s.length; i++) {
        let char = s[i]
        if(counts[char] == 1) {
            return i
        }
    }
    return -1
};
