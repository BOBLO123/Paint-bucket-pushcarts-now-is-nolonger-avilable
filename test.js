$(document).ready(function() {
    $('#proxySiteForm').submit(function(e) {
        e.preventDefault();
        var siteUrl = $('#siteUrl').val();
        $('#proxyResult').show();
        $('#proxyFrame').attr('src', 'https://cors-anywhere.herokuapp.com/' + siteUrl);
    });
});
