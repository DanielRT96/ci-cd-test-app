import express from 'express'
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('This was deployed by CircleCI!!!lol')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
console.log('asd')
