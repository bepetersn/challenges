/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let current = head
    let ahead, foundNextLarger 
    let result = []
    
    while(current !== null) {
        ahead = current.next
        foundNextLarger = false
        
        while(ahead !== null) {
            
            if(ahead.val > current.val) {
                result.push(ahead.val)
                foundNextLarger = true
                break
            } else {
                ahead = ahead.next
            }
        }
        
        if(foundNextLarger === false) {
            result.push(0)
        }
        
        current = current.next 
    }
    
    return result
};
