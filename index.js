const express = require('express')

const cors = require('cors');
const morgan = require ('morgan');

const productRouter= require('./routes/routes-pro')
const catagoryRouter= require('./routes/router-cata')
const orderRouter =require('./routes/router-order')
const userRouter = require('./routes/router-user')


let { categories } = require('./data/products');


const dbConnect = require('./utils/db-connect')




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));


app.use("/",productRouter)
app.use("/catagory",catagoryRouter)
app.use("/order",orderRouter)
app.use("/user",userRouter)


const port = process.env.PORT || 5001
const host = process.env.HOST || localhost



dbConnect()
.then(() => {
    console.log("mongodb is connect");
}).catch((err) => {
    console.log(err.message);
});


app.get('/', (req, resp) => {
    resp.send("hello world")
})





app.get('/categories', (req, resp) => {
    resp.status(200).json(categories)
})



app.listen(port,host, () => {
    console.log('connecting....')
});