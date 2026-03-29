require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')

const app = express()

// Connect DB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/tasks', taskRoutes)

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({message: 'Server Error'})
})

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
)
