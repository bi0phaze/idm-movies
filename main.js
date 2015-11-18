
var $ = require('jquery');
var _ = require('underscore');
var ItemCollection = require('./itemCollection');
var CollectionView = require('./CollectionView')
var MovieView = require('./imdModelView');
var ItemModel = require('./itemModel');


$(document).ready(function () {

  var movies = new ItemCollection();
  movies.fetch().then(function(){
    new CollectionView ({collection: movies})

  })

  movies.fetch().then(function(data){
    console.log('movies here', data);
    var oneMovie = movies.at(0);
    var newModelView = new MovieView({model: oneMovie});
    console.log('ATTRIBUTES OF 0',newModelView.model.attributes);

    console.log('moveies', movies);
    console.log('ONE MOVIE',oneMovie);
    console.log(newModelView.render().$el);
  });
});

  // window.itemCollection = new ItemCollection();
  // console.log("before fetch: ", itemCollection);
  // var myModel = new ItemModel({task: "this is a cool task"});
  // myModel.save();
  // itemCollection.fetch().then(function (collectionData) {
  //   console.log(itemCollection);

//  });

//});
