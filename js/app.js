'use strict';

var pike = {
    minHrlCust: 23,
    maxHrlCust: 65,
    openHr: 6,
    closeHr: 20,
    averageCookies: 6.3,
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
}

var airport = {
    minHrlCust: 3,
    maxHrlCust: 24,
    openHr: 6,
    closeHr: 20,
    averageCookies: 1.2,
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
}

var center = {
    minHrlCust: 11,
    maxHrlCust: 38,
    openHr: 6,
    closeHr: 20,
    averageCookies: 3.7,
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
}

var capital = {
    minHrlCust: 20,
    maxHrlCust: 38,
    openHr: 6,
    closeHr: 20,
    averageCookies: 2.3,
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
}

var alki = {
    minHrlCust: 2,
    maxHrlCust: 16,
    openHr: 6,
    closeHr: 20,
    averageCookies: 4.6,
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    }
}