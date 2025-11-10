const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

//automatically add user name , hashing,  salting and hashpassword
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);