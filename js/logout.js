function logOut() {
    window.localStorage.removeItem('user')
    window.location.replace('../index.html')
}