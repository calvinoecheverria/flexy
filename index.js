require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();

// Directorio público
app.use( express.static('public') );

// Rutas
app.use( '/api/artistas', require('./routes/artistas') );// ROUTES
app.use( '/api/sce', require('./routes/sce') );// ROUTES
app.use( '/api/docencia', require('./routes/docencia') );// ROUTES
app.use( '/api/proyectos', require('./routes/proyectos') );// ROUTES
app.use( '/api/periodos', require('./routes/periodos') );// ROUTES
app.use( '/api/obras', require('./routes/obras') );// ROUTES
app.use( '/api/articulos', require('./routes/articulos') );// ROUTES
app.use( '/api/escuelas', require('./routes/escuelas') );// ROUTES
app.use( '/api/todo', require('./routes/busquedas') );// ROUTES



app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/upload', require('./routes/uploads') );

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

