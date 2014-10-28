define(function() {
    'use strict';
    var scope;
    window.scope = (window.scope) || (function () {
        return window.scope = {
            config: {
                base: ''
            }
        }
    }());
    scope = window.scope;
    return scope;
});