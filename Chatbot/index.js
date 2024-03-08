const express = require('express');

const path = require('path');

const chatbotRoutes = require('./routes/chatbot');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use(chatbotRoutes);

app.listen(3000);