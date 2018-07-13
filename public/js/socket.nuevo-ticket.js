
// Comando para establecer la comunicacion
var socket = io();
var label = $('#lblNuevoTicket');

// ----------------------------------------------------------------------------
// connect : Se ejecuta cuando se conecta al servidor
// ----------------------------------------------------------------------------
socket.on('connect', function(){
    console.log('Conectado al servidor');
});
// ----------------------------------------------------------------------------
// disconnect : Se ejecuta cuando el cliente  se desconectan
// ----------------------------------------------------------------------------
socket.on('disconnect', function(){
    console.log('Desconectado del servisor');
});
// ----------------------------------------------------------------------------
// estadoActual : Escucha cuando el servidor emite el estado actual
// ----------------------------------------------------------------------------
socket.on('estadoActual', function(resp){
    label.text(resp.actual);
});
// ----------------------------------------------------------------------------
// siguienteTicket : Solicita al servidor el siguiente ticket
// ----------------------------------------------------------------------------
$('button').on('click', function() {
   
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    }); 

});