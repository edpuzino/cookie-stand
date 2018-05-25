'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];
var totalCookiesByHour = 0;
var totalCookiesByStore = 0;
var totalTotals = 0;

function MakeStores(name, minHrlCust, maxHrlCust, averageCookies) {
    this.name = name;
    this.minHrlCust = minHrlCust;
    this.maxHrlCust = maxHrlCust;
    this.averageCookies = averageCookies;
    this.calcHrlCust = [];
    this.hrlCookies = [];
    this.totalCookies = 0;
    stores.push(this);
    console.log(this);
    for(var i = 0; i < hours.length; i++) {
        this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
        console.log(this.calcHrlCust[i]);
    }
    for(var j = 0; j < hours.length; j++) {
        this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
        this.totalCookies += this.hrlCookies[j];
        console.log(this.hrlCookies[j]);
    }
    console.log(this.totalCookies);


};



function makeStores() {
    new MakeStores('First and Pike', 23, 65, 6.3);
    new MakeStores('SeaTac Airport', 3, 24, 1.2);
    new MakeStores('SeattleCenter', 11, 38, 3.7);
    new MakeStores('Capital Hill', 20, 38, 2.3);
    new MakeStores('Alki', 2, 16, 4.6);
}
makeStores();



function makeHeaderRow() {
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    for(var k = 0; k < hours.length; k++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[k];
        table.appendChild(thEl);
        console.log(hours[k]);
    }


};
makeHeaderRow();









/*
var pike = {
    name: 'First and Pike',
    minHrlCust: 23,
    maxHrlCust: 65,
    averageCookies: 6.3,
    calcHrlCust: [],
    hrlCookies: [],
    totalCookies: 0,
    randomCalcHrlCust: function() {
        for(var i = 0; i < hours.length; i++) {
            this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
            console.log(this.calcHrlCust[i]);
        }
    },
    calcHrlCookies: function() {
        for(var j = 0; j < hours.length; j++) {
            this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
            console.log(this.hrlCookies[j]);
        }
    },
    render: function() {
        var store = document.getElementById('pike');
        var cookies = document.getElementById('pikeTimes');
        this.randomCalcHrlCust();
        this.calcHrlCookies();
        var h3El = document.createElement('h3');
        h3El.textContent = this.name;
        store.appendChild(h3El);
        for(var k = 0; k < hours.length; k++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[k] + ': ' + this.hrlCookies[k] + ' cookies';
            this.totalCookies = this.totalCookies + this.hrlCookies[k];
            console.log(liEl);
            console.log(this.totalCookies);
            cookies.appendChild(liEl);
        };
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies +' cookies';
        cookies.appendChild(liEl);
    },
};
pike.render();

var airport = {
    name: 'SeaTac Airport',
    minHrlCust: 3,
    maxHrlCust: 24,
    averageCookies: 1.2,
    calcHrlCust: [],
    hrlCookies: [],
    totalCookies: 0,
    randomCalcHrlCust: function() {
        for(var i = 0; i < hours.length; i++) {
            this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
            console.log(this.calcHrlCust[i]);
        }
    },
    calcHrlCookies: function() {
        for(var j = 0; j < hours.length; j++) {
            this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
            console.log(this.hrlCookies[j]);
        }
    },
    render: function() {
        var store = document.getElementById('airport');
        var cookies = document.getElementById('airportTimes');
        this.randomCalcHrlCust();
        this.calcHrlCookies();
        var h3El = document.createElement('h3');
        h3El.textContent = this.name;
        store.appendChild(h3El);
        for(var k = 0; k < hours.length; k++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[k] + ': ' + this.hrlCookies[k] + ' cookies';
            this.totalCookies = this.totalCookies + this.hrlCookies[k];
            console.log(liEl);
            console.log(this.totalCookies);
            cookies.appendChild(liEl);
        };
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies +' cookies';
        cookies.appendChild(liEl);
    },
};
airport.render();

var center = {
    name: 'Seattle Center',
    minHrlCust: 11,
    maxHrlCust: 38,
    averageCookies: 3.7,
    calcHrlCust: [],
    hrlCookies: [],
    totalCookies: 0,
    randomCalcHrlCust: function() {
        for(var i = 0; i < hours.length; i++) {
            this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
            console.log(this.calcHrlCust[i]);
        }
    },
    calcHrlCookies: function() {
        for(var j = 0; j < hours.length; j++) {
            this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
            console.log(this.hrlCookies[j]);
        }
    },
    render: function() {
        var store = document.getElementById('center');
        var cookies = document.getElementById('centerTimes');
        this.randomCalcHrlCust();
        this.calcHrlCookies();
        var h3El = document.createElement('h3');
        h3El.textContent = this.name;
        store.appendChild(h3El);
        for(var k = 0; k < hours.length; k++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[k] + ': ' + this.hrlCookies[k] + ' cookies';
            this.totalCookies = this.totalCookies + this.hrlCookies[k];
            console.log(liEl);
            console.log(this.totalCookies);
            cookies.appendChild(liEl);
        };
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies +' cookies';
        cookies.appendChild(liEl);
    },
};
center.render();

var capital = {
    name: 'Capital Hill',
    minHrlCust: 20,
    maxHrlCust: 38,
    averageCookies: 2.3,
    calcHrlCust: [],
    hrlCookies: [],
    totalCookies: 0,
    randomCalcHrlCust: function() {
        for(var i = 0; i < hours.length; i++) {
            this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
            console.log(this.calcHrlCust[i]);
        }
    },
    calcHrlCookies: function() {
        for(var j = 0; j < hours.length; j++) {
            this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
            console.log(this.hrlCookies[j]);
        }
    },
    render: function() {
        var store = document.getElementById('capital');
        var cookies = document.getElementById('capitalTimes');
        this.randomCalcHrlCust();
        this.calcHrlCookies();
        var h3El = document.createElement('h3');
        h3El.textContent = this.name;
        store.appendChild(h3El);
        for(var k = 0; k < hours.length; k++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[k] + ': ' + this.hrlCookies[k] + ' cookies';
            this.totalCookies = this.totalCookies + this.hrlCookies[k];
            console.log(liEl);
            console.log(this.totalCookies);
            cookies.appendChild(liEl);
        };
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies +' cookies';
        cookies.appendChild(liEl);
    },
};
capital.render();

var alki = {
    name: 'Alki',
    minHrlCust: 2,
    maxHrlCust: 16,
    averageCookies: 4.6,
    calcHrlCust: [],
    hrlCookies: [],
    totalCookies: 0,
    randomCalcHrlCust: function() {
        for(var i = 0; i < hours.length; i++) {
            this.calcHrlCust.push(Math.floor(Math.random() * (this.maxHrlCust - this.minHrlCust + 1)) + this.minHrlCust);
            console.log(this.calcHrlCust[i]);
        }
    },
    calcHrlCookies: function() {
        for(var j = 0; j < hours.length; j++) {
            this.hrlCookies.push(Math.round(this.averageCookies * this.calcHrlCust[j]));
            console.log(this.hrlCookies[j]);
        }
    },
    render: function() {
        var store = document.getElementById('alki');
        var cookies = document.getElementById('alkiTimes');
        this.randomCalcHrlCust();
        this.calcHrlCookies();
        var h3El = document.createElement('h3');
        h3El.textContent = this.name;
        store.appendChild(h3El);
        for(var k = 0; k < hours.length; k++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[k] + ': ' + this.hrlCookies[k] + ' cookies';
            this.totalCookies = this.totalCookies + this.hrlCookies[k];
            console.log(liEl);
            console.log(this.totalCookies);
            cookies.appendChild(liEl);
        };
        var liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies +' cookies';
        cookies.appendChild(liEl);
    },
};
alki.render();
*/