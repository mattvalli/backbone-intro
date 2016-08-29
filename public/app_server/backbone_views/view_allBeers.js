/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Namespace our beer_app
var app = app || {};

// The view for a single model view, which is one beer
app.allBeersView = Backbone.View.extend({
    "tagname": "section",
    "className": "beerList",
    
    "template": _.template($("#beerElement").html() ),
    "render": function() {
        // Pass the Data to the Template via the Model Object
        this.collection.each(this.addBeer, this);
        return this;
    },
    "addBeer": function(beer) {
        console.log("Enter app_server.backbone_views.view_allBeers.addBeer");
        console.log(beer.toJSON());
        // Create and Pass data to the Single Beer View
        var beerView = new app.singleBeerView({"model":beer});
        console.log(beerView);
        // Append the Current Beer View to the List of Beers already constructed
        this.$el.append(beerView.render().el);
    }
});