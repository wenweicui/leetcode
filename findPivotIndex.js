/**
 * Find Pivot Index
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies  to the right edge of the array
 * Return the leftmost pivot index. If no such index exists, return -1.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum1= 0;
    let sum2 = 0;
    
    for (i in nums) {
        sum1 += nums[i]
    }
    
    for (let j = 0; j < nums.length; j ++) {
        if (sum2 === sum1 - sum2 - nums[j]) return j;
        sum2 += nums[j]
    }
    
    return -1;
};

var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b)=>a+b, 0);
    let sumL = 0, sumR = sum;
    for(let i = 0; i < nums.length; i ++){
        sumR -= nums[i];
    	if(sumL === sumR) return i;
    	sumL += nums[i];
    }
    return -1;
};
