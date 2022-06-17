/**
 * Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

    if(s.length < 2) {
        return s.length;
    }

    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    
    for(let i = 0; i < s.length;  i++) {
        
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        console.log(curr)
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
        
    }
    
    return max_len;
};

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    if (s.length < 2) {
        return s.length;
    }
    
    let p = 0;
    let q = 1;
    var result = 1;
    
    while (q < s.length) {
        let sub = s.slice(p, q);
        let i = sub.indexOf(s[q]);
        
        if (i !== -1) {
            p = p + i + 1;
        }
        
        q++;
        result = Math.max(q - p, result);
    }
    
    return result;
};