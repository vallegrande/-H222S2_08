/* Importar Librerias */
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


/* Configuraciones */
app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "dbFormularios"
    }
);

conexion.connect(
    function (error){
        if (error){
            throw error;
        } else {
            console.log("Conexion exitosa");
        }
    }
);

const port = process.env.PUERTO || 3001;

app.listen(
    port, function() {
        console.log("Servidor funcionando en puerto: "+ port)
    }
);

app.post(
    "/api/registro", (req, res) => {
        let data = {
            nombres: req.body.NOMBRES,
            apellidos: req.body.APELLIDOS,
            telefono: req.body.TELEFONO,
            correo: req.body.CORREO,
            mensaje: req.body.MENSAJE,
        }
        let sql = "INSERT INTO registro SET ?";
        conexion.query(
            sql, data, function (error, resultados) {
                if (error) {
                    throw error;
                } else {
                    console.log(data),
                    res.send(data)
                }
            }
        );
    }
);
// localhost:3001/api/registro