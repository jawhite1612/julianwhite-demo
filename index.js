const express = require('express')
const path = require('path')
const fs = require('fs');
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('images', path.join(__dirname, 'images'))
  .set('scripts', path.join(__dirname, 'scripts'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/image_test'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

