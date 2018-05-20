window.onload = function() {
    $.ajax({
        type: 'GET',
        url: 'http://yamishadow.fr/Crypto/API/cryptocurrencies',
        data: {},
        dataType: 'json',
        success: function(data) {
            $(data).each(function(i, val) {
                $.each(val, function(k, v) {
                    $("#tab-cryptos").append('<tr><td>' + k + '</td><td>' + v + '</td></tr>');
                });
            });
        }
    });
};