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
                    $("#tab-cryptos tbody").append($tr);
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