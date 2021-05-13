// Formulario
(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()


// smooth scroll
// No olvidar colocar 
// html {
//     scroll-behavior: smooth;
//   }
//En el css
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  })


// Alertas de RRSS
// Se le coloca un nombre a las funciones y este nombre se coloca de la siguiente forma
// En el html onclick="miAlertaRRSS()"
function miAlertaRRSS() {
    alert("EL Github de este sitio no está habilitado aún");
  }

function miAlertaRRSS2() {
    alert("EL Linkedin de este sitio no está habilitado aún");
}
function miAlertaRRSS3() {
    alert("EL Twitter de este sitio no está habilitado aún");
}
function miAlertaRRSS4() {
    alert("EL Facebook de este sitio no está habilitado aún");
}


// Función para activar los modales, se usa una vez
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
