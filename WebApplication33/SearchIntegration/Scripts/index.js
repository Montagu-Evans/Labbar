/// <reference path="jquery-2.1.0-vsdoc.js" />

$(document).ready(function () {
    $('#search').keyup(function () {
        var searchField = $('#search').val();
        var regex = new RegExp(searchField, 'i');

        $.getJSON('products.json', function (data) {
            var output = '<ul class="searchResults">';

            $.each(data, function (key, val) {
                if ((val.name.search(regex) !== -1 ||
                    val.about.search(regex) !== -1)) {
                    output += '<li>'
                        + '<p>'
                        + '<strong>'
                        + val.name
                        + '</strong>'
                        + '</p>'
                        + '<p>'
                        + val.about
                        + '</p>'
                        + "<img src='Images/" + val.url_image + "'/>'"
                        + '</li>';
                }
            });
            output += "</ul>";
            $('#productDiv').html(output);
        });
    });

    $('.clickBox').on('click', function () {
        var searchField = $('#search').val();
        var regex = new RegExp(searchField, 'i');

        $.getJSON('products.json', function (data) {
            var output = '<ul class="searchResults">';

            $.each(data, function (key, val) {
                if ((val.name.search(regex) !== -1 ||
                    val.about.search(regex) !== -1)) {
                    if ($('#fullmenu').is(":checked")) {
                        output += '<li>'
                            + '<p>'
                            + '<strong>'
                            + val.name
                            + '</strong>'
                            + '</p>'
                            + '<p>'
                            + '<strong class="color">price: </strong>'
                            + '<span class="lightCoral">'
                            + '$'
                            + val.price
                            + '</span>'
                            + '<p>'
                            + '<strong class="color">about: </strong>'
                            + val.about
                            + '</p>'
                            + "<img src='Images/" + val.url_image + "'/>'"
                            + '</li>';
                    } else if ($('#' + val.type).is(":checked")) {
                        output += '<li>'
                            + '<p>'
                            + '<strong>'
                            + val.name
                            + '</strong>'
                            + '</p>'
                             + '<p>'
                            + '<strong class="color">price: </strong>'
                            + '<span class="lightCoral">'
                            + '$'
                            + val.price
                            + '</span>'
                            + '<p>'
                            + '<strong class="color">about: </strong>'
                            + val.about
                            + '</p>'
                            + "<img src='Images/" + val.url_image + "'/>'"
                            + '</li>'
                        + '<p></br></p>'
                        + '<p></br></p>';
                    }
                }
            });
            output += "</ul>";
            $('#productDiv').html(output);
        });
    });
});


