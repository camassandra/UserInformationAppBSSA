const express = require('express');
const app = express();

const fs = require('fs')

var bodyParser = require('body-parser')

var readjson = require(__dirname+"/search-module");

//here comes the middleware stuff!!!!!!!!
app.use(express.static(__dirname+'/views/includes')) //a programming line to serve from a folder named 'static' 
//containinbg static files
//bodyparser here

app.use(bodyParser.urlencoded({extended: true}))


app.set('views', __dirname+'/views');
app.set('view engine', 'pug');

//route 1
app.get('/', function(reqest, response){
	readjson(__dirname+'/users.json', function(data) {
		response.render('index', {indexdata: data});	
	})
	
	
});
//route 2

app.get('/search', function(reqest, response){
	console.log('displaying search bar');
	response.render('search');
});

app.post('/searchhandler', function(request, response){
	var searchquery=request.body.searchquery
	var searchqueryLower = searchquery.toLowerCase()
	readjson(__dirname+ '/users.json', function(data){ //data is an array
		for (var i = 0; i < data.length; i++) {
			var lowerCaseFirstname = data[i].firstname.toLowerCase()
			var lowerCaseLastname = data[i].lastname.toLowerCase()
			console.log(lowerCaseFirstname)
			if (searchqueryLower === lowerCaseFirstname || searchqueryLower===lowerCaseLastname){
				response.render('searchresult', {userfound: data[i]})
				console.log({userfound:data[i]})
			}
			//else {
				//response.redirect('/')
				//response.status(404).json({message: "User not found"})
			//}
		}
	})
})



//route 4 
// JSON.stringify, FS writefile, fs readfile 
app.get('/register', function(request, response){
	response.render('form')
})

app.post("/register", function(request, response) {
	readjson(__dirname+'/users.json', function(data){
		var newUser = request.body
		data.push(newUser) //returns number of elements in the new array
		var newuserlist = data //must store the new json file in a var
		//console.log(newuserlist)
		 var stringifiedlist = JSON.stringify(newuserlist) 
		fs.writeFile(__dirname+'/users.json', stringifiedlist, (err) => {
			if (err) throw err;
			console.log('saved!');
		});

	})
	response.redirect('/')
})


// let newuser = require ('fullusers');


app.listen(3000, function(){
	console.log('listening has started');
});

