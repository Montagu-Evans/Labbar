
var resultatminuter = document.getElementById('resultat-minuter').addEventListener('click', CalculateMinutes, false);

var resultatsekunder = document.getElementById('resultat-sekunder').addEventListener('click', CalculateSeconds, false);

function CalculateMinutes() {
    var antalminuter = document.getElementById('antaltimmar').value * 60;
    document.getElementById('resultat-minuter').innerHTML = Number(antalminuter);
}

function CalculateSeconds() {
    var antalsekunder = document.getElementById('antaltimmar').value * 60 * 60;
    document.getElementById('resultat-sekunder').innerHTML = Number(antalsekunder);
}