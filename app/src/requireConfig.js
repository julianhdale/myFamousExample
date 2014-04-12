/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        'famous-polyfills': '../lib/famous-polyfills/index',
        underscore: '../lib/underscore/underscore',
        jquery: '../lib/jquery/dist/jquery',
        pageList: './pageList'
    }
});
require(['main']);

require(['jquery'], function($) {
  /*  $(function() {
        window.console.log('jquery has been loaded');
        var a = $('.blue-bg').eq(0);
        if (a) {
            a.css({'background-color': 'RED'});
        } else {
            window.console.log('fuck');
        }
        $('#next').click(function(event) {
           // alert('fuck');
            window.alert('yay');
        });
    });*/
});
