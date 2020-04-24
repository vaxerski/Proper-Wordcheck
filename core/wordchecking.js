const editText = require("./editText.js");

var leetSpeak = 
[
    ["0", "o"], //0
    ["1", "i"], //1
    ["2", ""],  //2
    ["3", "e"], //3
    ["4", "a"], //4
    ["5", "s"], //5
    ["6", "b"], //6
    ["7", ""],  //7
    ["8", "b"], //8
    ["9", "g"], //9
]


function checkStandard(cont, set, whitelist){
    var found = false;
    var content = cont;
    content = editText.toLetters(content);                  // remove non-letters, so Ex. "b2l2o0o0d0y" -> "bloody"
    content = content.toLowerCase();
    content = editText.removeDuplicates(content);           // remove duplicates, so Ex. "bloooooooooodyyyyyyyyy" -> "blody"
    
    whitelist.forEach(l => {
        content = content.replace(editText.removeDuplicates(editText.toLetters(l).toLowerCase()), "");
    });

    set.forEach(word => {
        word = word.toLowerCase();                              //why? cuz if a word has duplicate letters it wouldn't match. Ex. "bl2oo2dy" -> "bloody" -> "blody"
        word = editText.removeDuplicates(word);                 //so we do this to check against "blody" instead.     
        
        if (content.indexOf(word) != -1) { found = true; }      //if the modified content has the word, return true later. BREAK NO WORK HERE =(
    });
    if(found) return true;

    // check for l33t sp34k

    content = cont;

    leetSpeak.forEach(function (value, i) {
        content = content.replace(value[0], value[1]);          // replace all nums with similiar letters.
    });

    content = editText.toLetters(content);
    content = content.toLowerCase();
    content = editText.removeDuplicates(content);
    
    whitelist.forEach(l => {
        content = content.replace(editText.removeDuplicates(editText.toLetters(l).toLowerCase()), "");
    });

    set.forEach(word => {
        word = word.toLowerCase();
        word = editText.removeDuplicates(word);   
        if (content.indexOf(word) != -1) { found = true; }
    });
    if(found) return true;
    return false;
}

function checkUnicode(cont, set, whitelist){
    //Unicode support not fully done yet, so the checks are worse and less robust, sorry.
    var found = false;
    var content = cont;

    content = content.toLowerCase();
    content = editText.removeDuplicates(content);

    whitelist.forEach(l => {
        content = content.replace(editText.removeDuplicates(editText.toLetters(l).toLowerCase()), "");
    });

    set.forEach(word => {
        word = word.toLowerCase();
        word = editText.removeDuplicates(word);
    
        if (content.indexOf(word) != -1) { found = true; }
    });
    if(found) return true;

    // l33t speak too

    content = cont;

    leetSpeak.forEach(function (value, i) {
        content = content.replace(value[0], value[1]);
    });

    content = content.toLowerCase();
    content = editText.removeDuplicates(content);
    
    whitelist.forEach(l => {
        content = content.replace(editText.removeDuplicates(editText.toLetters(l).toLowerCase()), "");
    });

    set.forEach(word => {
        word = word.toLowerCase();
        word = editText.removeDuplicates(word);   
        if (content.indexOf(word) != -1) { found = true; }
    });
    if(found) return true;

    return false;
}

module.exports = {
    checkStandard,
    checkUnicode
}