
// Namespace our App
var app = app || {};

// Construct the Model Class
app.singleBeer = Backbone.Model.extend({
    
    /* Supplies default values to an Object Instantiated without the provided
     * properties
     */
    defaults: {
        "brand":    "Brewski Beer Co.",
        "craftStyle": "Specialty",
        "name":     "Brewski",
        "rating": 0,
        "price": 0,
        "img":      "images/placeholder.jpg"
    },
    
    /* Initialize - usually called when there is a change to an instance of the
     * model
     */
    initialize: function() {
        console.log("A Single Beer model instance named " + this.get("name") + " has been created and it costs $" + this.get("price") );
        
        // Registar object for On Change Observation
        this.on("change:price", function() {
            console.log(this.get("name") + " has updated its price to $" + this.get("price"));
        });
    }
});

