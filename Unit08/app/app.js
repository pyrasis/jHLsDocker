const express = require('express')
const mysql = require('mysql')

const app = express()

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
})

app.get('/', (req, res) => {
  connection.query("INSERT INTO Users (id, password) VALUES ('hellouser', 'hellopassword');", (error, rows, fields) => {
    connection.query('SELECT * from Users;', (error, rows, fields) => {
      console.log(rows)
      res.send(rows[0])
    })
  })
})

app.listen(8080, () => {
  console.log('Express server listening on port 8080')
})
