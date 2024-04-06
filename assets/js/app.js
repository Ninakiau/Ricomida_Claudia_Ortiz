// tooltip para el botón "Enviar correo"
$(document).ready(function () {
  // Esto inicializa el tooltip
  $("#enviarCorreo").tooltip();

  // Agrega una acción al hacer clic en el botón
  $("#enviarCorreo").click(function () {
    // Enviar alerta
    alert("El correo se ha enviado correctamente");
  });
});

// Cambiar color de texto al hacer doble clic en el título "INGREDIENTES" y "PREPARACIÓN"
$(document).ready(function () {
  // Agregar evento dblclick al título "INGREDIENTES"
  $("#ingredients").on("dblclick", function () {
    $(this).toggleClass("red-text");
  });

  // Agregar evento dblclick al título "PREPARACIÓN"
  $("#preparation").on("dblclick", function () {
    $(this).toggleClass("red-text");
  });
});

//Desaparecer texto al hacer clic en el título de la tarjeta
$(document).ready(function () {
  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
