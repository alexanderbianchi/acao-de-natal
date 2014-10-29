define([
    'jquery',
    'scope'
], function ($, scope) {
    'use strict';

    var participate = {
        // Init
        init: function () {
            this.animations();
        },
        // Animations
        animations: function (cb) {
            var a = {
                logo: '.app-logo img',
                subLogo: '.app-subtitle img',
                contentImage: '.about-us__content .content-image',
                contentText: '.content-text p'
            };

            var run = function (cb) {
                // Reset
                $(a.logo).css({position:'relative', opacity: 0, top: '-60px'});
                $(a.subLogo).css({position:'relative', opacity: 0, left: '-5%'});
                $(a.contentImage).css({position:'relative', opacity: 0, left: '-5%'});
                $(a.contentText).css({position:'relative', opacity: 0, right: '-5%'});

                scope.loading.close();

                // Init animations
                $(a.logo).delay(1200).animate({
                    opacity: 1,
                    top: 0
                }, 150, function () {
                    $(a.subLogo).animate({
                        opacity: 1,
                        left: 0
                    }, 250, function () {
                        var t = 150,
                            count = 0;
                        $(a.contentImage).each(function () {
                            count++;
                            $(this).animate({
                                opacity: 1,
                                left: 0
                            }, t, function () {
                                if (count === 2) {
                                    $(a.contentText).each(function() {
                                        $(this).animate({
                                            opacity: 1,
                                            right: 0
                                        }, t);
                                        t+=50;
                                    });
                                }
                            });
                            t+=100;
                        });
                    });
                });

                // End animation
                if (typeof cb === 'function') {
                    cb();
                }
            };

            run(cb);
        }
    };

    scope.participate = participate;
});