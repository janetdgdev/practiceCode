var prefixCount = function(words, pref) {
    let count = 0
    for(let i = 0; i < words.length; i++){
        let sub = words[i]
        if (sub.startsWith(pref)){
            count += 1
        }
    }
    return count
};