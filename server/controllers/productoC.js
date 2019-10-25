const express = require('express');
const app = express();

const Producto = require("../models/productoM"); 

app.get('/', function (req, res) {
    res.json({
        'succes': true,
        'mensaje' : 'Bienvenido al API de NODEJS + MONGODB + ROBO 3T',
        'data' : []
      })
  });
  
  app.get('/productos', function (req, res) {

        Producto.find({})
                            .exec((err,listaproducto ) => {
                                    if(err){
                                        return res.status(400).json({
                                            'succes': false,
                                            'mensaje' : err,
                                            'data' : []
                                        });
                                    }
                            });
            return res.json({
        'succes': true,
        'mensaje' : 'listaproducto',
        'data' : listaproducto
      })
  });
  
 /* app.get('/producto/:id', function (req, res) {
      res.json({
          'data' : `Aquí recibí el ID para mostrar un producto. ID: ${req.params.id}`
      })
  });
*/


  app.post('/producto', function (req, res) {
      let datos = req.body;
  
     let producto = new Producto({
         nombre: datos.nombre,
         branch: datos.branch,
         descripcion: datos.descripcion,
         color: datos.color,
         const: datos.const

     });

     producto.save((err, productoDB) => {
            if(err){
                return res.status(400).json({
                    'success': true,
                    'mensaje': err,
                    'data': []
                });
            }
            return res.status(400).json({
                'success': true,
                'mensaje': "Producto guardado",
                'data': []
            });
     });

  app.put('/producto/:id', function (req, res) {
    let datos = req.body;

    if(datos.nombre == undefined || datos.marca == undefined || datos.color == undefined){
        res.status(400).json({
            "err" : "Datos incompletos"
        });
    }else{
        res.json({
            'data' : req.body
        })
    }
});