function TL(string){
    if(string == undefined) throw "toLetters: invalid string.";
    return string.replace(/[^a-zA-Z]+/g, '');
}

function RD(string){
    if(string == undefined) throw "removeDuplicates: invalid string.";
    return string.replace(/(.)(?=\1)/gi, "");
}

module.exports = {
    removeDuplicates: function(str) {
        return RD(str);
    },
    toLetters: function(str) {
        return TL(str);
    }
}