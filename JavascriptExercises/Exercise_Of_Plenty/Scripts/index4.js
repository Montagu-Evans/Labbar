

var resultat = document.getElementById('resultat').addEventListener('mouseover', SquareRoot, false);

function SquareRoot() {
    var tal = document.getElementById('tal').value;
    return document.getElementById('resultat').innerHTML = Math.sqrt(tal);
}