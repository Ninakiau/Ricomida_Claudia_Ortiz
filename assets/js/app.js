// tooltip para el botón "Enviar correo"
$(document).ready(function () {
  // Esto inicializa el tooltip
  $("#enviarCorreo").tooltip();
  $("#addFavorite").tooltip();

  // Agrega una acción al hacer clic en el botón
  $("#enviarCorreo").click(function () {
    // Enviar alerta
    alert("El correo se ha enviado correctamente");
  });

  $("#addFavorite").click(function () {
    // Enviar alerta
    alert("La receta se ha agregado a tus favoritos");
  });
});

// Cambiar color de texto al hacer doble clic en el título "INGREDIENTES" y "PREPARACIÓN"
$("#ingredients").on("dblclick", function () {
  $(this).toggleClass("red-text");
});

$("#preparation").on("dblclick", function () {
  $(this).toggleClass("red-text");
});

//Desaparecer texto al hacer clic en el título de la tarjeta
$(document).ready(function () {
  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
