const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/api/dashboard", (req, res) => {
  res.json({
    users: 1200,
    sales: 900,
    revenue: 15000,
    orders: 320,

    monthly: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 600 },
      { name: "Mar", value: 800 },
      { name: "Apr", value: 700 },
      { name: "May", value: 900 },
      { name: "Jun", value: 750 },
    ],

    traffic: [
      { name: "Direct", value: 40 },
      { name: "Social", value: 30 },
      { name: "Referral", value: 30 },
    ],
  })
})

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000")
})