var Icon = document.getElementById('eye-icon');
var Password = document.getElementById('password');

Icon.onclick = () => {
	if(Password.type == "password") {
		Password.type = "text";
	}else{
		Password.type = "password";
	}

	Icon.classList.toggle("bxs-show");
}