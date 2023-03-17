const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var path = require('path')
const bcrypt = require('bcryptjs');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const User = require('./model/user')
const DonationM = require('./model/donationM');
const jobs = require('./model/jobs');
require('dotenv').config()
var cors = require('cors');
const nodemailer = require("nodemailer");
const Tour = require("../backend/model/tour");
const { time } = require('console');
const Feedback = require('./model/feedback');

const app = express()
app.use(cors({origin:"*",methods:['GET','POST']}))

const PORT = process.env.PORT || 5500
const URI = process.env.MONGO_URI


const store = new MongoDBStore({
    uri: URI,
    collection: "mySessions",
  });


app.use(bodyParser.json())
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );
  mongoose.set("strictQuery", false);
mongoose.connect(URI)

var db = mongoose.connection
db.on('error',()=>console.log("Error connecting to db"))
db.once('open',()=>console.log("Connected to db"))

















app.post('/sendemail', async (req,res)=>{
 const {path,subject,description,filename}=req.body
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jashdoshi99@gmail.com',
      pass: 'wqlilcnhfjxgfvdd'
    }
  });
  const mailOptions = {
    from: 'jashdoshi99@gmail.com',
    to: 'gathavishesh@gmail.com',
    subject: subject,
    text: description,
    attachments:[
        {
            filename:filename,
            path:"../resume.pdf"
        }
    ]
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      return res.json({status:"ok"})
    }
  });
})

app.post('/sendwhatsapp',async(req,res)=>{

})

app.post('/register', async (req,res)=>{
    var username = req.body.username
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)){

        var password =  req.body.password
        var hashPwd = await bcrypt.hash(password,10)
        //console.log(username + " "+password)
        //console.log(hashPwd)
        
        user = User.create({
            email: username,
            password: hashPwd
        })
        //await user.save()
        console.log("done")
        return res.json({status:"ok"})
    }
    else{
        console.log(username)
        return res.json({status:"error", message: "Invalid Email"})
    }
})

app.post('/login', async (req,res)=>{
    var username = req.body.username
    //console.log(username)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)){
        const user = await User.findOne({ username })
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }
        var password =  req.body.password
        //var hashPwd = await bcrypt.hash(password,10)
        const isMatch = await bcrypt.compare(password, user.password);
        //console.log( await bcrypt.hash(password,10))
        //console.log(user.password)
        console.log("in?")
        if (isMatch) {
            console.log("in")
            req.session.isAuth = true;
            return res.json({status:"ok"})
        }
        //console.log(username + " "+password +" "+isMatch)
    }
    else{

        return res.json({status:"error", message: "Invalid credentials"})
    } 
})

app.post('/logout', (req,res)=>{
    req.session.destroy((err) => {
        if (err) throw err;
        return res.json({status:"ok"})
      });
})

app.post('/isauth',(req,res)=>{
    //res.json("value":req.session.isAuth)
    res.json({"log":req.session.isAuth})
})


app.post('/addjob',(req,res)=>{
    var {title,name,logo,desc,pay,location,respo,type} = req.body
    job = jobs.create({
        logo:logo,
        companyName:name,
        jobTitle:title,
        jobDescription:desc,
        pay:pay,
        location:location,
        jobResponsibilities:respo,
        type:type,

    })
    console.log("job added")
    return res.json({status:"ok"})
})



app.post('/ctour',(req,res)=>{
    var {Fname,Email,ProfilePic} = req.body
    newTour =  Tour.create({
        Fname:Fname,
        Email:Email,
        ProfilePic:ProfilePic,
       
    })
    console.log("Tour added")
    Tour.updateOne({Email:"Vishesh2"},{$set:{Age:18}})
    .then(console.log("updated"))
    return res.json({status:"ok"})
})

app.post('/UpdateAge',(req,res)=>{
    var {Fname,Age} = req.body
    

    Tour.updateOne({Fname:Fname},{$set:{Age:Age}})
    .then(console.log("updated"))
    return res.json({status:"ok"})
})

app.post('/Update',(req,res)=>{
    var {Fname,Maths,Science,Bio,Painting,Literature,Social,Programming} = req.body
    

    Tour.updateMany({Fname:Fname},{$inc: {Maths:Maths , Science:Science,
    Bio:Bio,Painting:Painting,Literature:Literature,Social:Social,Programming:Programming
    },
    

    })
    .then(console.log("updated"))
    return res.json({status:"ok"})
})

















app.get('/findTour',cors(),(req,res)=>{
    Tour.find({Pname:"Vishesh"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.get('/Kresha',cors(),(req,res)=>{
    Tour.find({Pname:"Kresha"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Pankhudi',cors(),(req,res)=>{
    Tour.find({Pname:"Pankhudi"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Cooked',cors(),(req,res)=>{
    Tour.find({Category:"Cooked"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Raw',cors(),(req,res)=>{
    Tour.find({ Discount: { $gte: 5 } })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Pdt',cors(),(req,res)=>{
    Tour.find({ MRP: { $gte: 5 } })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.get('/Item',cors(),(req,res)=>{
    Tour.find({ Category: "Electronics" })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.get('/Kids',cors(),(req,res)=>{
    Tour.find({ Category: "Kids" })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
app.get('/Men',cors(),(req,res)=>{
    Tour.find({ Category: "Mens" })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.get('/Foot',cors(),(req,res)=>{
    Tour.find({ Category: "FootWear" })
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Packed',cors(),(req,res)=>{
    Tour.find({Category:"Packed"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.get('/Product',cors(),(req,res)=>{
    var {id} = res;
    Tour.find({_id:id})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Donate',cors(),(req,res)=>{
    Tour.find({Category:"Donation"})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


app.get('/Offers',cors(),(req,res)=>{
    Tour.find({Quantity:{"$lte":15}})
    .then(result=>{
        console.log("found");
        res.status(200).json({
            Tour:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})



app.get('/Update',cors(),(req,res)=>{
    var {id,Quantity} = req.body
    Tour.update({_id:id},{Quantity:Quantity })
    
})






////////////////////////////










app.get('/alljobs',cors(),(req,res)=>{
    jobs.find()
    .then(result=>{
        res.status(200).json({
            jobs:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

app.post('/donation',async (req,res)=>{
    var name = req.body.name
    var email = req.body.email
    var method = req.body.method
    var amount = req.body.amount
    //db.createCollection("donationMoney")
    
    donation = DonationM.create({
        name : name,
        email : email,
        paymentmethod: method,
        amount: amount
    })
    console.log("done")
    res.json({"status":"ok"})
})

app.listen(PORT)
console.log("Listening on port "+PORT)