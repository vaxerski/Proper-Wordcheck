# Proper-Wordcheck

So you can stop using indexOf() and actually detect people trying to sneak through.

## Usage

To install, run
```
npm install proper-wordcheck
```

Basic usage example:

```javascript
//require the package
const wordcheck = require('proper-wordcheck');

//Add words to the list
wordcheck.addBadWord('pineapple');

//check if a message has it
if(wordcheck.checkForWord('Who even puts pineapple on pizza?'))
  return console.log("bad word detected!");
else
  return console.log("message clear chief.");
```

## Full list of commands

```javascript
addBadWord(word);
```
Add a bad word to the badWord list. (string)
**Returns:** *-1* on fail, nothing on pass.

```javascript
addBadWords(words);
```
Add multiple bad words to the badWord list. (array)
**Returns:** *-1* on fail, nothing on pass.

```javascript
removeBadWord(word);
```
Remove bad word from the badWord list. (string)
**Returns:** *-1* on fail, nothing on pass.

```javascript
checkForWord(content);
```
Check a string (content) for containing any of the bad words.
**Returns:** *true* on match, *false* otherwise.

## Issues
All issues or pull requests are welcome.<br/>
If you find a way to bypass the checks, make either an issue or a pr :)

## Licensing
This repo uses the MIT license.