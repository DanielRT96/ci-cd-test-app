import express from 'express'
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Sziasztok!!!')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
