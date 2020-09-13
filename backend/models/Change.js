const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Change = new Schema({
  changeid: {
     type: String
  },
  changetaskid: {
     type: String
  },
  changetitle: {
     type: String
  },
  account: {
     type: String
  },
  execby: {
   type: String
}
},


{
   collection: 'changes'




})

module.exports = mongoose.model('Change', Change)
