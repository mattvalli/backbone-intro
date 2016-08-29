/* 
 * Defines a collection of Single Beer Model Objects
 */

// Namespace our collection for the beer_app
var app = app || {};

// Extend the Base Collection Class from the Backbone Library
app.BeerCollection = Backbone.Collection.extend({
    
    // Define what the Collection Contains/Stores
    model: app.singleBeer
    
});