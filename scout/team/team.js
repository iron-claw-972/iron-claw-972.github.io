$('document').ready(main)

function main() {

	var url = new URL(window.location.href);
	var tn = url.searchParams.get("tn");
	console.log("tn: " + tn)
	document.getElementById('team').innerHTML += tn
}