
var månadslön = document.getElementById('månadslön').innerHTML;
var lön = document.getElementById('lön')
    .addEventListener('click', Calculate, false);


function Calculate() {
    var försäljning = document.getElementById('försäljningssumma').value * 0.09;

    if (document.getElementById('försäljningssumma').value <= 0)
        return document.getElementById('lön').innerHTML = Number(månadslön);
    else
        return document.getElementById('lön').innerHTML = Number(månadslön) + Number(försäljning);
}