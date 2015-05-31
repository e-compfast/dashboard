require.config({
    baseUrl: 'src',
    paths: {
        require: '../bower_components/requirejs/require',
        jquery: '../bower_components/jquery/dist/jquery',
        knockout: '../bower_components/knockout/dist/knockout',
        moment: '../bower_components/moment/moment',
        viewmodel: 'js/viewmodel/viewmodel'
    }
});

require(['viewmodel', 'knockout'], function (vm, ko) {
    ko.applyBindings(vm);
});