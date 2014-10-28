require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        nicescroll: '../bower_components/nicescroll/jquery.nicescroll',
        scope: 'scope'
    },
    shim: {
        nicescroll: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery']);
