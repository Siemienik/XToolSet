const {importInvoice} = require("./importer");

importInvoice( __dirname+"/invoice.xlsx").then((invoice)=>{
    console.log(invoice);
})