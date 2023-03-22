import {app} from './app.js';

app.get('/', (req, res) => {
    res.send('<h1>Working Fine</h1>');
})

app.get('/user', (req, res) => {
    res.status(200).json({
        users: [],
        success: true
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is working on PORT ${process.env.PORT}`)
} )