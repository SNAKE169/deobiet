const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
<<<<<<< HEAD

app.use('/add', require('./add'));
app.use('/rankings', require('./rankings'));
app.use('/q1', require('./q1'));
app.use('/q2', require('./q2'));
app.use('/q3', require('./q3'));
const template = fs.readFileSync('templates/index1.html', 'utf-8');

function replace(str, tag, value) {
	return str.replace(`[${tag}]`, value);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add', require('./add'));
app.use('/rankings', require('./rankings'));
app.use('/q1', require('./q1'));
app.use('/q2', require('./q2'));
app.use('/q3', require('./q3'));
const template = fs.readFileSync('templates/index1.html', 'utf-8');


=======

app.use('/add', require('./add'));
app.use('/rankings', require('./rankings'));
app.use('/q1', require('./q1'));
app.use('/q2', require('./q2'));
app.use('/q3', require('./q3'));
const template = fs.readFileSync('templates/index1.html', 'utf-8');

function replace(str, tag, value) {
	return str.replace(`[${tag}]`, value);
}


>>>>>>> 5f2337b1f9691535055cb2381cd80707e51a5980
app.get('/', (req, res) => {
    res.send(template);
})
app.listen(app.get('port'), function() {
  console.log("Hello World");
});

<<<<<<< HEAD
=======



>>>>>>> 5f2337b1f9691535055cb2381cd80707e51a5980
