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

/* --- Playing with properties on PAGE 124 --- */
var element = document.createElement('div');
element.textContent = "Click me for info!";
element.setAttribute('class', 'divbox');
//element.style.border = '2px';
element.style.backgroundColor = '#eee';
element.style.padding = '10px';
element.style.width = '7%';

var boxOne = document.getElementById('makeMeAnArray').appendChild(element);
boxOne.addEventListener('click', PlayingWithProperties, false);

function PlayingWithProperties() {
    //alert("Height: " + " " + window.innerHeight + " " + "Width: " + " " + window.innerWidth);

    //alert('pageXOffset:' + window.pageXOffset + ' pageYOffset:' + window.pageYOffset);

    //alert('Pointer is at x:' + window.screenX + 'y:' + window.screenY);

    //alert("The URL: " + window.location);

    //alert(window.document.getElementById('makeMeAnArray').innerText); //Hämtar ut dokumentets text på det skrivna idt.

    //alert(window.history.forward()); //Tar en till nästa sida man varit inne på

    //alert(window.history.length); //kollar hur många sidor man varit inne på

    //Innehåller information om användarens skärm. window-prefixet är inte nödvändigt.
    //alert(document.getElementById('makeMeAnArray').innerHTML =
    //    "Available Screen Height: " + screen.availHeight);

    //alert(document.getElementById('makeMeAnArray').innerHTML = "Screen Width: " + screen.width + " " + "Screen Height: " + screen.height);
}

var elementTag = document.getElementsByTagName('p');
for (var i = 0; i < elementTag.length; i++) {
    elementTag[i].innerHTML = elementTag[i].innerHTML.replace('meebo', '<span style="color:red"><strong>meebo</strong></span>');
}