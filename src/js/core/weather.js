define(['jquery', 'moment'], function ($, moment) {

    function getWeather () {
        $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/55.610099/lon/12.990244/data.json');
    }

    $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/55.610099/lon/12.990244/data.json')
        .success(function (data) {
            for (i in data.timeseries) {
                var ref = moment(new Date()).format('YYYY-MM-DD HH');
                var item = moment(data.timeseries[i].validTime).format('YYYY-MM-DD HH');

                if (ref === item) {
                    return data.timeseries[i];
                } else {
                    return null;
                }
            }
        });

    return {
        getWeather: getWeather
    }
});