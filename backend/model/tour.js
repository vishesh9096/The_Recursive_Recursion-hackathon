const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    Name:{
        type: String,
        unique:true,


    },
    Image:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png"

    },
    
    Desc:{
        type:String,
        
    },
    Stock:{
        type:Number,
        default:10,
        
    },
    Category:{
        type:String,

    },
    SubCategory:{
        type:String,

    },
    MRP:{
        type:Number,

    },
    Discount:{
        type:Number,

    },
    Brand:{
        type:String,

    },
    CatImg:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png"

    },
    SCatImg:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png"

    },

    
    
})

const Tour = mongoose.model('Tour',tourSchema);

module.exports = Tour;