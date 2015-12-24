//happy hour logic:
var happyhour = new Date();
var weekday = happyhour.getDay();
var reducedprice;

if (happyhour.getHours() === 18) {
    reducedprice = document.getElementsByClassName('price');
    for (var i = 0; i < reducedprice.length; i++) {
        var x = reducedprice[i].innerHTML * 0.5;
        if (weekday < 6) {
            switch (weekday) {
                case 1:
                    var element = reducedprice[0];
                    element.innerHTML = x;
                    console.log("Happy Monday!! Price:", x + "!");
                    break;
                case 2:
                    var element = reducedprice[1];
                    element.innerHTML = x;
                    console.log("Tuesday happy hour!! Price:", x + "!");
                    break;
                case 3:
                    var element = reducedprice[2];
                    element.innerHTML = x;
                    console.log("Wednesday happy hour!! Price:", x + "!");
                    break;

                case 4:
                    var element = reducedprice[3];
                    element.innerHTML = x;
                    console.log("Thursday happy hour!! Price:", x + "!");
                    break;

                case 5:
                    var element = reducedprice[4];
                    element.innerHTML = x;
                    console.log("Friday happy hour!! Price:", x + "!");
                    break;

                case 6:
                    var element = reducedprice[5];
                    element.innerHTML = x;
                    console.log("Saturday happy hour!! Price:", x + "!");
                    break;

                default:
                    var element = reducedprice[6];
                    element.innerHTML = x;
                    console.log("Sunday happy hour!! Price:", x + "!");
                    break;
            }
        }
    }

} else {
    reducedprice = document.getElementsByClassName('price');
}


////Method calls:

//Adjust price function: (add .toFixed(2) for 2 decimals)


/*Add pictures function to span:*/
var element = document.getElementsByTagName('span');
for (var i = 0; i < element.length; i++) {
    var img = document.createElement('img');
    img.setAttribute('src', 'Images/Hamburger.png');
        element[i].textContent = " ";
        element[i].appendChild(img);
};

/*Add todays offer function. 
Make price background red.
Reduce price by another 20%:*/


/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
    //Får ut alla att bli 9.99. Kom ihåg att ändra tiden i if-satsen
    if (happyhour.getHours() === 22) {
    reducedprice = document.getElementsByClassName('price');
    for (var i = 0; i < reducedprice.length; i++) {
        var x = reducedprice[i].innerHTML * 0.5;
        //var element = reducedprice[0].innerHTML;
        var element = reducedprice[i];
        element.innerHTML = x;
    }

*/