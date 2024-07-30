/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let occ = 0;

  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
    if (hash[n] > occ) {
      res = n;
      occ = hash[n];
    }
  }
  return res;
};

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
