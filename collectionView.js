var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var movieView = require('./imdModelView');
var movieModel = require('./itemModel');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '.body',
  events: {
    'click button': 'submitForm',
    // 'submit form': 'submitForm'
  },
  submitForm: function (event) {
    alert('')
    event.preventDefault();
  },
  newMovie: function(event){
    event.preventDefault();
    var newMovie = {
      title: this.$el.find('input[name="title"]').val(),
      image: this.$el.find('input[name="url"]').val(),
      plot:  this.$el.find('input[name="plot"]').val(),
      released: this.$el.find('input[name="released"]').val()
    };
    console.log(newMovie);
   var newModel = new MovieModel(newMovie);
   this.collection.add(newModel);
   this.addOne(newModel);
   newModel.save();
 },


  initialize: function () {

    this.addAllMovies();
  },
  addOneMovie: function (movieModel) {
    var movieView = new movieView({model: movieModel});
    this.$el.append(movieView.render().el)
  },
  addAllMovies: function () {
    _.each(this.collection.models, this.addOneMovie, this);

  },
});
