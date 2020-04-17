const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json({ extended: false }))
app.use(cors())
const axios = require('axios')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/getall', (req, res) => {

    axios.get('https://api.covid19api.com/summary')
        .then(data => res.json(data.data))
        .catch(err => console.log(err))

})

app.post('/getdaily/:country', (req, res) => {

    axios.get(`https://api.covid19api.com/dayone/country/${req.params.country}`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err))

})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})