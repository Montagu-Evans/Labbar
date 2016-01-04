//happy hour logic:
var happyhour = new Date();
var price = document.getElementsByClassName('price');
var newPrice;
var weekday = happyhour.getDay();
var element;
function HappyHour() {
    if (happyhour.getHours() === 19) {
        for (var i = 0; i < price.length; i++) {
            newPrice = AdjustPrice(price[i].innerHTML);
        }

        if (weekday < 6) {
            switch (weekday) {
                case (weekday):
                    element = price[0];
                    element.innerHTML = newPrice;
                    break;
                case 2:
                    element = price[1];
                    element.innerHTML = newPrice;
                    break;
                case 3:
                    element = price[2];
                    element.innerHTML = newPrice;
                    break;

                case 4:
                    element = price[3];
                    element.innerHTML = newPrice;
                    break;

                case 5:
                    element = price[4];
                    element.innerHTML = newPrice;
                    break;

                case 6:
                    element = price[5];
                    element.innerHTML = newPrice;
                    break;

                default:
                    element = price[6];
                    element.innerHTML = newPrice;
                    break;
            }
        }
    }
}

////Method calls:
HappyHour();
AdjustPrice();
AddPictures();
TodaysOffer();

//Adjust price function: (add .toFixed(2) for 2 decimals)
function AdjustPrice(price) {
    return (price * 0.5).toFixed(2);
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

function TodaysOffer() {
    if (weekday < 6) {
        switch (weekday) {
            case 1:
                price[0] = price[0].style.backgroundColor = 'red';
                price[0].innerHTML *= 0.8;
                break;

            case 2:
                price[1] = price[1].style.backgroundColor = 'red';
                price[1].innerHTML *= 0.8;
                break;

            case 3:
                price[2] = price[2].style.backgroundColor = 'red';
                price[2].innerHTML *= 0.8;
                break;

            case 4:
                price[3] = price[3].style.backgroundColor = 'red';
                price[3].innerHTML *= 0.8;
                break;

            case 5:
                price[4] = price[4].style.backgroundColor = 'red';
                price[4].innerHTML *= 0.8;
                break;

            case 6:
                price[5] = price[5].style.backgroundColor = 'red';
                price[5].innerHTML *= 0.8;

            default:
                price[6] = price[6].style.backgroundColor = 'red';
                price[6].innerHTML *= 0.8;
        }
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
    price = document.getElementsByClassName('price');
    for (var i = 0; i < price.length; i++) {
        var x = price[i].innerHTML * 0.5;
        //var element = price[0].innerHTML;
        var element = price[i];
        element.innerHTML = x;
    }

*/