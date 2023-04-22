const rutinaController = {};

rutinaController.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM rutina', (err,rutinas) => {
            if(err) {
                res,json(err);
            }
            res.render('rutinas', {
                data:rutinas
            });
        });
    });
};

rutinaController.list_user = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM rutina', (err,rutinas) => {
            if(err) {
                res,json(err);
            }
            res.render('rutinas_user', {
                data:rutinas
            });
        });
    });
};

rutinaController.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO rutina set ?', [data], (err, rutina) =>{
            res.redirect('/rutinas');
        });
    })
    
};

rutinaController.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM rutina WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/rutinas');
        });
    })
};

rutinaController.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM rutina WHERE id = ?', [id], (err, rutina) =>{
            console.log(rutina);
            res.render('rutina_edit' , {
                data : rutina[0]
            });
        });
    })
};

rutinaController.update = (req, res) => {
    const { id } = req.params;
    const newRutina = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE rutina SET ? WHERE id = ?', [newRutina, id], (err,rows) => {
            res.redirect('/rutinas');
        });
    });
};

module.exports = rutinaController;