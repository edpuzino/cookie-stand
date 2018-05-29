'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];
var totalCookiesByHour = 0;
var totalCookiesByStore = 0;
var totalTotals = 0;

//This function uses constructor notation to populate the cookie numbers for each store.
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

//This function sends each stores parameters to the constructor function.
function makeStores() {
    new MakeStores('First and Pike', 23, 65, 6.3);
    new MakeStores('SeaTac Airport', 3, 24, 1.2);
    new MakeStores('Seattle Center', 11, 38, 3.7);
    new MakeStores('Capital Hill', 20, 38, 2.3);
    new MakeStores('Alki', 2, 16, 4.6);
}
makeStores();

//This function makes the table header row.
function makeHeaderRow() {
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);
    for(var k = 0; k < hours.length; k++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[k];
        trEl.appendChild(thEl);
    };
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Store Totals';
    trEl.appendChild(thEl);
    table.appendChild(trEl);
};
makeHeaderRow();


//This function makes the rows that populate the cookie data for each store.
function makeBodyRows() {
    for(var l = 0; l < stores.length; l++) {
        var table = document.getElementById('table');
        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = stores[l].name;
        trEl.appendChild(thEl);
        for(var m = 0; m < hours.length; m++) {
            var tdEl = document.createElement('td');
            tdEl.textContent = stores[l].hrlCookies[m];
            trEl.appendChild(tdEl);
        };
        thEl = document.createElement('th');
        thEl.textContent = stores[l].totalCookies;
        trEl.appendChild(thEl);
        table.appendChild(trEl);
    };
};
makeBodyRows();

function handleStore(event) {
    event.preventDefault();/*
    if(!event.login.storename.value || !event.login.mincust.value || !event.login.maxcust.value || !event.login.avgcookies) {return "Fields cannot be empty";
    } else {*/
    var storename = document.getElementById('storename').value;
    var mincust = Number(document.getElementById('mincust').value);
    var maxcust = Number(document.getElementById('maxcust').value);
    var avgcookies = Number(document.getElementById('avgcookies').value);    
    new MakeStores(storename, mincust, maxcust, avgcookies);
    var t = stores.length - 1;
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = stores[t].name;
    trEl.appendChild(thEl);
    for(var n = 0; n < hours.length; n++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = stores[t].hrlCookies[n];
        trEl.appendChild(tdEl);
    };
    thEl = document.createElement('th');
    thEl.textContent = stores[t].totalCookies;
    trEl.appendChild(thEl);
    table.appendChild(trEl);
    document.getElementById('storename').value = '';
    document.getElementById('mincust').value = '';
    document.getElementById('maxcust').value = '';
    document.getElementById('avgcookies').value = '';
/*    };*/
};
var newstore = document.getElementById('submit');
newstore.addEventListener('click', handleStore);
