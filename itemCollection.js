// this is a bb collection
var Backbone = require('backbone');
var _ = require('underscore');
var ItemModel = require('./itemModel');


module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/idm',
  model: ItemModel,

  initialize: function(){

    console.log(this.url)

  },
  model: ItemModel
});
