//import {PrismaClient } from '@prisma/client'

//importe el objeto prisma cliente
//desde el paquete4 prisma cliente
const {PrismaClient} = require('@prisma/client')

class AdmiEspecie{

    constructor(){
        this.prisma = new PrismaClient()
    }

    //La funcion que se conecte a la bd debe ser asincrona
    //metodos
    async crearEspecie(req, res){
        const datos = req.body; //datos q vienen de la petición
        
        //guardar los datos
        //ejecute await en el cliente
        const especie = await this.prisma.especie.create(
            {
            //crear un nuevo elemento en la bd
            data:datos
            //se crea una nueva fila dentro de la tabla especie
            //en prisma
            //en la petición venga un json con los datos q requiere 
            //la petición
            }
        );
        res.json(especie);
    }

    async listarEspecies(req, res){
        const especies = await this.prisma.especie.findMany();
        //q el objestjo respons, q me responda
        res.json(especies);
    }
}

module.exports = AdmiEspecie;