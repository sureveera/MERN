const express = require("express")
const mydb = require("./models/db")
const sample1 = require("./models/sample")

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("API running")
})

mydb.insertData({
  student_id: 0,
  type: "Sureshhomework",
  score: 3.260969670902558
})
//sample.testfun('Testing')

//console.log(sample1.test1)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
