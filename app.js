require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const bookingRoute = require('./routes/booking-route')
const movieRoute = require('./routes/movie-route')
const paymentRoute = require('./routes/payment-route')
const usersRoute = require ('./routes/users-route')
const ticketsRoute = require ('./routes/tickets-route')
const showtimesRoute = require ('./routes/showtimes-route')
const seatRoute = require ('./routes/seat-route')

const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute)
app.use('/booking',bookingRoute)
app.use('/movie', movieRoute)
app.use('/payment', paymentRoute)
app.use('/user', usersRoute)
app.use('/tickets', ticketsRoute)
app.use('/showtimes', showtimesRoute)
app.use('/seat', seatRoute)


// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))