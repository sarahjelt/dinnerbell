// function initialize() {
//   console.log('running');
//   const foodThing = $('.searchbar').attr('searchbar');
//   const queryURL = 'http://food2fork.com/api/search?key=7743a1c8012c773852737a26cf2f7c3f&q=' + foodThing;

//   $.ajax({
//     url: queryURL,
//     dataType: "json",
//     method: "GET"
//   })
//   .done(function(response) {
//     var results = response.recipes;
//     console.log(results);

//     for (let i = 0; i < results.length; i++) {
//       const recipeDiv = $('<div class="recipe">')
//       const mealName = results[i].title;
//       const picture =results[i].image_url;
//       const p = $('<p>').text(mealName);
//       const img = $('<img>');

//       img.attr('src', picture);

//       recipeDiv.prepend(p);
//       recipeDiv.prepend(img);
//       $('#tiles-go-here').prepend(recipeDiv);
//     }
//   })

// };

$('#submit').on('click', function(event) {
  event.preventDefault();
  const searchTerm = $('#searchbar').val().trim();

  console.log('running');
  const queryURL = 'http://food2fork.com/api/search?key=7743a1c8012c773852737a26cf2f7c3f&q=' + searchTerm;

  $.ajax({
    url: queryURL,
    dataType: "json",
    method: "GET"
  })
  .done(function(response) {
    var results = response.recipes;
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      const recipeDiv = $('<div class="recipe">')
      const mealName = results[i].title;
      const picture = results[i].image_url;
      const url = results[i].source_url;
      // const p = $('<p>').text(mealName);
      const img = $('<img>');
      const a = $('<br><a>');

      img.attr('src', picture);
      a.attr('href', url);
      a.attr('target', '_blank').text(mealName);
      recipeDiv.prepend(a);
      recipeDiv.prepend(img);
      $('#tiles-go-here').prepend(recipeDiv);
    }
  });

});

// $(document).on("click", "button", initialize);
