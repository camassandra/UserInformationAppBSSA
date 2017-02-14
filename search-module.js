var fs = require('fs');


const AllUsers = function (filename, callback){
		fs.readFile(filename, 'utf-8', function(err, data){
			console.log('parsing users.json')
			if (err){
				throw err;
			}
			const fullusers =JSON.parse(data);
			callback(fullusers);
		});
	};


function searchFirstName(input, user) {
  return user.firstname.toLowerCase().includes(input.toLowerCase());
}

function searchLastName(input, user) {
  return user.lastname.toLowerCase().includes(input.toLowerCase());
}

module.exports= AllUsers;