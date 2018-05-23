// format.js

function right(msg, data){
	var right = {"success" : true, "msg" : msg, "data" : data};
	return right;
}

function wrong(msg, data){
	var wrong = {"success" : false, "msg" : msg, "data" : data};
	return wrong;
}

module.exports = {
	right: right,
	wrong: wrong
}