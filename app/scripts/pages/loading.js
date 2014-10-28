define([
    'jquery',
    'scope'
], function ($, scope) {
    'use strict';

    var loading = {
        // Init
        close: function () {
            $('.loading-content').delay(1000).fadeOut(200, function () {
                $(this).closest('.loading').fadeOut(200);
            });
        },
        // Init
        open: function () {
            $('.loading').fadeIn(200, function () {
                $(this).find('.loading-content').fadeIn(200);
            });
        }
    };

    scope.loading = loading;
});