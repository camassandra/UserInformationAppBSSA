const express = require('express');
const fs = require('fs');

const app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

//route 1
app.get('/', function(req, response){
	fs.readFile('./users.json', 'utf-8', function(err, data){
		console.log('about to render users page')
		if (err){
			throw err;
		}
		const fullusers =JSON.parse(data);
		response.render('index', {indexdata: fullusers});
	});
});
//route 2
app.get('/search', function(request, response){
	console.log('displaying search bar');
	response.render('search');
});



//route 3 search for jessicaml on git 
//app.use(bodyParser.json());

app.post("/", function (req, res) {
	if (userinput === indexdata.)
    console.log(req.body.user.name)
});

//route 4
app.get('/newuserform', function(request, response){
	console.log('render form page');
	response.render('form')
})

app.listen(3000, function(){
	console.log('listening has started');
});

