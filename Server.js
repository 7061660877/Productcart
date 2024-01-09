const express = require('express');
const app = express();
const PORT = 9092;
const bodyParser=require('body-parser')
const routes=require('./Routes/Routes')
const db=require('./DB/db')
const cors=require('cors')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes)



app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
});
