/* 
 * Manages routes for Backbone SPA
 */
// Namespace our app
var app = app || {};

app.Router = Backbone.Router.extend({
    "routes": {
        "": "noCopy",
        "russianRiver/IPA/blindPig": "blindPigMessage",
        "plinyElder": "plinyElderMessage",
        "plinyYounger": "plinyYoungerMessage"
    },
    
    // Router Methods
    "noCopy": function() {
        $("#copy").html("");
    },
    
    "blindPigMessage": function() {
        $("#copy").html("<p>The Locals' Choice of Russian River Brewing Co.</p>");
    },
    
    "plinyElderMessage": function() {
        $("#copy").html("<p>The highest rated IPA available year-round!</p>");
    },
    
    "plinyYoungerMessage": function() {
        $("#copy").html("<p>The highest rating possible..."
        + "This beer release once a year for a 2 week period.</p>"
        + "<p>Get it if you can!</p>");
    }
    
});