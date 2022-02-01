function createUser() {
    const email = document.getElementById('createEmail').value
    const password = document.getElementById('createPassword').value
    
    if (validateEmail(email) && validatePassword(password)) {
        axios.post('http://localhost:3003/register', { email: email, password: password })
        .then((response) => {
            console.log(response)
            const user = {
                id : response.data.id,
                email : email,
                password : password
            }
            window.localStorage.setItem('user', JSON.stringify(user))
            window.location.replace('../index.html')
        })
        .catch((error) => {
            console.log(error.response.status)
            if (error.response.status == 403) {
                alert('user exist')
            }
        })
    } else {
        alert("enter valid email password.")
    }
}