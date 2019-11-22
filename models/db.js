const mongoose = require("mongoose")
const config = require("config")

const mongo_Connection = mongoose.connect(
  config.get("mongoURI"),
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connecting...", new Date().getMilliseconds())
    //mongoose.connection.close()
  }
)

const getDBName = async function(data) {
  console.log("Connect?...", new Date().getMilliseconds())
  const dbname = await mongo_Connection

  console.log(dbname.connection.db.databaseName, new Date().getMilliseconds())
  dbname.connection.db.collection("scores").insertOne(data, (err, result) => {
    if (err) console.log(err)
    else console.log(result)
  })
}

module.exports.insertData = getDBName
