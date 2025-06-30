$("#botonEnviar").click(function () {
    let nombre = $("#inputNombre").val().trim();
    let correo = $("#inputEmail").val().trim();
    let mensaje = $("#inputMensaje").val().trim();

    if (nombre === "") {
        alert("Por favor, ingresa el nombre del cliente.");
        return;
    }

    if (correo === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return;
    }

    if (mensaje === "") {
        alert("Por favor, escribe tu mensaje.");
        return;
    }
    $("#mensajeExito").removeClass("d-none").hide().fadeIn();
    setTimeout(function(){
        $("#mensajeExito").fadeOut(function(){
            $(this).addClass("d-none")
        })
    }, 3000);
    
    $("#inputNombre").val("");
    $("#inputEmail").val("");
    $("#inputMensaje").val("");
});