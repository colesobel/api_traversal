 $(document).ready(function() {


     $('#submit').click(function() {
         event.preventDefault()
         var userInput = $('#input').val()

         $.ajax({
             url: `http://www.omdbapi.com/?s=${userInput}`,
             success: function(data) {
                 data.Search.forEach(function(elem) {
                     $('#center_column').append(`<h3>${elem.Title}</h3>`)
                     if (elem.Poster === 'N/A') {
                         $('#center_column').append(`<img class="movie_poster" src="mockups/images/no_image.png">`)
                     } else {
                         $('#center_column').append(`<img class="movie_poster" src="${elem.Poster}">`)
                     }
                 })
             }
         })




     })

 })
