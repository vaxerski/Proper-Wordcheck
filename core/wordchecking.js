const editText = require("./editText.js");

function checkStandard(content, set, whitelist){
    var found = false;

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
    return false;
}

function checkUnicode(content, set, whitelist){
    //Unicode support not fully done yet, so the checks are worse and less robust, sorry.
    var found = false;

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