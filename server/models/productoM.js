const express = require('express');
const mongoose = require('mongoose');

const app = express();

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        //require : true
        require: [true, 'El nombre del producto es obligatorio'],
        //default : "Sin nombre"
    },
    marca: {
        type: String,
        require: [true, 'La marca del producto es obligatoria']
    },
    descripcion: {
        type: String,
        require: false,
        default: 'Sin descripción'
    },
    color: {
        type: String,
        require: false,
        default: 'Sin color'
    },
    valor: {
        type: Number,
        require: [true, 'El precio del producto es obligatorio']
    },
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Producto", productoSchema);

