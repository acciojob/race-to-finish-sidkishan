window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let prom1 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve();
	}, 1000)
})
let prom2 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve();
	}, 2000)
})
let prom3 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve();
	}, 3000)
})
let prom4 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve();
	}, 4000)
})
let prom5 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve();
	}, 5000)
})
window.promises = [prom1, prom2, prom3, prom4, prom5];
let x = Promise.any(promises);
x.then(data => {
	document.getElementById("output").value = data;
})
