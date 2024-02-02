var ruta=require("express").Router();
var { mostrarProductos } = require("../bd/productosBD");


ruta.get("/api/mostrarProductos",async(req,res)=>{
    var productos = await mostrarProductos();
    //console.log(usuarios);
    //res.render("usuarios/mostrar",{usuarios});
    if(productos.length>0)
        res.status(200).json(productos);
    else
        res.status(400).json("No hay productos");
    
});

module.exports=ruta;