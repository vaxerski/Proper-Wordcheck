function toLetters(string){
    if(string == undefined) throw "toLetters: invalid string.";
    return string.replace(/[^a-zA-Z]+/g, '');
}

function removeDuplicates(string){
    if(string == undefined) throw "removeDuplicates: invalid string.";
    return string.replace(/(.)(?=\1)/gi, "");
}

module.exports = { toLetters, removeDuplicates };