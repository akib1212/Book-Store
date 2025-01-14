const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config();


const dbUrl = process.env.DB_URL;
main().then(() => console.log(`MongoDB Connected`)).catch(err => console.log(`database is disconnected`,err));
async function main() {
    await mongoose.connect(dbUrl );

    app.use('/', (req, res) => {
        res.send('Hello World! 2025')
    })
}
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

// pass: O5G3Ghf0QZO8rVJD
// name: akibmahamud55