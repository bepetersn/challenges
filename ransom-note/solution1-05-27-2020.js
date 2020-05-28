/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   // ransomNote can be constructed if magazine
   // contains each character of magazine in the 
   // same quantity
    magazine = magazine.split('')
    for(i=0; i<ransomNote.length; i++) {
        let foundIndex = magazine.indexOf(ransomNote[i])
        if(foundIndex == -1) {
            return false
        }
        magazine.splice(foundIndex, 1)
    }
    return true
};
