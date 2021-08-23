const express = require('express')
const cors = require('cors')
const app = express()
app.use( cors() )

const coursesDCI = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']


app.get('/json', (req, res) => {
  res.json( coursesDCI )
})

app.get('/text' , (req,res) => {
  const formatedCourses = coursesDCI.join(', ')
  res.json(formatedCourses)
})

app.get('/html', (req, res) => {
  const formatedCourses = coursesDCI.map(item => {
    if (item === 'Backend'){
      return `<li><b>${item}</b></li>`
    }
    return `<li>${item}</li>`
  })
  const strCourses = `<ul>${formatedCourses.join('')}</ul>`
  res.send(strCourses)
})

app.listen( 5000, () => {
  console.log('SERVER has started successfully on PORT 5000')
})

