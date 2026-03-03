/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hsm = {}; // Initialize dictionary, fastest search data structure

    for(let i=0;i<nums.length;i++) {
        value = nums[i]; 
        hsm[value] = i; // transform the array to a dictionary
    }
    
    for(let i=0;i<nums.length;i++) {
        const n = target - nums[i]; // target = current value - desired value -> desired value = target - current value
        if(hsm[n] && hsm[n]!=i) { 
            return [hsm[n], i];
        } 
    }
};
