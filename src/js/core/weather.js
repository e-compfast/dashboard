define(['jquery', 'moment'], function ($, moment) {
    $.getJSON('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/55.610099/lon/12.990244/data.json')
        .success(function (data) {
            console.log(new Date());
            for (i in data.timeseries) {
                var ref = moment(new Date()).format('YYYY-MM-DD HH');
                var item = moment(data.timeseries[i].validTime).format('YYYY-MM-DD HH');

                if (ref === item) {
                    console.log(ref);
                    console.log(item);
                    console.log("found");
                    console.log(data.timeseries[i]);
                }
            }
        });
});