const mongoose = require('mongoose')
const config = require('config')

const mongo_Connection = mongoose.connect(config.get('mongoURI'), {useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('Connecting...', new Date().getMilliseconds())
    mongoose.connection.close()
})

async function getdbName() {
    console.log('Connect?...', new Date().getMilliseconds())
    const dbname = await mongo_Connection

    console.log(dbname.connection.db.databaseName, new Date().getMilliseconds())
}

getdbName()
