const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const productRoutes = require("./routes/ProductRoutes.js");
const app = express();

// Middleware section
app.use(cors());

const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(
  bodyParser.json({
    limit: "4mb",
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ limit: "4mb", extended: true }));


mongoose.connect("mongodb://localhost/crudDb");


app.use("/products", productRoutes);

app.get('/',(req,res)=>{
  res.send('Hi there')
})




const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Successfully started on port ${PORT}`);
});
