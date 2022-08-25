/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  if (intervals.length == 0) return [];
  
  intervals.sort((a,b) => a[0] - b[0]);
  
  let stack = [intervals[0]];
  
  for (let i = 0; i < intervals.length; i ++) {
      let prev = stack.pop();
      let cur = intervals[i];
      
      if (cur[0] <= prev[1]) {
          stack.push( [prev[0], Math.max(prev[1], cur[1])] );
      } else {
          stack.push(prev, cur);
      }
  }
  
  return stack;
};