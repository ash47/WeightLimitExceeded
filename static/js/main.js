// When everything is ready, do things
$(document).ready(function() {
    var socket = io();

    //var audioElement = document.createElement('audio');
    //audioElement.setAttribute('src', 'sounds/weight.mp3');

    ion.sound({
        sounds: [
            {
                name: "weight"
            }
        ],
        volume: 1,
        path: "sounds/",
        preload: true
    });

    socket.on('sound', function() {
        ion.sound.play("weight");
    });

    $('#doit').click(function() {
        socket.emit('sound');
    });
});
