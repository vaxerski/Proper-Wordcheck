const help = require("./help.js");
const editText = require("./editText.js");

var badWords = [];

exports.addBadWords = function addBadWords(words){
    if(!Array.isArray(words)) return -1;

    for(var i = 0; i < words.length; i++){
        addBadWord(words[i]);
    }
}

exports.addBadWord = function addBadWord(word){
    if(Array.isArray(word)) return -1;

    badWords.push(word);
}

exports.removeBadWord = function removeBadWord(word){
    if(Array.isArray(word))
        return -1;

    var index = help.findArrIndex(word, badWords);
    if(index == -1) return -1;

    badWords.splice(index, 1);
}

exports.checkForWord = function checkForWord(content) {
    for(var i = 0; i < badWords.length; i++){
        var word = badWords[i];

        content = editText.toLetters(content);                  // remove non-letters, so Ex. "b2l2o0o0d0y" -> "bloody"
        content = editText.removeDuplicates(content);           // remove duplicates, so Ex. "bloooooooooodyyyyyyyyy" -> "blody"
        content = content.toLowerCase();
    
        word = editText.removeDuplicates(word);                 //why? cuz if a word has duplicate letters it wouldn't match. Ex. "bl2oo2dy" -> "bloody" -> "blody"
        word = word.toLowerCase();                              //so we do this to check against "blody" instead.
    
        if (content.indexOf(`${word}`) != -1) return true;      //if the modified content has the word, return true.
    }
    return false;
}

function test(){                                            //testing the code hehe
    var cont = "hey this is bl111oooo0oody bad";
    addBadWord("bloody");
    addBadWords(["hell", "heck"]); 
    console.log(badWords);
    removeBadWord("heck");

    if(checkForWord(cont))
        console.log("pass!");
    else console.log("fail.");
}