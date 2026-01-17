const express = require('express')
const app = express()
const port = 4000

require('./connection');

app.use(express.json());

const UserRoutes=require('./Routes/user');


app.use('/api/user',UserRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
