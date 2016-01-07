﻿/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
2. SKIP **
    Add som tags that doesn't change the visual part of the paragraph.

3.Play with the properties at page 124 in the book.
  Use properties creatively to display things at the html page
4.Add a stylesheet that displays the changed words in fat font and in red.
5. PLay with the Methods 
### DOM page 126:###
6. Play with the DOM-properties

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

### String objects page 132: ###
9. check if the 4th element in the array is a number

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
11. replace the 3rd word with PI then roud it to the nearest integer

### Date object###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/

/* --- 3.Play with the properties at page 124 in the book. --- */
var elementBoxOne = document.createElement('div');
elementBoxOne.textContent = "Click me for info!";
elementBoxOne.style.backgroundColor = '#eee';
elementBoxOne.style.padding = '10px';

var boxOne = document.getElementById('makeMeAnArray').appendChild(elementBoxOne);
boxOne.addEventListener('click', PlayingWithProperties, false);

function PlayingWithProperties() {
    alert("Height: " + " " + window.innerHeight + " " + "Width: " + " " + window.innerWidth);

    alert('pageXOffset:' + window.pageXOffset + ' pageYOffset:' + window.pageYOffset);

    alert('Pointer is at x:' + window.screenX + 'y:' + window.screenY);

    alert("The URL: " + window.location);

    alert(window.document.getElementById('makeMeAnArray').innerText); //Hämtar ut dokumentets text på det skrivna idt.

    alert(window.history.forward()); //Tar en till nästa sida man varit inne på

    alert(window.history.length); //kollar hur många sidor man varit inne på

    //Innehåller information om användarens skärm. window-prefixet är inte nödvändigt.
    alert(document.getElementById('makeMeAnArray').innerHTML =
        "Available Screen Height: " + screen.availHeight);

    alert(document.getElementById('makeMeAnArray').innerHTML = "Screen Width: " + screen.width + " " + "Screen Height: " + screen.height);
}

/* Add a stylesheet that displays the changed words in fat font and red */
var elementBoxTwo = document.createElement('div');
elementBoxTwo.textContent = "Click me for red words and fat font!";
elementBoxTwo.style.backgroundColor = '#b8860b';
elementBoxTwo.style.padding = '10px';

var boxTwo = document.getElementById('makeMeAnArray').appendChild(elementBoxTwo);

boxTwo.addEventListener('click', MakeFontFatAndWordsRed, false);

function MakeFontFatAndWordsRed() {
    var elementTag = document.getElementsByTagName('p');
    for (var i = 0; i < elementTag.length; i++) {
        alert(elementTag[i].innerHTML = elementTag[i].innerHTML.replace('meebo', '<span style="color:red"><strong>meebo</strong></span>'));
    }
}

/* --- 5. PLay with the Methods  --- */
var elementBoxThree = document.createElement('div');
elementBoxThree.textContent = "Click me for different windows'";
elementBoxThree.style.backgroundColor = 'coral';
elementBoxThree.style.padding = '10px';

var boxThree = document.getElementById('makeMeAnArray').appendChild(elementBoxThree);
boxThree.addEventListener('click', PlayWithWindowThings, false);

function PlayWithWindowThings() {
    window.alert('hej');
    window.open('hejhej');
    window.print('hejhejhej');
}

/* --- 6. Play with the DOM-properties --- */
var elementBoxFour = document.createElement('div');
elementBoxFour.textContent = "Click me for DOM-properties!";
elementBoxFour.style.backgroundColor = 'lightblue';
elementBoxFour.style.padding = '10px';

var boxFour = document.getElementById('makeMeAnArray').appendChild(elementBoxFour);

boxFour.addEventListener('click', PlayWithDOMProperties, false);

function PlayWithDOMProperties() {
    alert(document.title); //Visar titeln på hemsidan
    alert(document.lastModified); //Visar när senaste ändringen är gjord
    alert(document.URL); //Returnerar en sträng av nuvarande dokumentets URL
    alert(document.domain); //Returnerar domänen av nuvarande dokumentet
}

/* 7. Save the text from the makeMeAnArray-paragraph into an array. 
 * 8. Use all the string methods and propertys allong with the array */
var text = document.getElementById('makeMeAnArray').innerText.split(' ');

var elementBoxFive = document.createElement('div');
elementBoxFive.textContent = "Click med for getting a text in an array";
elementBoxFive.style.backgroundColor = "darkgrey";
elementBoxFive.style.padding = "10px";

var boxFive = document.getElementById('makeMeAnArray').appendChild(elementBoxFive);

boxFive.addEventListener('click', TextToArray, false);

function TextToArray() {
    for (var i = 0; i < text.length; i++) {
        var array = text[i].split(' ');
        //var array = text[i].toUpperCase(); //Gör chars till versaler
        //var array = text[i].toLowerCase(); //Gör chars till små bokstäver
        //var array = text[i].charAt(600);
        //var array = text[i].indexOf(1);
        //var array = text[i].lastIndexOf(1);
        //var array = text[i].substring(19, 25);
        //var array = text[i].trim(); //Tar bort vitt brus på båda sidor om str
        //var array = text[i].replace("greplin", "wihoooo");
        //console.log(array);
        alert(array);
    }

}

/* 9. check if the 4th element in the array is a number */
var elementBoxSix = document.createElement('div');
elementBoxSix.textContent = "Click me to check if it's a number";
elementBoxSix.style.backgroundColor = "grey";
elementBoxSix.style.padding = "10px";

var boxSix = document.getElementById('makeMeAnArray').appendChild(elementBoxSix);

boxSix.addEventListener('click', IsNumber, false);

function IsNumber() {
    alert(isNaN(text[4]));
}

/* --- 10. Round one of the numbers in the paragraph up/down --- */
var elementBoxSeven = document.createElement('div');
elementBoxSeven.textContent = "Click me to round numbers";
elementBoxSeven.style.backgroundColor = "lightgreen";
elementBoxSeven.style.padding = '10px';

var boxSeven = document.getElementById('makeMeAnArray').appendChild(elementBoxSeven);

boxSeven.addEventListener('click', RoundNumbers, false);

function RoundNumbers() {
    alert(text[4] + ' is rounded to: ' + Math.round(text[4]));
}

/* 11. replace the 3rd word with PI then roud it to the nearest integer */
var elementBoxEight = document.createElement('div');
elementBoxEight.textContent = "Click me to change word with PI";
elementBoxEight.style.backgroundColor = "darkcyan";
elementBoxEight.style.padding = '10px';

var boxEight = document.getElementById('makeMeAnArray').appendChild(elementBoxEight);

boxEight.addEventListener('click', ReplaceWordWithPI, false);

function ReplaceWordWithPI() {
    var replacingText = text[2].replace(text[2], Math.PI);
    alert(text[2] + 'is replaced with: ' + Math.round(replacingText));
}

/* 12. Calculate how many days it's until your birthday and present it. */

function DaysToBirthday() {
    var birthday = new Date(1988, 2, 9);
    var today = new Date();
    var time = 1000 * 60 * 60 * 24;
    birthday.setFullYear(today.getFullYear());
    var diff = (birthday - today) / (time);
    alert(Math.ceil(diff));
}


