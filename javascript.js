const LOGIN_KEY = 'login';
const PASSWORD = 'password';


if (localStorage.getItem(LOGIN_KEY) != null) {
	document.getElementById('exit').style.display='block';
	document.getElementById('clientLogin').style.display='block';
	document.getElementById('entry').style.display = 'none';
} else {
	document.getElementById('exit').style.display='none';
	document.getElementById('clientLogin').style.display='none';
	document.getElementById('entry').style.display = 'block';
	}


document.getElementById('clientLogin').innerHTML = localStorage.getItem(LOGIN_KEY);

function change() {
	var newlogin = document.getElementById('clientLogin');

	if (newlogin.value == '') {
		alert('Заполните поле');
	} else {
			localStorage.setItem(LOGIN_KEY, newlogin.value);
	}
}


function exit() {
	localStorage.removeItem(LOGIN_KEY);
	localStorage.removeItem(PASSWORD);

	document.getElementById('exit').style.display='none';
	document.getElementById('clientLogin').style.display='none';
	document.getElementById('entry').style.display = 'block';
}


function show(state)
	{
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
	}


function reg() {
  localStorage.setItem(LOGIN_KEY, login.value);
  localStorage.setItem(PASSWORD, password.value);
}
