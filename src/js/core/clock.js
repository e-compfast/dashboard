define(['../../../bower_components/moment/moment'], function (moment) {
    function getCurrentDate () {
        return new Date();
    }

    function displayTime () {
        return moment(getCurrentDate()).format('HH:mm');
    }

    function displayDate () {
        return moment(getCurrentDate()).format('LL');
    }

    return {
        time: displayTime,
        date: displayDate
    }
});