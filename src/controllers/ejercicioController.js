const ejercicioController = {};

ejercicioController.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM ejercicio', (err,ejercicios) => {
            if(err) {
                res,json(err);
            }
            res.render('ejercicios', {
                data:ejercicios
            });
        });
    });
};

ejercicioController.liste = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM ejercicio', (err,ejercicios) => {
            if(err) {
                res,json(err);
            }
            res.render('ejercicio', {
                data:ejercicios
            });
        });
    });
};


ejercicioController.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO ejercicio set ?', [data], (err, ejercicio) =>{
            res.redirect('/ejercicios');
        });
    })
    
};

ejercicioController.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM ejercicio WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/ejercicios');
        });
    })
};

ejercicioController.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM ejercicio WHERE id = ?', [id], (err, ejercicio) =>{
            console.log(ejercicio);
            res.render('ejercicio_edit' , {
                data : ejercicio[0]
            });
        });
    })
};

ejercicioController.update = (req, res) => {
    const { id } = req.params;
    const newEjercicio = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE ejercicio SET ? WHERE id = ?', [newEjercicio, id], (err,rows) => {
            res.redirect('/ejercicios');
        });
    });
};

module.exports = ejercicioController;