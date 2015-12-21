
var månadslön = document.getElementById('månadslön').innerHTML;
var lön = document.getElementById('lön')
    .addEventListener('click', Calculate, false);


function Calculate() {
    var försäljning = document.getElementById('försäljningssumma').value * 0.091;

    document.getElementById('lön').innerHTML = Number(månadslön) + Number(försäljning);
}