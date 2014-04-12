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
/*
require(['jquery'], function($) {
    $(document).ready(function() {
        console.log('ok');
        $(document).on('click', '#next', function() {
            console.log('hello');
        });
    });
});
*/
