function TL(string){
    return string.replace(/[^a-zA-Z]+/g, '');
}

function RD(string){
    return string.replace(/[^\w\s]|(.)(?=\1)/gi, "");
}

module.exports = {
    removeDuplicates: function(str) {
        return RD(str);
    },
    toLetters: function(str) {
        return TL(str);
    }
}