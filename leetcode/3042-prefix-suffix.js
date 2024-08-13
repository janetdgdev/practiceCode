function isPrefixAndSuffix(str1, str2) {
    const n = str1.length;
    if (n > str2.length) return false;
    return str1 === str2.substring(0, n) && str1 === str2.substring(str2.length - n);
}

function countPrefixSuffixPairs(words) {
    const l = words.length;
    let ans = 0;

    for (let x = 0; x < l - 1; x++) {
        for (let y = x + 1; y < l; y++) {
            if (isPrefixAndSuffix(words[x], words[y])) {
                ans++;
            }
        }
    }

    return ans;
}