define([
    'scope',
    'nicescroll',
    'pages/loading',
    'pages/home'
], function(scope) {
    'use strict';

    $(function() {
        $('body').niceScroll({
            autohidemode: false,
            cursorcolor:'#dbd401',
            cursorwidth:'9px',
            cursorborder:'1px solid #fff',
            cursorborderradius:'0',
            horizrailenabled: false,
            zindex:'3'
        });

        //
        scope.home.init();
    });
});