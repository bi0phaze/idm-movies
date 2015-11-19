// Item Model

var Backbone = require('backbone');


module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/idmbb',
  idAttribute: '_id',
  defaults: function () {
    //its doing something
    return {
      title: " ",
      url: " ",
      plot: " ",
      released: " ",
      rating: " "
      };

    },

  initialize: function () {

  }
});
