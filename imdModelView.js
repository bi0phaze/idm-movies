var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ItemModel = require('./itemModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: "article",
  className: "new-movie",
  template: _.template($('#movieTmpl').html()),
  render: function() {
    var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    },
    initialize: function(){

    },

  });
