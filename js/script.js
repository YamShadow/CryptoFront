window.onload = function() {

    // Toutes les crypto-monnaies
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
                    $("#tab-cryptos tbody").append($tr);
                });
            });

        }
    });

    // Top 5 des crypto-monnaies
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
                    ); //.appendTo('#records_table');
                    $("#tab-top5-echanges tbody").append($tr);
                });
            });
        }
    });

};

// Une crypto-monnaies via son symbole en cliquant sur le bouton rechercheParSymbol
$(function() {
    $('#rechercheParSymbol').click(function() {
        $.ajax({
            type: 'GET',
            url: 'http://yamishadow.fr/Crypto/cryptocurrencies/symbol/' + $('input[name="input"]').val(),
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
                        $("#tab-cryptos tbody").html($tr);
                    });
                });
            }
        });
    });
});