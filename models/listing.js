const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
       type : String,
       required : true,
    },
    description : String,
    image :{
        type : String,
        default :
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Funsplash&psig=AOvVaw3mRTIEJAOmZ0wLJRIj5B4s&ust=1760679269071000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCdkMr_p5ADFQAAAAAdAAAAABAV",

        set : (v) => v=== "" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Funsplash&psig=AOvVaw3mRTIEJAOmZ0wLJRIj5B4s&ust=1760679269071000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCdkMr_p5ADFQAAAAAdAAAAABAV" : v,

    } ,
    price : Number,
    location : String,
    country : String,
    
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;