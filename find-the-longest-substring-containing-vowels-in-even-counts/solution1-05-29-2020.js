    /**
     * @param {string} s
     * @return {number}
     */
    var findTheLongestSubstring = function(s) {
        return _findLongest(s)
    };

        function _findLongest(s) {
            if(s.length === 0) {
                return 0
            } else {

              let isVowel = s.match(/^[aeiou]/) !== null
              let oneOrZero = Number(isVowel)
              if(s.length === 1) {  
                return oneOrZero
              } else {
                let smaller = s.slice(1)
                return _findLongest(smaller) + oneOrZero   
              }

            }
        }

    console.log(findTheLongestSubstring("leetcodeisgreat"))
