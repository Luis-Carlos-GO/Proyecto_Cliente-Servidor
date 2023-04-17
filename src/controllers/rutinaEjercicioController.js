const rutinaEjercicioController = {};

rutinaEjercicioController.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM rutinaejercicio', (err,rutinasejercicios) => {
            if(err) {
                res,json(err);
            }
            res.render('rutinasejercicios', {
                data:rutinasejercicios
            });
        });
    });
};

module.exports = rutinaEjercicioController;