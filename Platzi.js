var Cuadro = document.getElementById("ZonaMapa");
var Papel = Cuadro.getContext("2d");
var Vaca = {url: "vaca.png", CargaOK: false};
var Cerdo = {url: "cerdo.png", CargaOK: false};
var Pollo = {url: "pollo.png", CargaOK: false};
var Fondo = {url: "tile.png", CargaOK: false};

Fondo.objeto = new Image();
Fondo.objeto.src = Fondo.url;
Fondo.objeto.addEventListener ("load", cargarMapa);

Vaca.objeto = new Image();
Vaca.objeto.src = Vaca.url;
Vaca.objeto.addEventListener ("load", cargarVaca);

Pollo.objeto = new Image();
Pollo.objeto.src = Pollo.url;
Pollo.objeto.addEventListener ("load", cargarPollo);

Cerdo.objeto = new Image();
Cerdo.objeto.src = Cerdo.url;
Cerdo.objeto.addEventListener ("load", cargarCerdo);


function cargarMapa (){
  Fondo.CargaOK = true;
  dibujar();
}

function cargarVaca (){
  Vaca.CargaOK = true;
  dibujar();
}

function cargarCerdo (){
  Cerdo.CargaOK = true;
  dibujar();
}

function cargarPollo (){
  Pollo.CargaOK = true;
  dibujar();
}

function dibujar (){
    if(Fondo.CargaOK){
      Papel.drawImage(Fondo.objeto, 0, 0);
        }
    if(Vaca.CargaOK){
      var Rebano = aleatorio(0,11);
      for (var v = 0; v < Rebano; v++){
          var X = aleatorio(0, 7);
          var Y = aleatorio(0, 7);
          X = X*60;
          Y = Y*60;
          Papel.drawImage(Vaca.objeto, X, Y);
      }

      }
    if(Cerdo.CargaOK){
      var Rebano = aleatorio(0,11);
      for (var v = 0; v < Rebano; v++){
        var X = aleatorio(0, 7);
        var Y = aleatorio(0, 7);
        X = X*60;
        Y = Y*60;
          Papel.drawImage(Cerdo.objeto, X, Y);
      }
        }

    if (Pollo.CargaOK){
      var Rebano = aleatorio(0,11);
      for (var v = 0; v < Rebano; v++){
        var X = aleatorio(0, 7);
        var Y = aleatorio(0, 7);
        X = X*60;
        Y = Y*60;
          Papel.drawImage(Pollo.objeto, X, Y);
      }
        }
      }
function aleatorio(Max, Min){
  var Resultado;
  Resultado = Math.floor (Math.random()*(Max - Min + 1)) + Min;
  return Resultado;
}
