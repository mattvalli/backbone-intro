/* 
 * View code for a Single Beer Object
 */
// Require Jade
if (app.LOG_IMPORTS)
console.log("Importing app_server.backbone_views.singleBeerView");

// Namespace our beer_app
var app = app || {};

// The view for a single model view, which is one beer
app.singleBeerView = Backbone.View.extend({
    "tagname": "article",
    "className": "beerListItem",
    
    // Template
    "template": _.template($("#beerElement").html() ),
    
    // Render Method
    "render": function() {
        console.log("Enter app_server.backbone_views.view_singleBeerView.render");
        // Pass the Data to the Template via the Model Object
        var beerTemplate = this.template(this.model.toJSON());
    
        // Passing the template to EL using jQuery
        this.$el.html(beerTemplate);
        return this;
    },
    
    // Events
    "events": {
        "mouseover": "addBackgroundColor",
        "mouseout": "removeBackgroundColor"
    },
    
    // Event Methods
    "addBackgroundColor": function() {
        // Use jQuery to update/add html styles
        this.$el.css("background-color","#CCCCCC");
    },
    "removeBackgroundColor": function() {
        // Use jQuery to update/remove html styles
        this.$el.css("background-color","");
    }
});