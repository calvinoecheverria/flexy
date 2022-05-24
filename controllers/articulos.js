
const { response } = require('express');

const Articulo = require('../models/articulo'); // MODEL

const getArticulos = async(req, res = response) => {
    //      const sce = await Docencia.find()
    //        res.json({
    //            ok: true,
    //            sce }) }
try {
    const articulos = await Articulo.find();
        res.json(articulos)
  } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener Articulos'); } }

//const getArticulos = async(req, res = response) => {
//    const articulos = await Articulo.find()
//                                    .populate('usuario','nombre img')// TRAE NOMBRE E IMG
//                                    .populate('medico','apellido')
//                                    .populate('medico')// TRAE TODA LA INFO
//                                    .populate('hospital','nombre imagen')
//        res.json({
//            ok: true,
//            articulos
//        })
//    }

const getArticuloById = async(req, res = response) => {
    try {
        let articulo = await Articulo.findById(req.params.id);
        if(!articulo) {
            res.status(404).json({ msg: 'Error al obtener articulo' })
        }
            res.json(articulo);
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error'); } }

const getArticuloPorArtista = async () => { // LEIFER MENDEZ
    // 1 Articulos
    const resultado = await Articulo.agregate(
        [
            { 
                $lookup: {
                    from:"Medico", // 2 artista
                    localField: "apellido", // 1 articulo
                    foreignField: "_id", // 2
                    as: "articuloArtista" // ALIAS
                }
            },
            { $unwind: "articuloArtista" },
            { $match: {periodo: "Cinquecento"}} // CAPA LOOKUP
        ]
    )
    console.log('***** RESULTADO *****', resultado) // JSON.stringify(resultado)
    }

const getPeriodosConArticulos = async () => { // LEIFER MENDEZ
       // 1 Articulos
       const resultado = await Articulo.agregate(
        [
            { 
                $lookup: {
                    from:"Hospital", // 2 artista
                    let: {
                        aliasNombrePeriodos:"$periodos"
                    },
                    pipeline: [
                        {$match: {
                            $expr: {
                                $in: ["$name", "$$aliasNombrePeriodos"]// Periodo
                            }
                        }}
                    ],
                    as: 'listaDePeriodos'
                }
            }
        ]
    )
    console.log('***** RESULTADO *****', JSON.stringify(resultado))
}

const crearArticulo = async (req, res = response) => {
    const uid = req.uid;
    const articulo = new Articulo({
        usuario: uid,
        ...req.body
        });
            try {
                const articuloDB = await articulo.save();
                res.json({
                    ok: true,
                    articulo: articuloDB
                })
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    msg: 'Hable con el administrador'
                })
            }
        }
            
module.exports = {
    getArticulos,
    getArticuloById,
    getArticuloPorArtista,
    getPeriodosConArticulos,
    crearArticulo
}

