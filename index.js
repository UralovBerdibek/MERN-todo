const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// mongodb password
const pass = "KWW7bWPuaNCnKAVS"

//connect to mongodb
mongoose.connect(
    "mongodb+srv://Slame:KWW7bWPuaNCnKAVS@cluster0.b3dmyjt.mongodb.net/contact?retryWrites=true&w=majority"
)

// Data schema
const contactSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
};

// Data model

const Contact = mongoose.model("Contact", contactSchema);

// Read route
app.get('/contacts', (req, res) => {
    Contact.find().then((contact) => res.json(contact)).catch((err) => res.status(400).json(err))
})

// Create Route
app.post("/newContact", (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    })
    newContact.save().then((contact) => console.log(contact)).catch((err) => res.status(400).json(err))
})

// Delete Route
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    Contact.findByIdAndDelete({_id: id}, (req, res, err) => {
        if(!err){
            console.log('Deleted');
        }else{
            console.warn(err);
        }
    })
})

app.listen(5000, () => {
    console.log("Server has been started on port 8080...");
});
