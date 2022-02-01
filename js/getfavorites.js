function getUserFavorites() {
    const user = JSON.parse(window.localStorage.getItem('user'))
    console.log(user.id)
    axios.post('http://localhost:3003/getfavorites', { userId: user.id })
        .then((response) => {
            console.log(response)
            const films = response.data
            let output = ""
            $.each(films, (index, film) => {
                const apiKey = "47a6e2c35f01303879dd1b234a08ee06"
                axios.get(`https://api.themoviedb.org/3/movie/${film.filmId}?api_key=${apiKey}`)
                    .then((response) => {
                        const movie = response.data
                        console.log(movie)
                        let image
                        if (movie.poster_path == null) {
                            image = "https://thumb.ibb.co/kJgmxz/default_IMG.png"
                        } else {
                            image = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        }
                        $("#favorite-movies").append(` 
                        <div class="col-md-3">
                        <div class="movieBox text-center">                            
                            <a onclick="movieSelected('${movie.id}')" href="#"><img src="${image}"></a>
                            <h5 class="movieTitle">${movie.title}</h5>
                        </div>
                    </div>
                        `)
                    })
            })
        })
        .catch((err) => {
            console.log(err)
        })
}