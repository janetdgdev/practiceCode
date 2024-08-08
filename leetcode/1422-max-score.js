/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zeros = 0,
         ones = 0,
         totalOnes = 0,
         bestScore = -Infinity
    
      // Count total number of ones
    for (const char of s) {
        if (char === '1') totalOnes++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') zeros++;
        else ones++;

        // Calculate score
        const currentScore = zeros + (totalOnes - ones);
        bestScore = Math.max(bestScore, currentScore);
    }

    return bestScore;
};