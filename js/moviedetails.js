function getMovie() {
    //Get and show data for an individual movie using omdbapi.com
    let movieId = sessionStorage.getItem('movieId')
    let apiKey = '47a6e2c35f01303879dd1b234a08ee06'
    axios.get(`
    https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        .then((response) => {
            let movie = response.data;
            console.log(movie)
            let companies = ``
            let genres = ``
            $.each(movie.production_companies, (index, company) => {
                companies += `${company.name} `
            })
            $.each(movie.genres, (index, genre) => {
                genres += `${genre.name} `
            })
            let output = `
            <div class="row">
                <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" class="thumbnail">
                </div>
                <div class="col-md-8">
                    <h2>${movie.title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"> Genre: ${genres} </li>
                        <li class="list-group-item"> Released: ${movie.release_date} </li>
                        <li class="list-group-item"> Vote Average: ${movie.vote_average} </li>
                        <li class="list-group-item"> Vote Count: ${movie.vote_count} </li>
                        <li class="list-group-item"> Companies: ${companies} </li>
                    </ul>
                </div>
            </div>
            <div class="jumbotron">
                <div class="movieDiv">
                    <h3> Plot </h3>
                    ${movie.overview}
                    <hr>
                    <a href="#" class="btn btn-primary" onclick="addFavorite('${movieId}')">Add Favorite</a>
                    <a onclick="goToMovieHomePage('${movie.homepage}')" href="#" class="btn btn-secondary"> Home </a>
                </div>
            </div>
        `

            $('#movie').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
}

function goToMovieHomePage(page) {
    window.open(page)
}