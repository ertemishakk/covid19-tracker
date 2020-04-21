const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json({ extended: false }))
app.use(cors())
const axios = require('axios')
const keys = require('./config/keys_dev')
const validateForm = require('./validateForm')
const sgMail = require('@sendgrid/mail');
var path = require('path');


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
    axios.get(`https://api.covid19api.com/total/dayone/country/${req.params.country}`)
        .then(data => res.json(data.data))
        .catch(err => console.log(err))

})

app.post('/symptoms', (req, res) => {

    var age = req.body.age
    var sex = req.body.sex
    var evidence = []
    if (req.body.evidence) {
        evidence = req.body.evidence
    }

    let axiosHeaders = {
        headers: {
            'App_Id': keys.infermedica_app_id,
            'App-Key': keys.infermedica_app_key,
            'Content-Type': 'application/json'
        }
    }

    var dataString = {
        sex,
        age,
        evidence
    }

    axios.post('https://api.infermedica.com/covid19/diagnosis', dataString, axiosHeaders)
        .then(data => {
            if (data.data.should_stop === false) {
                res.json(data.data)
            } else {

                axios.post('https://api.infermedica.com/covid19/triage', dataString, axiosHeaders)
                    .then(data => {

                        res.json(data.data)
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))

})


app.post('/contact', (req, res) => {
    const { errors, isValid } = validateForm(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    sgMail.setApiKey(keys.sendGridAPI)

    const msg = {
        to: 'ertemishakk@gmail.com',
        from: req.body.email,
        subject: req.body.name + ' has sent you a message with subject: ' + req.body.subject,
        html: `<strong>` + req.body.message + `</strong>`,
    }

    sgMail.send(msg)

    res.json({ success: 'Your message has been sent.' })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})