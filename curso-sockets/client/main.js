// url donde esta el socket y forzar la conexion
var socket = io.connect('http://192.168.0.9:6677', {'forceNew': true});

// recibo el evento messages y cuando llegue ejecuto la funcion de callback
socket.on('messages', function(data) {	// data: parametros que llegan del servidor
	console.log(data);
	render(data);
});

function render(data) {
	var html = data.map(function(message, index) {
		return (`
			<div class="message">
				<strong>${ message.nickname }</strong> dice:
				<p>${ message.text }</p>
			</div>
		`);
	}).join(' ');

	var div_msgs = document.getElementById('messages');
	div_msgs.innerHTML = html;
	div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e) {
	var message = {
		nickname: document.getElementById('nickname').value,
		text: document.getElementById('text').value
	};

	document.getElementById('nickname').disabled = true;
	socket.emit('add-message', message);	// emito un evento desde el cliente al server
											// el socket del server lo captura
	return false;
}