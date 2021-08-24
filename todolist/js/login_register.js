$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

$(document).ready(function(){

	$("#register-submit").click(function(e)
	{
		e.preventDefault();
		var username=$('#username').val();
		var password=$('#password').val();
		var mail=$('#mail').val();
		username=username.trim();
		password=password.trim();
		mail=mail.trim();
		if(username=="" || password=="" || mail==""){
		}
		else{
			$.ajax({
			  url: "/works/muttlu/todolist/db/login_register.php",
			  method: "POST",
			  data: {
				username:username,
				password:password,
				mail:mail,
				type: "add",
			  },
			  success: function (response) {
				if(response){
					alert("kayıt basarili");
					document.getElementById("username").value="";
					document.getElementById("password").value="";
					document.getElementById("mail").value="";
				}
				else{
					alert("tekrar dene")
				}
			  },
			});
		
			// saveLocalStorage(inputText, todoId, complate);
			// todo 8 add todo fonksiyonuna parametre eklıyoruz
		  }


	})
}



)



$('#login-submit').click(function(e){
	var username=$('#username1').val();
	var password=$('#password1').val();
	username=username.toString().trim();
	password=password.trim();
	if(username=="" || password==""){
		alert("bos alanlari doldurunuz");
	}
	else{
		e.preventDefault();
		$.ajax({
			url: "/works/muttlu/todolist/db/login_register.php",
			method: "POST",
			data: {
			  username:username,
			  password:password,
			  type: "login",
			},
			success: function (response) {
			  if(response=="basarili"){
				  alert("giris basarili");
				 window.location.href="/works/muttlu/todolist/index.html";
			  }
			  else{
				  alert("yanlıs girdiniz")
			  }
			},
		  });
	}

})


