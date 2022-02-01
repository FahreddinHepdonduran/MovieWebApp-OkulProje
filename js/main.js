// Load navbar
$(function () {
    $("#nav-placeholder").load("../components/navbar.html")
})

$(document).ready(() => {
    $('#headerDisplay').hide()
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText)
        e.preventDefault();
    })

    if (document.location.href == "http://127.0.0.1:5501/popular.html") {
        getPopularMovies()
    }

    if (document.location.href == "http://127.0.0.1:5501/toprated.html") {
        getTopRatedMovies()
    }

    if (document.location.href == "http://127.0.0.1:5501/upcoming.html") {
        getUpcomingMovies()
    }
})
