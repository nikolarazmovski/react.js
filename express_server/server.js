// import Employee from '../models/employee';

//server/server.js
var bodyParser = require('body-parser'),
mongoose = require('mongoose'),
express = require('express'),
app = express();
const port = 3030

    app.use(express.static('public'))
    // .use(bodyParser.urlencoded({extended: true}));
    .use(bodyParser.json());


mongoose.connect('mongodb://192.168.0.104/skillsetapp');
mongoose.set('useCreateIndex', true);

//MONGOOSE MODEL
var employeeSchema = mongoose.Schema({
    username: {type : String , unique : true, required : true, dropDups: true},
    name : {type: String, required: true},
    surname: {type: String, required: true},
    information: {
        levelOfStudy: String,
        birthDate: Date,
        birthPlace: String,
        dateEmployed: {type : Date, default: Date.now}
    },
    skills: [{
        skillName: {type: String, required: true},
        rating: {type: Number, required: true, min: 0, max: 100}
    }]
});

var Employee = mongoose.model('Employee', employeeSchema);

//RESTFULL ROUTES

app.get('/', (req, res) => {
    Employee.find({}, (err, employees) => {
        if(err){
            console.log("Could not find employees");
        }else{
            res.send(employees);
        }
    })
})

app.post('/', (req, res) => {
    Employee.create(req.body, (err, newEmployee) => {
        if(err){
            console.log("Could not create an Employee");
        }else{
            res.redirect('/');
        }
    })
})

app.put('/:username', (req, res) => {
    Employee.findOneAndUpdate({username : req.body.username}, req.body, (err, updatedEmployee) => {
        if(err){
            console.log("Couldn't update/find the employee with username " + req.body.username);
        }else{
            res.redirect('/');
        }
    })
})



app.listen(3000, () => console.log("Connected to server"));
module.exports=app;