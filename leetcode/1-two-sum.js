var twoSum = function(nums, target) {
    let stored = {}
    for(let i = 0; i < nums.length; i++){
        let comp = target - nums[i]
        if(comp in stored){
            return [stored[comp], i]
        }
        stored[nums[i]] = i
    }
};