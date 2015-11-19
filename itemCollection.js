// this is a bb collection
var Backbone = require('backbone');
var _ = require('underscore');
var ItemModel = require('./itemModel');



module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/idmbb',
  model: ItemModel,

  initialize: function(){


  },
  // model: ItemModel
});
