function getPopularMovies() {
    let apiKey = "47a6e2c35f01303879dd1b234a08ee06"
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then((response) => {
            let movies = response.data.results
            console.log(movies)
            let output = ``
            $.each(movies, (index, movie) => {
                output += `
                    <div class="col-md-3">
                        <div class="movieBox text-center">                            
                            <a onclick="movieSelected('${movie.id}')" href="#"><img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}"></a>
                            <h5 class="movieTitle">${movie.title}</h5>
                        </div>
                    </div>
                `
            })

            $('#popular-movies').html(output)
        })
}