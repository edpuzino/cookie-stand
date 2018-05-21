'use strict';

var pike = {
    minHrlCust: 23,
    maxHrlCust: 65,
    openHr: 6,
    closeHr: 20,
    averageCookies: 6.3,
    getRandom: function(minHrlCust, maxHrlCust) {
        return Math.random() * (maxHrlCust - minHrlCust) + minHrlCust;
    }
}

var airport = {
    minHrlCust: 3,
    maxHrlCust: 24,
    openHr: 6,
    closeHr: 20,
    averageCookies: 1.2,
    getRandom: function(minHrlCust, maxHrlCust) {
        return Math.random() * (maxHrlCust - minHrlCust) + minHrlCust;
    }
}

var center = {
    minHrlCust: 11,
    maxHrlCust: 38,
    openHr: 6,
    closeHr: 20,
    averageCookies: 3.7,
    getRandom: function(minHrlCust, maxHrlCust) {
        return Math.random() * (maxHrlCust - minHrlCust) + minHrlCust;
    }
}

var capital = {
    minHrlCust: 20,
    maxHrlCust: 38,
    openHr: 6,
    closeHr: 20,
    averageCookies: 2.3,
    getRandom: function(minHrlCust, maxHrlCust) {
        return Math.random() * (maxHrlCust - minHrlCust) + minHrlCust;
    }
}

var alki = {
    minHrlCust: 2,
    maxHrlCust: 16,
    openHr: 6,
    closeHr: 20,
    averageCookies: 4.6,
    getRandom: function(minHrlCust, maxHrlCust) {
        return Math.random() * (maxHrlCust - minHrlCust) + minHrlCust;
    }
}

