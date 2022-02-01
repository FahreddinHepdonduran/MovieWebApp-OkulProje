function loginUser() {
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value

    if (validateEmail(email) && validatePassword(password)) {
        axios.post('http://localhost:3003/login', { email: email, password: password })
        .then((response) => {
            console.log(response)
            window.localStorage.setItem('user', JSON.stringify(response.data))
            window.location.replace("../index.html")
        })
        .catch((error) => {
            if (error.response.status == 404) {
                alert("user not exist")
            }
        })
    } else {
        alert("enter valid email password.")
    }
}