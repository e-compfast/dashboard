define(['jquery'], function ($) {
    return $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0',
        dataType: 'jsonp',
        data: {
            q: 'http://www.dn.se/rss/senaste-nytt/',
            num: -1
        }
    });
});