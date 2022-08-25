// O(m + n) solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 const mergeArrays = (nums1, nums2) => {
  let result = []
  let p1 = 0, p2 = 0, i = 0
  
  while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] < nums2[p2]) {
          result[i] = nums1[p1];
          p1 ++;
      } else {
          result[i] = nums2[p2];
          p2 ++;
      }
      i ++;
  }
  
  while (p1 < nums1.length) {
      result[i] = nums1[p1];
      p1 ++;
      i ++;
  }
  
  while (p2 < nums2.length) {
      result[i] = nums2[p2];
      p2 ++;
      i ++;
  }
  return result;
}

const floorNum = (num) => Math.floor(num);

var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = mergeArrays(nums1, nums2);
  const n = mergedArray.length;
  
  if (n % 2 === 0) {
      return (mergedArray[floorNum((n - 1) / 2)] + mergedArray[floorNum(n / 2)]) / 2
  } else {
      return mergedArray[floorNum(n / 2)];
  }
};

// better complexity solution
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  return median(nums1,nums2);
};

const median = (nums1, nums2) => {
  const nums1Size = nums1.length;
  const nums2Size = nums2.length;

  if(nums1Size === 0)
  {
      return nums2Size % 2 !== 0 ? nums2[nums2Size/2 - 0.5] : (nums2[nums2Size/2 - 1] + nums2[nums2Size/2]) / 2;
  }
  if(nums2Size === 0)
  {
      return nums1Size % 2 !== 0 ? nums1[nums1Size/2 - 0.5] : (nums1[nums1Size/2 - 1] + nums1[nums1Size/2]) / 2;
  }
  if(nums1Size + nums2Size <= 2)
  {  	    
      if(nums1Size && nums2Size)
      {
          return (nums1[0] + nums2[0]) / 2;
      }
      else{
        return nums1Size > 0 ? nums1[0]: nums2[0] ;
      }        
  }    

  let nums1max = nums1[nums1Size-1];
  let nums2max = nums2[nums2Size-1];
  nums1[0] > nums2[0] ? nums2.shift() : nums1.shift(); 
  nums1max > nums2max ? nums1.pop() : nums2.pop();              

  return median(nums1,nums2);  
};