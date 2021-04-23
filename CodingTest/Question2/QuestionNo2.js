//Find the maximum consecutive 1's in an array of 0's and 1's.

var Numbers = [1, 1, 0, 1, 1, 1];
var findMaxConsecuitveOnes = function (nums) {
  var maxCount = 0;
  var count = 0;
  for (var i in nums) {
    count = nums[i] === 1 ? count + 1 : 0;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};