const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const noteRouter = require('./routes/note')
const categoryRouter = require('./routes/category')

const PORT = 5000 || process.env.PORT

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@toodoo-app.mr2af.mongodb.net/toodoo-app?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser:  true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        )
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/notes', noteRouter)
app.use('/api/categories', categoryRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))