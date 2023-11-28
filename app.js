const exress = require('express')
const router = require('./router/route')

require('dotenv').config()
const port = process.env.PORT || 5001
const app = exress()

const database = require('./config/database')
app.set('view engine', 'ejs')
app.use(exress.static('public'))
app.use(exress.json())
app.use(exress.urlencoded({ extended: true }))

app.use('/', router)
app.all('*', (req, res) => { return res.status(404).send('<h1>404, Sahypa tapylmady!</h1>') })

app.listen(port, async () => {
    try {
        await database.authenticate()
        await database.sync({ alter: true })
        console.log('Database authenticate...')
        console.log(`Server is running: http://localhost:${port}`)
    } catch (error) {
        console.error('Error occurred: ', error)
    }
})