const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM customer', (err,customers) => {
            if(err) {
                res,json(err);
            }
            res.render('customers', {
                data:customers
            });
        });
    });
};

controller.admin = (req,res)=>{
    res.render('admin')
};

controller.menu = (req,res)=>{
    res.render('menu')
};

controller.preferences = (req,res)=>{
    res.render('preferences')
};

controller.profile = (req,res)=>{
    res.render('profile')
};

controller.workpages = (req,res)=>{
    res.render('WorkPage')
};

controller.signin = (req,res)=>{
    res.render('SignIn')
};

controller.login = (req,res)=>{
    res.render('login')
};


controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customer set ?', [data], (err, customer) =>{
            res.redirect('/');
        });
    })
    
};

controller.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) =>{
            console.log(customer);
            res.render('customer_edit' , {
                data : customer[0]
            });
        });
    })
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], (err,rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/');
        });
    })
};

module.exports = controller;