
var summa = document.getElementById('summa').addEventListener('click', Add, false);

var average = document.getElementById('medelvärde').addEventListener('click', Average, false);

function Add() {
    var talett = document.getElementById('tal-ett').value;
    var taltvå = document.getElementById('tal-två').value;
    var taltre = document.getElementById('tal-tre').value;

    return document.getElementById('summa').innerHTML = Number(talett) + Number(taltvå) + Number(taltre);
}

function Average() {
    var talett = document.getElementById('tal-ett').value;
    var taltvå = document.getElementById('tal-två').value;
    var taltre = document.getElementById('tal-tre').value;

    return document.getElementById('medelvärde').innerHTML = (Number(talett) + Number(taltvå) + Number(taltre)) / 3;
}

