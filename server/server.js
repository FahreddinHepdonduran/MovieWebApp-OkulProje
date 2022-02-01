const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
    console.log('login user...')
    const email = req.body.email
    const password = req.body.password
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12881288',
        database: 'InternDB'
    })
    connection.query('SELECT * FROM Users WHERE email = ?', [email], (err, result) => {
        if (err) console.log(err)
        if (result.length == 0) {
            res.sendStatus(404)
        } else {
            res.json(result[0])
        }
    })
})

app.post('/register', (req, res) => {
    console.log('register user...')
    console.log(req.body.email + req.body.password)
    const email = req.body.email
    const password = req.body.password
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12881288',
        database: 'InternDB'
    })

    connection.query('SELECT * FROM Users WHERE email = ?', [email], (err, result) => {
        if (err) console.log(err)
        if (result.length == 0) {
            connection.query('INSERT INTO Users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
                if (err) console.log(err)
                console.log(result)
                const userId = {
                    id: result.insertId
                }
                res.json(userId)
            })
        } else {
            res.sendStatus(403)
        }
    })
})

app.post('/addfavorites', (req, res) => {
    const userId = req.body.userId
    const filmId = req.body.filmId

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12881288',
        database: 'InternDB'
    })    
    connection.query('SELECT * FROM Favorites WHERE userId = ? AND filmId = ?', [userId, filmId], (err, result) => {
        if (err) console.log(err)
        if (result.length == 0) {
            connection.query('INSERT INTO Favorites (userId, filmId) VALUES (?, ?)', [userId, filmId], (err, result) => {
                if (err) console.log(err)
            })
        } else {
            res.sendStatus(403)
        }
    })
})

app.post('/getfavorites', (req, res) => {
    const userId = req.body.userId
    console.log(userId)
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12881288',
        database: 'InternDB'
    })   

    connection.query('SELECT filmId FROM Favorites WHERE userId = ?', [userId], (err, result) => {
        if (err) console.log(err)
        if (result.length == 0) {
            res.sendStatus(404)
        } else {
            res.json(result)
        }
    })
})

app.listen(3003, () => {
    console.log('Listenning...')
})