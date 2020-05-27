setInterval('amarillo()',1000);
setInterval('grey()',2000);

setInterval('verificarVertical()',500);
setInterval('verificarHorizontal()',1000);

function amarillo(){
  $(".main-titulo").css("color","yellow")
}

function grey(){
  $(".main-titulo").css("color","grey")
}

//funcion para rellenar todos los espacios
function reinsertar() {
  var child1=$(".col-1").children();
  var child2=$(".col-2").children();
  var child3=$(".col-3").children();
  var child4=$(".col-4").children();
  var child5=$(".col-5").children();
  var child6=$(".col-6").children();
  var child7=$(".col-7").children();
  if (child1.length<=6) {
    var x1 = Math.floor((Math.random() * 4) + 1);
    $(".col-1").prepend("<div class='"+x1+"'><img src='image/"+x1+".png' class='img fruta'/></div>");
  };
  if (child2.length<=6) {
    var x2 = Math.floor((Math.random() * 4) + 1);
    $(".col-2").prepend("<div class='"+x2+"'><img src='image/"+x2+".png' class='img fruta'/></div>");
  };
  if (child3.length<=6) {
    var x3 = Math.floor((Math.random() * 4) + 1);
    $(".col-3").prepend("<div class='"+x3+"'><img src='image/"+x3+".png' class='img fruta'/></div>");
  };
  if (child4.length<=6) {
    var x4 = Math.floor((Math.random() * 4) + 1);
    $(".col-4").prepend("<div class='"+x4+"'><img src='image/"+x4+".png' class='img fruta'/></div>");
  };
  if (child5.length<=6) {
    var x5 = Math.floor((Math.random() * 4) + 1);
    $(".col-5").prepend("<div class='"+x5+"'><img src='image/"+x5+".png' class='img fruta'/></div>");
  };
  if (child6.length<=6) {
    var x6 = Math.floor((Math.random() * 4) + 1);
    $(".col-6").prepend("<div class='"+x6+"'><img src='image/"+x6+".png' class='img fruta'/></div>");
  };
  if (child7.length<=6) {
    var x7 = Math.floor((Math.random() * 4) + 1);
    $(".col-7").prepend("<div class='"+x7+"'><img src='image/"+x7+".png' class='img fruta'/></div>");
  };
}

var minuto=2;
var segundo=0;
var temporizador=0;

//boton de reiniciar
$(function() {
  $(".btn-reinicio").click(function () {
    clearInterval(temporizador);
    $(".panel-score").css("width","25%");
  	$(".panel-tablero").show();
    var a=1;
    while (a<=7) {
      $(".col-"+a+"").empty();
      a++;
    };
    temporizador=setInterval('tiempo()',1000);
    $(".time").show();
    setInterval('reinsertar()',500);
    $(this).text("Reiniciar");
    minuto=2;
    segundo=0;
  });
})

//Temporizador
function tiempo(){
	if(segundo!=0){
		segundo=segundo-1;}
	if(segundo==0){
		if(minuto==0){
			$(".panel-tablero").hide("drop","slow",marcadores);
			$(".time").hide();}
		segundo=59;
		minuto=minuto-1;}
	$("#timer").html("0"+minuto+":"+segundo);
};


//funcion para poner el marcador en pantalla completa
function marcadores(){
	$( ".panel-score" ).animate({width:'100%'},3000);
	$(".termino").css({"display":"block","text-align":"center"});
};

//funcion para verificar si hay juegos de tres elementos en vertical
function verificarVertical() {
    var uno=[], dos=[], tres=[], cuatro=[], cinco=[], seis=[], siete=[];
    for (var i = 0; i <= 6; i++) {
      uno[i]=$(".col-1").find( "div" ).eq( i ).attr('class');
      dos[i]=$(".col-2").find( "div" ).eq( i ).attr('class');
      tres[i]=$(".col-3").find( "div" ).eq( i ).attr('class');
      cuatro[i]=$(".col-4").find( "div" ).eq( i ).attr('class');
      cinco[i]=$(".col-5").find( "div" ).eq( i ).attr('class');
      seis[i]=$(".col-6").find( "div" ).eq( i ).attr('class');
      siete[i]=$(".col-7").find( "div" ).eq( i ).attr('class');
    };
    for (var c = 0, d=1, e=2; e <=6; e++) {

      if (uno[c]==uno[d]&&uno[d]==uno[e]) {
        $(".col-1").find( "div" ).eq( c ).remove();
        $(".col-1").find( "div" ).eq( d ).remove();
        $(".col-1").find( "div" ).eq( e ).remove();
      };
      if (dos[c]==dos[d]&&dos[d]==dos[e]) {
        $(".col-2").find( "div" ).eq( c ).remove();
        $(".col-2").find( "div" ).eq( d ).remove();
        $(".col-2").find( "div" ).eq( e ).remove();
      };
      if (tres[c]==tres[d]&&tres[d]==tres[e]) {
        $(".col-3").find( "div" ).eq( c ).remove();
        $(".col-3").find( "div" ).eq( d ).remove();
        $(".col-3").find( "div" ).eq( e ).remove();
      };
      if (cuatro[c]==cuatro[d]&&cuatro[d]==cuatro[e]) {
        $(".col-4").find( "div" ).eq( c ).remove();
        $(".col-4").find( "div" ).eq( d ).remove();
        $(".col-4").find( "div" ).eq( e ).remove();
      };
      if (cinco[c]==cinco[d]&&cinco[d]==cinco[e]) {
        $(".col-5").find( "div" ).eq( c ).remove();
        $(".col-5").find( "div" ).eq( d ).remove();
        $(".col-5").find( "div" ).eq( e ).remove();
      };
      if (seis[c]==seis[d]&&seis[d]==seis[e]) {
        $(".col-6").find( "div" ).eq( c ).remove();
        $(".col-6").find( "div" ).eq( d ).remove();
        $(".col-6").find( "div" ).eq( e ).remove();
      };
      if (siete[c]==siete[d]&&siete[d]==siete[e]) {
        $(".col-7").find( "div" ).eq( c ).remove();
        $(".col-7").find( "div" ).eq( d ).remove();
        $(".col-7").find( "div" ).eq( e ).remove();
      };
      c++;
      d++;
    }
}

//verificar si hay combinaciones en horizontal
function verificarHorizontal() {
    var unoH=[], dosH=[], tresH=[], cuatroH=[], cincoH=[], seisH=[], sieteH=[];
    for (var iH = 0; iH <= 6; iH++) {
      unoH[iH]=$(".col-1").find( "div" ).eq( iH ).attr('class');
      dosH[iH]=$(".col-2").find( "div" ).eq( iH ).attr('class');
      tresH[iH]=$(".col-3").find( "div" ).eq( iH ).attr('class');
      cuatroH[iH]=$(".col-4").find( "div" ).eq( iH ).attr('class');
      cincoH[iH]=$(".col-5").find( "div" ).eq( iH ).attr('class');
      seisH[iH]=$(".col-6").find( "div" ).eq( iH ).attr('class');
      sieteH[iH]=$(".col-7").find( "div" ).eq( iH ).attr('class');
    };
    for (var cH = 0; cH <=6; cH++) {

      if (unoH[cH]==dosH[cH]&&unoH[cH]==tresH[cH]) {
        $(".col-1").find( "div" ).eq( cH ).remove();
        $(".col-2").find( "div" ).eq( cH ).remove();
        $(".col-3").find( "div" ).eq( cH ).remove();
      };
      if (dosH[cH]==tresH[cH]&&dosH[cH]==cuatroH[cH]) {
        $(".col-2").find( "div" ).eq( cH ).remove();
        $(".col-3").find( "div" ).eq( cH ).remove();
        $(".col-4").find( "div" ).eq( cH ).remove();
      };
      if (tresH[cH]==cuatroH[cH]&&tresH[cH]==cincoH[cH]) {
        $(".col-3").find( "div" ).eq( cH ).remove();
        $(".col-4").find( "div" ).eq( cH ).remove();
        $(".col-5").find( "div" ).eq( cH ).remove();
      };
      if (cuatroH[cH]==cincoH[cH]&&cuatroH[cH]==seisH[cH]) {
        $(".col-4").find( "div" ).eq( cH ).remove();
        $(".col-5").find( "div" ).eq( cH ).remove();
        $(".col-6").find( "div" ).eq( cH ).remove();
      };
      if (cincoH[cH]==seisH[cH]&&cincoH[cH]==sieteH[cH]) {
        $(".col-5").find( "div" ).eq( cH ).remove();
        $(".col-6").find( "div" ).eq( cH ).remove();
        $(".col-7").find( "div" ).eq( cH ).remove();
      };
    }
};
