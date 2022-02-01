function getMovies(searchText) {
    let apiKey = "47a6e2c35f01303879dd1b234a08ee06"
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
        .then((response) => {
            $('#headerDisplay').show()
            let movies = response.data.results
            console.log(movies)
            let output = ``
            $.each(movies, (index, movie) => {
                let image
                if (movie.poster_path == null) {
                    image = "https://thumb.ibb.co/kJgmxz/default_IMG.png"
                } else {
                    image = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                }
                output += `
                    <div class="col-md-3">
                        <div class="movieBox text-center">                            
                            <a onclick="movieSelected('${movie.id}')" href="#"><img src="${image}"></a>
                            <h5 class="movieTitle">${movie.title}</h5>
                        </div>
                    </div>
                `
            })

            $('#search-movies').html(output)
        })
}

function movieSelected(id) {
    //Sets location to the movie page and stores the id in the session
    sessionStorage.setItem('movieId', id);
    window.location = 'moviedetail.html';
    return false;
}