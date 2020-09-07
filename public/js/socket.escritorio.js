//Comando para establecer la conexión
let socket = io();

let label = $('small');

let searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesrio');
}

let escritorio = searchParams.get('escritorio');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {

    socket.emit('atenderTicket', { escritorio }, function (resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('Ticket ' + resp.numero);

    });

});
