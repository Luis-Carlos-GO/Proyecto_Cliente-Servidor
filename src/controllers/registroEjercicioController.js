const registroEjercicioController = {};

registroEjercicioController.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM registroEjercicios', (err,registroejercicios) => {
            if(err) {
                res,json(err);
            }
            res.render('registroejercicios', {
                data:registroejercicios
            });
        });
    });
};



module.exports = registroEjercicioController;