/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            if (target - nums[i] === nums[j]) {
                return [i, j];
            }
        } 
    }
};

// Hash map solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i ++) {
        const sub = target - nums[i];
        
        if (map.has(sub)) {
            return [map.get(sub), i]
        }
        
        map.set(nums[i], i)
    }
};
