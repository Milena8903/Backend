const express = require("express");
//importo la clase
const AdmiEspecie = require("./AdminEspecie");


class AteneaVetAPI{

    constructor(){

        //puerto
        this.puerto = 3000;
        //objeto espcífico
        //this.app;
        //this.app = express();
        //Otra forma de escribirlo
        this.app = express();
        //clase específica no es una biblioteca
        //creo objeto de la clase
        this.admiEspecie = new AdmiEspecie();
        
        //configurar el cros
       this.app.use(this.configurarCORS);
       this.app.use(express.json());

        //enviar datos desde el servicdor es post
        this.app.post("/crear_especie", (req, res)=>{
            //llamno al metodo usando un objeto
            //del objeto, llame al método
            this.admiEspecie.crearEspecie(req, res);
        }); 

        //obtener datos del servidor es get
        this.app.get("/listar_especies", (req, res)=>{
            this.admiEspecie.listarEspecies(req, res);
        });

    }

    //permite colocar los encabezados para la politica de los
    //navegadores
    configurarCORS(req, res, next){
        //agrego encabezados a las respuestas
        //a res agregue el encabezado
        res.header("Access-Control-Allow-Origin", "*");
        //si no tiene esos metodos q no los acepte
        //objeto que representa la peticion
        res.header("Access-Control-Allow-Methods", "GET, POST");
        //encabezados que son requeridos
        //objeto que represeta la respuesta
        res.header("Access-Control-Allow-Headers", "Content-Type");
        //llamo a la funcion
        next();

    }

    iniciarServidor(){
        //el objeto app de esta instancia va a 
        //comenzar a escuchar
        this.app.listen(this.puerto, ()=>{
            console.log(`Servidor ejecutándose en el puerto: ${this.puerto}`);
        });
        //el puerto lo asocian a una variable 
    }

}

//instanciando al objeto
const ateneaVetAPI = new AteneaVetAPI();

ateneaVetAPI.iniciarServidor();

