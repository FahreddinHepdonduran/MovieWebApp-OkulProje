function validateEmail(email) {
    const ck_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ 

    if (ck_email.test(email)) {
        return true
    } else { 
        console.log("wrong email")
        return false 
    }
}

function validatePassword(password) {
    if (password.length < 8) {
        return false
    } else { return true }
}