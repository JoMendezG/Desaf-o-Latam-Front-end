 // Tooltip
 $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


$(document).ready(function() {
    $('#miTooltip').tooltip('show')
    $('#miAlerta').tooltip('show')


    // Alerta
    $('#miAlerta').click(function() {
        alert('El correo fue enviado correctamente')
    })

    // Selector de etiqueta pintar a rojo
    $('h4').on("dblclick", function() {
        $(this).css({
            "color": "red"
        })
    })

    // Toggle Cards
    $(".card-title").click(function() {
        $(".card-text").toggle();
    })
})