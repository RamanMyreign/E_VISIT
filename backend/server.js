const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 'mongodb+srv://raman:Raman@123@cluster0.mgk05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT ||  5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://raman:Raman@123@cluster0.mgk05.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology:true, useFindAndModify:false}
).then(() => {console.log("MongoDB database connection established successfully");})
.catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const doctorListRouter = require('./routes/doctorList');
const newuserRouter = require('./routes/newUser');

app.use('/doctorList', doctorListRouter);
app.use('/newUser', newuserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});