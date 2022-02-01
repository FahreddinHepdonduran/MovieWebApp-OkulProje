function addFavorite(id) {
    if (window.localStorage.getItem('user')) {
        const user = JSON.parse(window.localStorage.getItem('user'))

        axios.post('http://localhost:3003/addfavorites', { userId: user.id, filmId: id })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            if (error.response.status == 403) {
                alert("already added.")
            }
        })
    } else {
        alert('not logged in.')
    }
}