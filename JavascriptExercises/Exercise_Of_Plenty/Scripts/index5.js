
var convert_to_pounds = document.getElementById('pounds').addEventListener('click', ConvertToPounds, false);

var convert_to_dollars = document.getElementById('dollars').addEventListener('click', ConvertToDollars, false);

function ConvertToPounds() {
    var amount = document.getElementById('amount').value;
    return document.getElementById('pounds').innerHTML = (Number(amount) * 12);
}

function ConvertToDollars() {
    var amount = document.getElementById('amount').value;
    return document.getElementById('dollars').innerHTML = (Number(amount) * 6);
}