/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const difference = target - nums[i];
    if (obj.hasOwnProperty(difference)) {
      return [obj[difference], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
