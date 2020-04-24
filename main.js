const editText = require("./core/editText");
const wordcheck = require("./core/wordchecking");

// -- Globals -- //

var vUnicode = false;
var badWords = new Set();
var whitelist = new Set();

// ------------- //

function addBadWords(words){
    if(!Array.isArray(words)) throw "addbadWords() takes an array, try addBadWord() for a single-word equivalent.";

    words.forEach(w => {
        badWords.add(w);
    });
}

function addBadWord(word){
    if(Array.isArray(word)) throw "addBadWord() takes one word, try addBadWords() for an array equivalent.";

    badWords.add(word);
}

function removeBadWord(word){
    if(Array.isArray(word)) throw "removeBadWord() takes one word as an argument, not an array.";

    if(!badWords.has(word)) throw "removeBadWord() failed: no such word.";

    badWords.delete(word);
}

function allowUnicode(state){
    vUnicode = state;                                           // unicode support is not fully done yet.
}

function checkForWord(content) {
    if(vUnicode){
        return wordcheck.checkUnicode(content, badWords, whitelist);
    }else{
        return wordcheck.checkStandard(content, badWords, whitelist);
    }
}

function addToWhitelist(word){
    if(Array.isArray(word)) throw "addToWhitelist() takes one word as an argument.";

    whitelist.add(word);
}

function test(){                                                //testing the code hehe
    allowUnicode(true);

    whitelist.add("helvete");
    var cont = "hey this is bl111oooo0oody bad, like h3ll.";
    addBadWord("mać");
    addBadWords(["hell", "heck"]); 
    removeBadWord("heck");
    console.log(badWords);

    if(checkForWord(cont))
        console.log("pass!");
    else console.log("fail.");
}

// ------ Exports ------ //

exports.checkForWord    = checkForWord;
exports.addBadWord      = addBadWord;
exports.addBadWords     = addBadWords;
exports.removeBadWord   = removeBadWord;
exports.allowUnicode    = allowUnicode;
exports.addToWhitelist  = addToWhitelist;