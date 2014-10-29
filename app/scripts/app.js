define([
    'scope',
    'nicescroll',
    'pages/loading',
    'pages/home',
    'pages/participate'
], function(scope) {
    'use strict';

    var App = {
        init: function () {
            this.getPage('.js-ajax');
        },
        getPage: function(el) {
            var transtion_container = $('.transition-container');

            function hideAllContent (cb) {
                $(transtion_container).css({
                    height: $(transtion_container).css('height'),
                    overflow: 'hidden'
                });
                $(transtion_container).find('> .trs-item')
                .animate({
                    opacity: 0,
                    left: '-100%'
                },180, function () {
                    $(this).fadeOut(0);
                    if (cb && typeof cb === 'function') {
                        cb();
                    }
                });

            }

            $(el).each(function () {
                var that = $(this);
                if (
                    !that.data('container') ||
                    !that.attr('href') ||
                    that.attr('href') === ''
                ) {
                    that.off('click.getPage');
                    return;
                }
                // Vars
                var obj = {
                    href: that.attr('href'),
                    container: that.data('container'),
                    title: that.attr('title')
                }
                // Prepare
                $(obj.container).css({
                    opacity: 0,
                    position: 'relative'
                });
                // Event
                $(this).on('click.getPage', function (e) {
                    e.preventDefault();
                    scope.loading.open();
                    //
                    var page = $.ajax(obj.href);
                        page.done(function (html, status) {
                            scope.loading.close();

                            if (status === 'success') {
                                hideAllContent(function (){
                                    $(obj.container).fadeIn(0);
                                    $(obj.container).html(html)
                                    .animate({
                                        opacity: 1,
                                        left: 0
                                    }, 300);

                                    that.off('click.getPage');
                                    window.location.hash = obj.title;
                                });
                            }
                        })
                        .fail(function () {
                            scope.loading.close();
                            alert('That page not found');
                        });
                });
            });
        }
    };

    scope.app = App;

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
        scope.app.init();
        scope.home.init();
    });
});