const sql = require("mssql/msnodesqlv8");


var config ={
    server:"MSI\\SQLEXPRESS",
    database:"proyecto_cliente_servidor",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true
    }

}

sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from usuarios",function(err,records){
        if(err)console.log(err)
        else console.log(records);
    })
}) 


var config ={
    server:"MSI\\SQLEXPRESS",
    database:"proyecto_cliente_servidor",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true
        
    }

}

sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from usuarios",function(err,records){
        if(err)console.log(err)
        else console.log(records);
    })
})