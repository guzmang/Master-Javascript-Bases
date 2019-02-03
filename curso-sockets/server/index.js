var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// para cargar una vista estatica por defecto, vamos a utilizar un middleware antes de
// que se realice cualquier peticion
app.use(express.static('client'));	// todos los html de la carpeta client van a ser staticos

app.get('/hola-mundo', function(req, res) {
	res.status(200).send('Hola mundo desde una ruta.');
});

// este objeto array va a persistir con todos los mensajes que se guarden despues mientras
// que el servidor este corriendo o el socket este abierto.
var messages = [{
	id: 1,
	text: "Bienvenido al chat privado de Socket.io y NodeJS de Victor Robles...",
	nickname: "Bot"
}];

// abrir una conexion al socket
// el metodo on() nos permite lanzar eventos (en este caso recibir las conexiones de los clientes)
// detecta cada vez que un cliente se conecta y se ejecuta la func de callback
io.on('connection', function(socket) {
	console.log("El cliente con IP: " + socket.handshake.address + " se ha conectado...");
	socket.emit("messages", messages);	// emito el evento mje a todos los clientes que se conecten

	socket.on('add-message', function(data) {	// capturo este evento
		messages.push(data);

		io.sockets.emit('messages', messages);	// vuelvo a emitir los mjes actualizados
	});
});
// los mjes se actualizan de forma instantanea porque esta es una conexion de socket abierta
// que no necesita hacer peticiones ajax, ni recargando la pagina.


// levantar el server
server.listen(6677, function() {
	console.log("Servidor esta funcionando en http://localhost:6677");
});