const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/proxy', async (req, res) => {
  try {
    const { url } = req.body
    const response = await axios.get(url)
    console.log('Proxying: ' + url)

    res.status(response.status).send(response.data)
  } catch (error) {
    res.status(500).send('Proxy Error: ' + error.message)
  }
})

app.listen(port, () => {
  console.log(`Local proxy server is running on port ${port}`)
})
