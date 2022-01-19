var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var formSchema = new Schema(
  {
    mobile: { type: Number },
    fullname: { type: String, required: true },
    emailaddress: { type: String },
    options: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Form", formSchema);
