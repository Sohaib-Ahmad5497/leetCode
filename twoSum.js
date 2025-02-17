var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i];
      }
      map[nums[i]] = i;
    }
    return [];
  };
  
  const nums = [2, 7, 11, 15, 8, 4];
  const target = 15;
  
  console.log("Required result :", twoSum(nums, target));
  