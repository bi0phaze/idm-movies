var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var MovieView = require('./imdModelView');
var ItemModel = require('./itemModel');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '.body',
  events: {
    'click button': 'newMovie',
    // 'submit form': 'submitForm'
  },
  newMovie: function(event){
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      image: this.$el.find('input[name="url"]').val(),
      plot:  this.$el.find('input[name="plot"]').val(),
      released: this.$el.find('input[name="released"]').val(),
      rating: this.$el.find('input[name="rating"]').val()
    };
    console.log(newMovie);
   var newModel = new ItemModel(newMovie);
   this.collection.add(newModel);
   this.addOneMovie(newModel);
   newModel.save();
 },


  initialize: function () {

    this.addAllMovies();
  },
  addOneMovie: function (itemModel) {
    console.log(itemModel);
    var movieView = new MovieView({model: itemModel});
    this.$el.append(movieView.render().el)
  },
  addAllMovies: function () {
    _.each(this.collection.models, this.addOneMovie, this);
  },
});
