window.onload = function() {

    var hash = window.location.hash.substring(1);

    // Toutes les crypto-monnaies
    $.ajax({
        type: 'GET',
        url: 'http://yamishadow.fr/Crypto/echanges/symbol/' + hash,
        data: {},
        dataType: 'json',
        success: function(data) {
            $(function() {
                $.each(data.reponses, function(i, item) {
                    var $tr = $('<tr>').append(
                        $('<td>').text(item['name']),
                        $('<td>').text(item['symbol']),
                        $('<td>').text(item['rank']),
                        $('<td>').text(item['1h']),
                        $('<td>').text(item['24h']),
                        $('<td>').text(item['7d']),
                        $('<td>').text(item['last_update'])
                    );
                    $("#tab-echanges tbody").append($tr);
                });
            });
        }
    });

    // Toutes les crypto-monnaies
    $.ajax({
        type: 'GET',
        url: 'http://yamishadow.fr/Crypto/historiques/symbol/' + hash,
        data: {},
        dataType: 'json',
        success: function(data) {
            $(function() {
                $.each(data.reponses, function(i, item) {
                    var $tr = $('<tr>').append(
                        $('<td>').text(item['name']),
                        $('<td>').text(item['symbol']),
                        $('<td>').text(item['rank']),
                        $('<td>').text(item['prix']),
                        $('<td>').text(item['prix_btc']),
                        $('<td>').text(item['vol_24h_usd']),
                        $('<td>').text(item['market_cap_usd']),
                        $('<td>').text(item['last_update'])
                    );
                    $("#tab-historiques tbody").append($tr);
                });
            });
        }
    });

};

setTimeout(function() {
    $('#tab-echanges').DataTable();
    $('#tab-historiques').DataTable();
}, 1000);