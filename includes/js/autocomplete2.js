$(document).ready(function()
{
	console.log('loading DOM')
	var timeAfterPost = 0;
	$("#input").keyup(function(event){
		var timeNow = Date.now()
		console.log(event)
		var text = $("#input").val()
		console.log("search value",$("#input").val())

		if((timeNow - timeAfterPost)>40000){
		$.post('/search', {suggestion: text}, function(data){
			//console.log("data: ",data)
			console.log('performed post request')
			//$('#suggestion-box').text(data.text[0].firstname)
			$('#suggestion-box').empty()
				for (var i=0; i < data.text.length; i++){
					$('#suggestion-box').append(
						$('<option>'+data.text[i].firstname+' '+data.text[i].lastname+'</option>')
				)
			}
			var timeAfterPost = Date.now();
			console.log(timeNow - timeAfterPost);
			})
		}
	})

})