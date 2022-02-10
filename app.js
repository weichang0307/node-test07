
var express = require('express');
require ( 'express-async-errors' );
var app = express();




const   MongoClient= require('mongodb').MongoClient
let uri="mongodb+srv://wei:wiechang0307@cluster0.oxvaa.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function add_times(){
    let number
    try{
        await client.connect()
    }catch(e){
        console.log('failed to connect to cluster0')
        return 'failed to connect to cluster0'
    }
    
    console.log('success')
    let db_=client.db("visit_counter_db")
    let coll_=db_.collection("visit_times_cl")
    let value=await coll_.findOne({name:'visit_times'})
    number=value.times+1
    await coll_.updateOne({name:'visit_times'},{$set:{times:number}})
    return number
        

        
        
    
}

app.get('/db',async (req, res)=>{
    //res.send('helloworld')
    let num=await add_times()
    res.send('you are number '+num+' client to this page')

})



/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://wei:wiechang0307@cluster0.oxvaa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });//
client.connect(err => {
  const collection = client.db("my_test_db").collection("my_test_collection01").find({});
  // perform actions on the collection object
  console.log(collection)
  client.close();
});*/


app.get('/', function (req, res) {
   res.send('Hello World');
})




var PORT = process.env.PORT || 3000
var server = app.listen(PORT,function () {

  var host = server.address().address
  var port=PORT

  console.log("Example app listening at http://%s:%s", host, port)

})