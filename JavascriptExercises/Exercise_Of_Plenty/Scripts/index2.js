
var resultatminuter = document.getElementById('resultat-minuter').addEventListener('click', CalculateMinutes, false);

function CalculateMinutes() {
    var antalminuter = document.getElementById('antaltimmar').value * 60;
    document.getElementById('resultat-minuter').innerHTML = Number(antalminuter);
}