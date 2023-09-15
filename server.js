const app = require('./app');
const mongo = require('mongoose')
const model = require('./model/model');

const port = 8080 || process.env.PORT;


mongo.connect('mongodb+srv://khana:AWirfNMH5M6aXIgb@cluster0.0nqdmwn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log("DB Connect"))
.catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.render("index");
});

app.post('/',async(req,res)=>{
    const data = {
        name : req.body.name,
        food: req.body.food
    };
    try{
        await model.create(data)
        //res.status(200).json(`Thanks ${data.name} :)`);
        res.render("thanks",{name:data.name})
    }
    catch(err){
        res.status(400).json({mag:err})
    }
    
})

// app.use("/",UserRouter)

app.listen(port,()=>console.log(`App running on ${port}`));
