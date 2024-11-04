const express = require('express')
const app = express()
const port = 8000
app.use(express.json());

var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');
const { type } = require('os');
const { Sign } = require('crypto');
mongoose.connect('mongodb+srv://arun:arun123@cluster0.hn4pn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB on port ' + port));

const osType = type();
console.log(osType);

var SignupSchema = mongoose.Schema({ name: String, phone: String, email: { type: String, unique: true }, rollno: String, password: String, semester:String , department:String}, { versionKey: false })
var SignupModel = mongoose.model("signup", SignupSchema, "signup");// internal name , schema_name , real collection name


app.post("/api/signup", async (req, res) => 
{
    try 
    {
        var newrecord = new SignupModel({ name: req.body.name, phone: req.body.phone, email: req.body.email, rollno: req.body.rollno, password: req.body.pass ,department:req.body.dep , semester:req.body.sem})
        var result = await newrecord.save();  // it will save the record into real collection

        if (result) 
        {
            res.status(200).send({ statuscode: 1 })
        }
        else 
        {
            res.status(200).send({ statuscode: 0, msg: "Signup not successfull" })
        }
    }
    catch (err) 
    {
        res.status(500).send({ statuscode: -1, errmsg: err.message })
    }
})

app.post("/api/login", async (req, res) => 
{
    try 
    {

        var result = await SignupModel.find({ email: req.body.email, password: req.body.pass }).select("-password").select("-phone");
        // result will become an array because find function return an array
        // console.log(result)
        if (result.length === 0) 
        {
            res.status(200).send({ statuscode: 0 })
        }
        else 
        {
            res.status(200).send({ statuscode: 1  })
        }
    }
    catch (e) {
        res.status(500).send({ statuscode: -1, errmsg: e.message })
    }
})

app.get("/api/fetchallusers" , async (req , res)=>
{
    try
    {
        var result = await SignupModel.find()
        if (result.length === 0) 
        {
            res.status(200).send({ statuscode: 0 })
        }
        else 
        {
            res.status(200).send({ statuscode: 1 , usersdata : result })
        }
    }
    catch(e)
    {
        res.status(500).send({statuscode: -1 , errmsg : e.message})
    }
})

app.get("/api/fetchoneuser/:userid" ,async (req , res)=>
{
    try
    {
        var result = await SignupModel.find({_id:req.params.userid})
        if (result.length === 0) 
        {
            res.status(200).send({ statuscode: 0 })
        }
        else 
        {
            res.status(200).send({ statuscode: 1, oneuserdata: result[0] })
        }
    }
    catch(e)
    {
        res.status(500).send({statuscode:-1 , err:e.message})
    }
})


app.put("/api/updateoneuser" , async (req , res) =>
{
    try
    {
        var updateresult = await SignupModel.updateOne({ _id: req.body.uid }, { $set: { name: req.body.name, phone: req.body.phone, email: req.body.email, rollno: req.body.rollno ,department:req.body.dep , semester:req.body.sem} });

        if (updateresult.modifiedCount === 1) 
        {
          res.status(200).send({ statuscode: 1 })
          console.log("sam")
        }
        else 
        {
          res.status(200).send({ statuscode: 0 })
        }
    }
    catch(e)
    {
        res.status(500).send({statuscode:-1 , err:e.message})
    }
})


app.delete("/api/deluser", async(req ,res)=>
{
    try
    {
        var result = await SignupModel.deleteOne({_id:req.query.id})
        if (result.deletedCount === 1) 
        {
            res.status(200).send({ statuscode: 1 })
        }
        else 
        {
            res.status(200).send({ statuscode: 0 })
        }
    }
    catch(e)
    {
        res.status(500).send({statuscode:-1 , err:e.message})
    }
})


var ContactSchema = mongoose.Schema({name:String , email:String , Subject:String , message:String},{ versionKey: false })
var ContactModel = mongoose.model("contact" , ContactSchema , "contact");

app.post("/api/contact" , async (req , res)=>
{
    try
    {
        var newcontact = new ContactModel({name:req.body.name , email:req.body.email , Subject:req.body.subject , message:req.body.message })
        var result = await newcontact.save();

        if (result) 
        {
            res.status(200).send({ statuscode: 1 })
        }
        else 
        {
            res.status(200).send({ statuscode: 0, msg: "Signup not successfull" })
        }
    }
    catch(e)
    {
        res.status(500).send({statuscode: -1 , errmsg : e.message})
    }
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})