const composicionCorporalController = {};

composicionCorporalController.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM composicioncorporal', (err,composicioncorporal) => {
            if(err) {
                res,json(err);
            }
            res.render('composicioncorporal', {
                data:composicioncorporal
            });
        });
    });
};

module.exports = composicionCorporalController;