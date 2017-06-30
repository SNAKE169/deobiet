const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

<<<<<<< HEAD
const template = fs.readFileSync("templates/fill_the_form.html", "utf-8");
=======
const db = require('./db');

const template = fs.readFileSync("templates/random/fill_the_form.html", "utf-8");
const result = fs.readFileSync('template/give_the_form.html', 'utf-8');
>>>>>>> 5f2337b1f9691535055cb2381cd80707e51a5980

router.get("/", (req, res) => {
		res.send(template);
});

<<<<<<< HEAD
module.exports = router;

=======
let a = 0, b = 0, c = 0, name = 0, clss = 0, school = 0;

function replace(str, tag, value) {
	return str.replace(`[${tag}]`, value);
}

app.get('/', (req, res) => {
	let inp = input;
	res.send(inp);
});

app.post('/input', (req, res, next) => {
	name=req.body.name;
	clss=req.body.clss;
	school=req.body.schl;
	a=req.body.a;
	b=req.body.b;
	c=req.body.c;
	res.redirect("/result");
});


app.get('/give_the_form', (req, res, next) => {
	db.get(parseInt(a)%3, (err, paraa) => {
		if (err) return next(err);
		db.get(parseInt(b)%3, (err, parab) => {
			if (err) return next(err);
			db.get(parseInt(c)%3, (err, parac) => {
				if (err) return next(err);
			let response = result;
			response = replace(response, "name", name);
			response = replace(response, "clss", clss);
			response = replace(response, "school", school);
			response = replace(response, "para1", paraa.main);
			response = replace(response, "para2", parab.main);
			response = replace(response, "para3", parac.main);
			response = replace(response, "question1", paraa.question);
			response = replace(response, "question2", parab.question);
			response = replace(response, "question3", parac.question);
			res.send(response);
			});	
		});
	});
});

module.exports = router;

////////////////////////////////////////////////////
>>>>>>> 5f2337b1f9691535055cb2381cd80707e51a5980




