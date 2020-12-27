const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus'); 
const showAmPm = true;
const codeOfKeyEnter = 13;


function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
	let sec = today.getSeconds();
	
	const amPm = hour >= 12 ? 'PM' : 'AM';

	hour = hour % 12 || 12;
		
	time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero (n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../dynamic-landing-page/images/morning.jpg')";
    document.body.style.color = "#000000";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../dynamic-landing-page/images/day.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    document.body.style.backgroundImage = "url('../dynamic-landing-page/images/evening.jpg')";
    greeting.textContent = 'Good Evening, ';
  } 
}

function getName() {
   name.textContent = localStorage.getItem('name') === null ? '[Enter Your name]' : localStorage.getItem('name');
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == codeOfKeyEnter || e.keyCode == codeOfKeyEnter) {
      localStorage.setItem('name', e.target.innerText);
      name.blur(); 
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  focus.textContent = localStorage.getItem('focus') === null ? '[Enter Your focus]' : localStorage.getItem('focus');
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur(); 
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
setBgGreet();
getName();
getFocus();

		