$(document).ready(function(){
	$("body").on("click", "#delete_like", function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		console.log("delete");
		$.ajax({
			url: url,
			method: "DELETE"
		}).done(function(data){
			console.log(data);
			window.location = "/likes";
		});
	});
});