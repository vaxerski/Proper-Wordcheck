![npm minified size](https://img.shields.io/bundlephobia/min/proper-wordcheck) 
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/proper-wordcheck)
![GitHub issues](https://img.shields.io/github/issues/vaxerski/Proper-Wordcheck)
![GitHub last commit](https://img.shields.io/github/last-commit/vaxerski/proper-wordcheck)
![npm](https://img.shields.io/npm/v/proper-wordcheck)
![Eating Cake](https://img.shields.io/badge/Eating-Cake-ff69b4)

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
Add a bad word to the badWord list. (string)<br/>
**Returns:** nothing.<br/><br/>

```javascript
addBadWords(words);
```
Add multiple bad words to the badWord list. (array)<br/>
**Returns:** nothing.<br/><br/>

```javascript
removeBadWord(word);
```
Remove bad word from the badWord list. (string)<br/>
**Returns:** nothing.<br/><br/>

```javascript
checkForWord(content);
```
Check a string (content) for containing any of the bad words.<br/>
**Returns:** *true* on match, *false* otherwise.<br/><br/>

```javascript
allowUnicode(state);
```
Allow or disallow unicode. Makes the checks a bit worse but avoids false positives (See [Issue #1](https://github.com/vaxerski/Proper-Wordcheck/issues/1))<br/>
**Returns:** nothing.<br/><br/>

```javascript
addToWhitelist(word);
```
Add a word to white-list, so it will be skipped. Ex. badword = apple, whitelist = applepie, checkForWord("applepies are great") will return *false*.

## Issues
All issues or pull requests are welcome.<br/>
These checks won't be perfect, but I'm trying to make them as good as possible.

## Licensing
This repo uses the MIT license.