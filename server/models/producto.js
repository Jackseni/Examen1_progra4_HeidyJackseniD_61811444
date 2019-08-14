const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Definir el esquema para el modelo Producto (Valor 5 puntos)

// Nombre: tipo String, requerido: true.
// ii. Precio: tipo Número, requerido: true.
// iii. Creado_en: { tipo: Date, default: Date.now } 


let productoSchema = new Schema({

    nombre: {
        type: String,
        require: [true, 'Nombre necesario']
    },

    precio:{
        type: Number,
        required: [true, 'Precio necesario']
    },

    creado_en: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Producto', productoSchema);