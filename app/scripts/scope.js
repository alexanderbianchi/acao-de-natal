define(function() {
    'use strict';
    window.scope = (window.scope) || (function () {
        return window.scope = {
            config: {
                base: ''
            }
        };
    }());
    var scope = window.scope;
    return scope;
});