module.exports = {
  movie: [

     "<h4> <%= title %> </h4>",
     "<img src = "<%= image %>" />",
     "<p> <%= plot %> </p>",
     "<h3> <%= released %> </h3>",
     "<h2> <%= rating %> </h2>",

  ].join(""),
  form: [
    "<section class="container">",

      "<input type="text" name="title" value="" placeholder="title" class="title">",
      "<input type="text" name="url" value="" placeholder="url" class="url">",
      "<input type="text" name="plot" value="" placeholder="plot" class="plot">",
      "<input type="text" name="released" value="" placeholder="released" class="released">",
      "<input type="text" name="rating" value="" placeholder="rating" class="rating">",
      "<button type="button" name="button">Add Movie</button>",

    "</section>"
  ].join(""),
  header: [
    "<h2>HEADER</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
  footer: [
    "<h2>Footer</h2>",
    "<nav>",
    "<ul>",
    "<li>home</li>",
    "</ul>",
    "</nav>"
  ].join(""),
};
