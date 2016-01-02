//happy hour logic:
var happyhour;
var weekday;
var reducedprice;
var newPrice;
var element;

function HappyHour() {
    happyhour = new Date();
    weekday = happyhour.getDay();
    reducedprice = document.getElementsByClassName('price');

    if (happyhour.getHours() === 00) {

        for (var i = 0; i < reducedprice.length; i++) {
            newPrice = reducedprice[i].innerHTML * 0.5;
        }

        if (weekday < 6) {
            switch (weekday) {
                case 1:
                    element = reducedprice[0];
                    element.innerHTML = newPrice;
                    console.log("Happy Monday!! Price:", newPrice + "!");
                    break;
                case 2:
                    element = reducedprice[1];
                    element.innerHTML = newPrice;
                    console.log("Tuesday happy hour!! Price:", newPrice + "!");
                    break;
                case 3:
                    element = reducedprice[2];
                    element.innerHTML = newPrice;
                    console.log("Wednesday happy hour!! Price:", newPrice + "!");
                    break;

                case 4:
                    element = reducedprice[3];
                    element.innerHTML = newPrice;
                    console.log("Thursday happy hour!! Price:", newPrice + "!");
                    break;

                case 5:
                    element = reducedprice[4];
                    element.innerHTML = newPrice;
                    console.log("Friday happy hour!! Price:", newPrice + "!");
                    break;

                case 6:
                    element = reducedprice[5];
                    element.innerHTML = newPrice;
                    console.log("Saturday happy hour!! Price:", newPrice + "!");
                    break;

                default:
                    element = reducedprice[6];
                    element.innerHTML = newPrice;
                    console.log("Sunday happy hour!! Price:", newPrice + "!");
                    break;
            }
        }

    } else {
        reducedprice = document.getElementsByClassName('price');
    }
}


////Method calls:
HappyHour();
AdjustPrice();
AddPictures();
TodaysOffer();

//Adjust price function: (add .toFixed(2) for 2 decimals)
var adjustprice;
var numericValue;

function AdjustPrice() {
    HappyHour = document.getElementsByClassName('price');
    //numericValue = Number(adjustprice.innerHTML);
    for (var i = 0; i < HappyHour.length; i++) {
        numericValue = Number(HappyHour[i].innerHTML);
        console.log(numericValue.toFixed(3));
        return numericValue.toFixed(3);
    }

    console.log(numericValue.toFixed(3));
    return numericValue.toFixed(3);
}

/*Add pictures function to span:*/
function AddPictures() {
    element = document.getElementsByTagName('span');
    for (var i = 0; i < element.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', 'Images/Hamburger.png');
        element[i].textContent = " ";
        element[i].appendChild(img);
    };
}

/*Add todays offer function. 
Make price background red.
Reduce price by another 20%:*/
var todaysoffer;

function TodaysOffer() {
    todaysoffer = document.getElementsByClassName('price');
        for (var i = 0; i < todaysoffer.length; i++) {
            newPrice = todaysoffer[i].innerHTML * 0.8;
        }

    if (weekday < 6) {
        switch (weekday) {
            case 1:
                element = todaysoffer[0];
                element.innerHTML = newPrice;
                todaysoffer[0].style.backgroundColor = 'red';
                break;
            case 2:
                element = reducedprice[1];
                element.innerHTML = newPrice;
                todaysoffer[1].style.backgroundColor = 'red';
                break;
            case 3:
                element = reducedprice[2];
                element.innerHTML = newPrice;
                todaysoffer[2].style.backgroundColor = 'red';
                break;

            case 4:
                element = reducedprice[3];
                element.innerHTML = newPrice;
                todaysoffer[3].style.backgroundColor = 'red';
                break;

            case 5:
                element = reducedprice[4];
                element.innerHTML = newPrice;
                todaysoffer[4].style.backgroundColor = 'red';
                break;

            case 6:
                element = reducedprice[5];
                element.innerHTML = newPrice;
                todaysoffer[5].style.backgroundColor = 'red';
                break;

            default:
                element = todaysoffer[6];
                element.innerHTML = newPrice;
                todaysoffer[6].style.backgroundColor = 'red';
                break;
        }
    } else {
        todaysoffer = document.getElementsByClassName('price');
    }

}


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