/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length < 2) return nums
    
    var result = [];
    result[0] = nums[0];
    
    for (let i = 1; i < nums.length; i ++) {
        result[i] = result[i - 1] + nums[i];
    }
    
    return result;
};
