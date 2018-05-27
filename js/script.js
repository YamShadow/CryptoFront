window.onload = function() {
    // Toutes les crypto-monnaies
    $.ajax({
        type: 'GET',
        url: 'http://yamishadow.fr/Crypto/cryptocurrencies',
        data: {},
        dataType: 'json',
        success: function(data) {
            $(function() {
                $.each(data.reponses, function(i, item) {
                    var $name = item.name;
                    var $symbol = item.symbol;
                    var $tr = $('<tr>').append(
                        '<td><a href="monnaie.html#/' + $symbol + '">' + $name + '</a></td>',
                        $('<td>').text(item.symbol),
                        $('<td>').text(item.rank)
                    );
                    $("#tab-cryptos tbody").append($tr);
                });
            });
        }
    });

    // Top 5 des crypto-monnaies
    $.ajax({
        type: 'GET',
        url: 'http://www.yamishadow.fr/Crypto/echanges/top/7d/date/2018-05-12/limit/5',
        data: {},
        dataType: 'json',
        success: function(data) {
            $(function() {
                $.each(data.reponses, function(i, item) {
                    var $tr = $('<tr>').append(
                        $('<td>').text(item.name),
                        $('<td>').text(item.symbol),
                    );
                    $("#tab-top5-echanges tbody").append($tr);
                });
            });
        }
    });
};

setTimeout(function() {
    $('#tab-cryptos').DataTable();
}, 1000);

/*
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
                        );
                        $("#tab-cryptos tbody").html($tr);
                    });
                });
            }
        });
    });
});
*/