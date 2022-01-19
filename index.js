const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
app.use(express.json());
const uri = config.get('mongoURI');
mongoose.connect(uri)
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post')
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.listen(3000, ()=>
	console.log('Running Server'));
