/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//find the two integers that add up to the target
//find the indices of the two integers
//return an array
var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] === target && !result.includes(i)){
                result = [i,j]
            }
        }
    }
    return result
};