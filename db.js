const mongoose = require('mongoose')
const url = 'mongodb://localhost/Ciclo4A_CALI'

mongoose.connect(url)

const db = mongoose.connection
db.on('error',console.error.bind(console,'Error al conectar a MongoDB'))
db.once('open',function callback(){
    console.log("Conectado con exito a la Base de datos de cali")
})

module.exports = db

