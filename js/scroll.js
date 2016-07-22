$(function(){
		var text = "Hi I'm Lance";
		var text1="Welcome to my website";
		var text2="You can find my curriculum vitae <br> and some of my works here"
		
		setTimeout(function(){
			$('.cv').addClass('scroll');
			$('.cv').html('<h1>'+ text + '<br>' + text1 + '<br>'+ text2+'</h1>');
		},2500);
});
