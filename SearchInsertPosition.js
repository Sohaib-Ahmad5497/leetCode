var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        }
        else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return left
};

console.log(searchInsert([2, 4, 6, 8, 11, 16, 22, 26], 18))