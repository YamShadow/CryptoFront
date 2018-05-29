window.onload = function() {
    // Récupère toutes les crypto-monnaies
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


    // Return today's date and time
    var currentTime = new Date()

    // Returns the month (from 0 to 11)
    var month = currentTime.getMonth() + 1

    // Returns the day of the month (from 1 to 31)
    var day = currentTime.getDate()

    // Returns the year (four digits)
    var year = currentTime.getFullYear()

    // Récupère le top 5 des crypto-monnaies du jour en fonction des échanges
    $.ajax({
        type: 'GET',
        url: 'http://www.yamishadow.fr/Crypto/echanges/top/7d/date/limit/5',
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


    setTimeout(function() {
        $('#tab-cryptos').DataTable();
    }, 1000);

};