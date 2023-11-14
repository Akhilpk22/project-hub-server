const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
// retrun type promies res then ill
console.log("mongodb atles successfully connected with PFServer");

}).catch((err)=>{
    console.log(`mongodb connection faild err ${err}`);
})
