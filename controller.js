// TODO: Llamar la URL 
const url = "http://localhost:3001/api/registro";

let result = '';

const formArticulo = document.querySelector("form");

const nombres = document.getElementById("NOMBRES");
const apellidos = document.getElementById("APELLIDOS");
const telefono = document.getElementById("TELEFONO");
const correo = document.getElementById("CORREO");
const mensaje = document.getElementById("MENSAJE");

let option = '';

// Boton crear
btnCrear.addEventListener(
    "click", () => {
        console.log("boton activado");
        option = 'crear';
    }
);

// Formulario 
formArticulo.addEventListener(
    'submit',(e) => {
        e.preventDefault();
        if(option == 'crear'){
            if( nombres.value == "" || apellidos.value == ""|| telefono.value == ""|| correo.value== ""|| mensaje.value==""){
                alert("Asegurese de que todo los rubros esten completos");
                } else {
                    console.log("Todos los campos estan completos");               
                    fetch(
                        url, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(
                                {
                                    NOMBRES: NOMBRES.value,
                                    APELLIDOS: APELLIDOS.value,
                                    TELEFONO: TELEFONO.value,
                                    CORREO: CORREO.value,
                                    MENSAJE: MENSAJE.value
                                }
                            )
                        }
                    )
                    .then(
                        response => response.json()
                    )
                    .then(
                        response => location.reload()
                    );
                }
            }
        }
    );
        
             