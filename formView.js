var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var ItemModel = require('./itemModel');

module.exports = Backbone.View.extend({
  className: 'addMovie',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'onAddMovie'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new ItemModel();
    }
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
  //   console.log(newMovie);
  //  var newModel = new ItemModel(newMovie);
  //  this.collection.add(newModel);
  //  this.addOneMovie(newModel);
  //  newModel.save();  old code ///////

  this.model.set(newMovie);
    this.model.save();
    this.$el.find('input, textarea').val('');
 },

  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
