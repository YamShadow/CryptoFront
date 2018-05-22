window.onload = function() {
    $.ajax({
        type: 'GET',
        url: 'http://yamishadow.fr/Crypto/cryptocurrencies',
        data: {},
        dataType: 'json',
        success: function(data) {

            $(function() {
                $.each(data, function(i, item) {
                    var $tr = $('<tr>').append(
                        $('<td>').text(item.name),
                        $('<td>').text(item.symbol),
                        $('<td>').text(item.rank)
                    ); //.appendTo('#records_table');
                    $("#tab-cryptos").append($tr);
                });
            });

        }
    });
};


$(function() {
    $('#action').click(function() {
        $.ajax({
            type: 'GET',
            url: 'http://yamishadow.fr/Crypto/cryptocurrencies/symbol/' + $('input[name="input"]').val(),
            data: {},
            dataType: 'json',
            success: function(data) {
                $(data).each(function(i, val) {
                    $.each(val, function(champ, valeur) {
                        if (champ == 'id') { return true; }

                        $("#tab-cryptos").append('<tr><td>' + champ + '</td><td>' + valeur + '</td></tr>');
                    });
                });
            }
        });
    });
});