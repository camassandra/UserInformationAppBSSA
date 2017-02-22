$(document).ready(function(){
	$(".tftextinput").keyup(function(){
		$.ajax({
		type: "POST",
		url: "/search",
		data:'keyword='+$(this).val(),
		beforeSend: function(){
			$(".tftextinput").css("background","#FFF");
		},
		success: function(data){
			$("#suggesstion-box").show();
			$("#suggesstion-box").html(data);
			$(".tftextinput").css("background","#FFF");
		},
		error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
		});
	});
});
//To select country name
function selectUser(val) {
	$(".tftextinput").val(val);
	$("#suggesstion-box").hide();
}