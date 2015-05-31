define(function (require, exports, module) {
    var viewModel,
        ko = require('knockout'),
        clock = require('js/core/clock'),
        news = require('js/core/news'),
        weather = require('js/core/weather');

    viewModel = function (ko, clock, news, weather) {
        var self = this,
            itemCount = 0;

        /* Clock */
        self.time = ko.observable();
        self.date = ko.observable();

        /* News */
        self.newsItems = ko.observableArray();
        self.newsItemsCount = ko.observable();

        /* Clock */
        function updateClock() {
            self.time(clock.time());
            self.date(clock.date());
        }

        setInterval(updateClock(), 1000);

        /* News */
        function setNewsItems(items, count) {
            self.newsItemsCount(items.length);
            itemCount += count;

            for (var i = 0; i < count; i++) {
                self.newsItems.push(items[i]);
            }
        }

        news.getNews().success(function (data) {
            setNewsItems(data.responseData.feed.entries, 10);
        });

    };

    exports.viewmodel = viewModel(ko, clock, news, weather);
});