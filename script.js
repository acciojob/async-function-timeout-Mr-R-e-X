//your JS code here. If required.
let text = document.querySelector('#text');
let delay = document.querySelector('#delay');
let subBtn = document.querySelector('#btn');
let output = document.querySelector('#output');

function Delay(str, time) {
	 return new Promise((resolve) => {
	    setTimeout(() => {
	      output.innerHTML = str;
	      resolve();
	    }, time);
	  });
}

async function Display(str, time) {
	await Delay(str, time)
}

subBtn.addEventListener("click", (e)=>{
	e.preventDefault()
	let str = text.value;
	let time =delay.value
	Display(str, time)
})