const express = require('express');
require('dotenv').config();
const connectDB = require('./utils/connectDB');
const jsxEngine = require('jsx-view-engine')
//using override method because forms can only POST and GET data
const methodOverride = require('method-override')
const Logs = require('./models/logs');

//* Variables
const app = express();
const PORT = process.env.PORT || 3000;

//* App Config
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine())

//* Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'))

// * Routes

/**
 * Root
 */
app.get('/', (req, res) => {
    res.send('working!')
});

/**
 * Index
 */
app.get('/logs', async (req, res) => {
    try {
        const logs = await Logs.find({});
        res.render('Index', {logs})
    } catch (e) {
        console.log(e);
    }
});
/*
* NEW
*/
app.get('/logs/new', (req, res) => {
    res.render('New')
})


/*
* create
*/
app.post('/logs', async (req, res) => {

    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }
    const createLog = await Logs.create(req.body)
    
    res.redirect(`/logs`)
})

/**
 * Show
 */
app.get('/logs/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const logs = await Logs.findById(id);
        // res.send(tweet);
        res.render('Show', {logs})
    } catch (e) {
        console.log(e);
    }
});

/*
* EDIT
*/
app.get('/logs/:id/edit', async (req, res)=> {
    const {id} = req.params
    try{
        
        const logs = await Logs.findById(id)
        
        res.render('Edit', {logs})
    }catch(error){
        console.log(error)
    }
})

/*
* Update
*/
app.put('/logs/:id', async(req, res)=> {
    const {id} = req.params
    console.log(req.body)
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }
    try{
        // when new:true updated object is sent back
         const updatedLog = await Logs.findByIdAndUpdate(id, req.body, {new: true})
        
        res.redirect(`/logs/${id}`)
    }catch(e){
        console.log(e)
    }
})

/*
*Delete
*/
app.delete('/logs/:id', async(req, res)=> {
    const {id} = req.params
    try{
        const deletedLog = await Logs.findByIdAndDelete(id);
      
        res.redirect('/logs')
    }catch(e){
        console.log(e);
    }
})


//* Listening and connecting to db
connectDB()
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))