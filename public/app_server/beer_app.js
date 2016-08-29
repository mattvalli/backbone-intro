/* 
 * The Main File for our Backbone Application
 */
var app = app || {};
app.baseUrl = "http://localhost:3000";
app.LOG_IMPORTS = true;

// Create some Dumbie data to be used for testing
var russianRiver_BlindPig = new app.singleBeer({
    "brand": "Russian River Brewing Co.",
    "craftStyle": "IPA",
    "name": "Blind Pig I.P.A.",
    "ABV": 6.25,
    "rating": 97,
    "price": 7.00,
    "link": "russianRiver/IPA/blindPig"
});

var russianRiver_PlinyElder = new app.singleBeer({
    "brand": "Russian River Brewing Co.",
    "craftStyle": "IPA",
    "name": "Pliny the Elder",
    "ABV": 8.00,
    "rating": 98,
    "price": 6.00,
    "link": "plinyElder"
});

var russianRiver_PlinyYounger = new app.singleBeer({
    "brand": "Russian River Brewing Co.",
    "craftStyle": "IPA",
    "name": "Pliny the Younger",
    "ABV": 10.25,
    "rating": 100,
    "price": 8.00,
    "link": "plinyYounger"
});

// Testing Output
console.log(russianRiver_BlindPig.toJSON());
console.log(russianRiver_PlinyElder.toJSON());
console.log(russianRiver_PlinyYounger.toJSON());



// Instantiate the Collection
var beers = new app.BeerCollection([
    russianRiver_BlindPig,
    russianRiver_PlinyElder,
    russianRiver_PlinyYounger
]);

// Sample an On-Change Event
// Updated Blind Pig
russianRiver_BlindPig.set('price', 10.00);
console.log(beers.toJSON());

// Pass the data to the Backbone Html Template via a Backbone collection
var beerGroupView = new app.allBeersView({collection: beers});

// Render the View templates and population the HTML page
$("#allBeers").html(beerGroupView.render().el);

// Instantiate the App Router
var app_router = new app.Router();
// Keep track of the User Select Routes for Back Button Feature
Backbone.history.start();

/*
// Add an instance to the collection array using the 'add' method
var dumbieBeer = new app.singleBeer({});
beers.add(dumbieBeer);
console.log(beers.toJSON());

// Remove Dumbie Beer
beers.remove(dumbieBeer);
console.log(beers.toJSON());
*/