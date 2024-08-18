var removeDuplicates = function(nums) {
    let i = 1; //index 0 is the first unique number
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};