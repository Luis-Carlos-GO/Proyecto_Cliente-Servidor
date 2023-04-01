const sql = require('mssql');

const config = {
    server: '127.0.0.1\MSSQLSERVER,1433',
    database: 'Proyecto_Cliente_Servidor',
    options: {
        trustedConnection: true
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect().then(() => {
    // realizar consultas y otras operaciones aquí
}).catch(err => {
    // manejar errores de conexión aquí
});
