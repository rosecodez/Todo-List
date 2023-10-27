export function getCurrentDate() {
    let date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	document.getElementById("p1").innerHTML = current_date;
	return current_date;
}