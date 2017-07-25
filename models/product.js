// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema 
var alfredClients = new mongoose.Schema({
	clientName: String,
	sku: String,
	price: Number
})



// return model
module.exports = restful.model('Products', productSchema);