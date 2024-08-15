/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "" 
    strs.sort()
    let first = strs[0],
        last = strs[strs.length - 1],
        commonPre = ''
    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            commonPre += first[i];
        } else {
            break;
        }
    }
    return commonPre
};