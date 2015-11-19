
var $ = require('jquery');
var _ = require('underscore');
var ItemCollection = require('./itemCollection');
var CollectionView = require('./collectionView')
var MovieView = require('./imdModelView');
var ItemModel = require('./itemModel');


$(document).ready(function () {

  var movies = new ItemCollection();
  movies.fetch().then(function(){
    new CollectionView({collection: movies})
  })

});

  // window.itemCollection = new ItemCollection();
  // console.log("before fetch: ", itemCollection);
  // var myModel = new ItemModel({task: "this is a cool task"});
  // myModel.save();
  // itemCollection.fetch().then(function (collectionData) {
  //   console.log(itemCollection);

//  });

//});
