//GENERADOR DE LLISTA HOMBRES BESTIA WARHAMMER FANTASY 10th ClubFridayWarNight
window.onload = showcomands;
window.onbeforeunload = areyousure;
function areyousure() {
    var message = 'Sure you want to leave?';
    if (typeof event === 'undefined') {
        event = window.event;
    }
    if (event) {
        event.returnValue = message;
    }
    return message;
}
var portaexist = false;
var gnoblar = false;
function inicio() {

}
function actualizarEvents() {
    $('.comand').on('dblclick', deleteUnit);
    $('.comand').on('click', showDetails);
    $('.hero').on('dblclick', deleteUnit);
    $('.hero').on('click', showDetails);
    $('.basic').on('dblclick', deleteUnit);
    $('.basic').on('click', showDetails);
    $('.esp').on('dblclick', deleteUnit);
    $('.esp').on('click', showDetails);
    $('.sing').on('dblclick', deleteUnit);
    $('.sing').on('click', showDetails);
}

function resetDetail() {
    $("#detail").html("<div id='perfil'></div><div id='detailPuntos'></div><div id='puntosInd'></div><div id='cantidad'></div><div id='reglas' title='Sorry no he explicat les regles especials xD'></div><div id='arma'></div><div id='arma2'></div><div id='armadura'></div>" +
            "<div id='escudo'></div><div id='barda'></div><div id='emboscada'></div><div id='montura'></div><div id='level'></div><div id='saber'></div>" +
            "<div id='campeon'></div><div id='estandarte'></div><div id='musico'></div>" +
            "<div id='armaMagic'></div><div id='armaduraMagic'></div><div id='arcano'></div><div id='talisman'></div><div id='hechizado'></div>" +
            "<div id='portadebatalla'></div><div id='estandarteMag'></div><div id='regaloCampeon'></div><div id='objetoCampeon'></div><div id='gran'></div><div id='mejora1'></div><div id='mejora2'></div><div id='mejora3'></div><div id='mejora4'></div><div id='mejora5'></div><div id='mejora6'></div>" +
            "<div id='regalos'></div><div id='rCorona'></div><div id='rPielN'></div><div id='rDiablo'></div><div id='rZancada'></div><div id='rPellejo'></div><div id='rPielH'></div><div id='rColmillos'></div><div id='rRuna'></div><div id='rSentidos'></div><div id='rPielS'></div><div id='gnob'></div>");
}

function showDetails(event) {
    $("#nombre2").html("");
    $("#nombre3").html("");
    if (event.target.hasAttribute("nombre")) {
        document.getElementById("nombre").innerHTML = event.target.getAttribute("nombre");
        $("#nombre").click(function () {
            $("#nombre").html("");
            $("#nombre2").html("<input type='text' id='inputNombre' style='font-size: 90%; width: 200px'> <button id='buttonNombre' class='btn'>OK</button>");
            $("#nombre3").html(" <button id='nombreRestart' class='btn'>&#8634;</button>");
            document.getElementById("inputNombre").defaultValue = event.target.getAttribute("nombre");
            $("#buttonNombre").click(function () {
                if (!($("#inputNombre").val() === "")) {
                    var newNombre = $("#inputNombre").val();
                    event.target.setAttribute("nombre", newNombre);
                }
                $("#nombre2").html("");
                showDetails(event);
            });
            $("#nombreRestart").click(function () {
                event.target.setAttribute("nombre", event.target.getAttribute("nombre2"));
                showDetails(event);
            });
        });
    }
    updatePunts(event);
    function updatePunts(event) {
        if (event.target.hasAttribute("cextras")) {
            if ($(event.target).hasClass("pirazzo")) {
                $("#detailPuntos").html("<div>Puntos: <b>" + ((parseInt(event.target.getAttribute("cantidad")) * parseInt(event.target.getAttribute("cInd"))) + (parseInt(event.target.getAttribute("cantidad2")) * parseInt(event.target.getAttribute("cInd2"))) + parseInt(event.target.getAttribute("cextras"))) + "</div></b>");
            } else {
                $("#detailPuntos").html("<div>Puntos: <b>" + ((parseInt(event.target.getAttribute("cantidad")) * parseInt(event.target.getAttribute("cInd"))) + parseInt(event.target.getAttribute("cextras"))) + "</div></b>");
            }
        } else if (event.target.hasAttribute("puntos")) {
            $("#detailPuntos").html("<div>Puntos: <b>" + event.target.getAttribute("puntos") + "</div></b>");
        }
        if (event.target.hasAttribute("cInd")) {
            if ($(event.target).hasClass("ren")) {
                if ($(event.target).hasClass("pirazzo")) {
                    $("#puntosInd").html("Puntos por piquero adicional: " + event.target.getAttribute("cInd") + "<br>Puntos por ballestero adicional: " + event.target.getAttribute("cInd2"));
                } else {
                    $("#puntosInd").html("Puntos por miniatura adicional: " + event.target.getAttribute("cInd"));
                }
            } else {
                $("#puntosInd").html("Puntos por miniatura: " + event.target.getAttribute("cInd"));
            }
        } else {
            $("#puntosInd").html("");
        }
    }
    if ($(event.target).hasClass('caudillo')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>5</td><td class='td'>6</td><td class='td'>3</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>5</td><td class='td'>4</td><td class='td'>9</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('granChaman')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>4</td><td class='td'>5</td><td class='td'>3</td><td class='td'>4</td><td class='td'>2</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('tacatauro')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>6</td><td class='td'>6</td><td class='td'>3</td><td class='td'>6</td><td class='td'>5</td><td class='td'>5</td><td class='td'>5</td><td class='td'>5</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Ansia de sangre<br> - Miedo<br> - Furia asesina<br> - Impactos por carga (1D3)<br> - La llamada del carnicero<br> - Carga atronadora");
    }
    if ($(event.target).hasClass('beligor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>4</td><td class='td'>5</td><td class='td'>2</td><td class='td'>4</td><td class='td'>3</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('chaman')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>2</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('minotauroH')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>6</td><td class='td'>5</td><td class='td'>3</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Ansia de sangre<br> - Miedo<br> - Furia asesina<br> - Impactos por carga (1D3)<br> - La llamada del carnicero<br> - Carga atronadora");
    }
    if ($(event.target).hasClass('carro')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Carro</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td></tr>" +
                "<tr><td class='td-left'>Bestigor</td><td class='td'>-</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>-</td><td class='td'>-</td><td class='td'>3</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Gor</td><td class='td'>-</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>-</td><td class='td'>-</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Tuskgor</td><td class='td'>7</td><td class='td'>3</td><td class='td'>-</td><td class='td'>4</td><td class='td'>-</td><td class='td'>-</td><td class='td'>2</td><td class='td'>1</td><td class='td'>-</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Carga atronadora");
    }
    if ($(event.target).hasClass('gor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Gor</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Desgarrador</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('ungor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ungor</td><td class='td'>5</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>6</td></tr>" +
                "<tr><td class='td-left'>Mediocuerno</td><td class='td'>5</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>6</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('mastin')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Mastín</td><td class='td'>7</td><td class='td'>4</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr></table><br>");
        $("#reglas").html("");
    }
    if ($(event.target).hasClass('bestigor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Bestigor</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Corneador</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('arpia')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Arpía</td><td class='td'>5</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td><td class='td'>2</td><td class='td'>6</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Volar");
    }
    if ($(event.target).hasClass('centigor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Centigor</td><td class='td'>8</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>1</td><td class='td'>2</td><td class='td'>2</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Pezuñasangrienta</td><td class='td'>8</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>1</td><td class='td'>2</td><td class='td'>3</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Furia primitiva<br> - Borrachos<br> - Cruzar bosques<br> - Caballería rápida");
    }
    if ($(event.target).hasClass('minotauro')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Minotauro</td><td class='td'>6</td><td class='td'>4</td><td class='td'>3</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Minotauro sangriento</td><td class='td'>6</td><td class='td'>4</td><td class='td'>3</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Ansia de sangre<br> - Miedo<br> - Impactos por carga (1)<br> - La llamada del carnicero<br> - Carga atronadora");
    }
    if ($(event.target).hasClass('troll')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Troll</td><td class='td'>6</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>4</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Miedo<br> - Regeneración<br> - Estupidez<br> - Vómito de troll");
    }
    if ($(event.target).hasClass('quimera')) {
        var nombreQuimera = "";
        if (event.target.getAttribute("nombre") !== "Quimera") {
            nombreQuimera = event.target.getAttribute("nombre") + ", la quimera";
        } else {
            nombreQuimera = event.target.getAttribute("nombre");
        }
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + nombreQuimera + "</td><td class='td'>6</td><td class='td'>4</td><td class='td'>0</td><td class='td'>6</td><td class='td'>5</td><td class='td'>4</td><td class='td'>2</td><td class='td'>6</td><td class='td'>5</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Cola infernal<br> - Volar<br> - Objetivo grande<br> - Piel escamosa (4+)<br> - Terror");
    }
    if ($(event.target).hasClass('ogroD')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ogro Dragón</td><td class='td'>7</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Ogro Dragón Shartak</td><td class='td'>7</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Miedo<br> - Piel escamosa (5+)<br> - Cólera de la tormenta");
    }
    if ($(event.target).hasClass('pumba')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Pumba</td><td class='td'>7</td><td class='td'>3</td><td class='td'>0</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>2</td><td class='td'>4</td><td class='td'>6</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Miedo<br> - Carga atronadora");
    }
    if ($(event.target).hasClass('cigor')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>7</td><td class='td'>2</td><td class='td'>1</td><td class='td'>6</td><td class='td'>5</td><td class='td'>6</td><td class='td'>3</td><td class='td'>5</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Visión ultraterrena<br> - Ataque a distancia<br> - Inmune a la psicología<br> - Objetivo grande<br> - Resistencia a la magia (2)<br> - Devorador de almas<br> - Tozudo<br> - Terror");
    }
    if ($(event.target).hasClass('escuerzo')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>8</td><td class='td'>4</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>5</td><td class='td'>9</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Aura de locura<br> - Volar<br> - Inmune a la psicología<br> - Objetivo grande<br> - Regeneración<br> - Ataques envenenados<br> - Lengua prensil<br> - Salpicaduras de sangre corrupta<br> - Terror");
    }
    if ($(event.target).hasClass('gigante')) {
        var nombreGigante = "";
        if (event.target.getAttribute("nombre") !== "Gigante" && event.target.getAttribute("nombre") !== "Un tio muy grande") {
            nombreGigante = event.target.getAttribute("nombre") + ", el gigante";
        } else {
            nombreGigante = event.target.getAttribute("nombre");
        }
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + nombreGigante + "</td><td class='td'>6</td><td class='td'>3</td><td class='td'>3</td><td class='td'>6</td><td class='td'>5</td><td class='td'>6</td><td class='td'>3</td><td class='td'>*</td><td class='td'>10</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Caída<br> - Ataques especiales del gigante<br> - Objetivo grande<br> - Tozudez<br> - Terror");
    }
    if ($(event.target).hasClass('engendro')) {
        var nombreEngendro = "";
        if (event.target.getAttribute("nombre") !== "Engendro del Caos") {
            nombreEngendro = event.target.getAttribute("nombre") + ", el engendro";
        } else {
            nombreEngendro = event.target.getAttribute("nombre");
        }
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + nombreEngendro + "</td><td>3D6</td><td class='td'>3</td><td class='td'>0</td><td class='td'>4</td><td class='td'>5</td><td class='td'>3</td><td class='td'>2</td><td>1D6+1</td><td class='td'>10</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Miedo<br> - Apéndices oscilantes (Ataques aleatorios)<br> - Horror tambaleante (Movimiento aleatorio)<br> - Indesmoralizable");
    }
    if ($(event.target).hasClass('shaggoth')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>" + event.target.getAttribute("nombre") + "</td><td class='td'>7</td><td class='td'>6</td><td class='td'>3</td><td class='td'>6</td><td class='td'>5</td><td class='td'>6</td><td class='td'>4</td><td class='td'>5</td><td class='td'>9</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Inmune a la psicología<br> - Objetivo grande<br> - Piel escamosa (4+)<br> - Cólera de la tormenta<br> - Terror");
    }
    if ($(event.target).hasClass('piquero')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Piquero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('ballestero')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ballestero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('duelista')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Duelista</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Hostigadores");
    }
    if ($(event.target).hasClass('caballero')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Caballero</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Caballo de guerra</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('jinete')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Jinete</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Caballo de guerra</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('ogro')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ogro</td><td class='td'>6</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>3</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>6</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>4</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Miedo<br> - Arremetida");
    }
    if ($(event.target).hasClass('enano')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Enano</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>2</td><td class='td'>1</td><td class='td'>9</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>2</td><td class='td'>2</td><td class='td'>9</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Avance imparable<br> - Firmeza<br> - Muro de escudos");
    }
    if ($(event.target).hasClass('nordico')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Incursor</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>2</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Furia asesina");
    }
    if ($(event.target).hasClass('halfling')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Halfling</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>2</td><td class='td'>2</td><td class='td'>1</td><td class='td'>5</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Campeón</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>2</td><td class='td'>2</td><td class='td'>1</td><td class='td'>5</td><td class='td'>2</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Cruzar bosques");
    }
    if ($(event.target).hasClass('olla')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Olla caliente</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>5</td><td class='td'>3</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td></tr>" +
                "<tr><td class='td-left'>Halfling</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>2</td><td class='td'>2</td><td class='td'>1</td><td class='td'>5</td><td class='td'>1</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Disparo de la Olla caliente");
    }
    if ($(event.target).hasClass('cañon')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Cañón</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>7</td><td class='td'>3</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td></tr>" +
                "<tr><td class='td-left'>Artillero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('pirazzo')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Pirazzo</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Ballestero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Piquero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Formación mixta");
    }
    if ($(event.target).hasClass('rico')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ricco</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Piquero</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('leopold')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Leopold</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Piquero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Inmunes a la psicología");
    }
    if ($(event.target).hasClass('alcatani')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Rodrigo</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>4</td><td class='td'>2</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Piquero</td><td class='td'>4</td><td class='td'>2</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('vespero')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Vespero</td><td class='td'>4</td><td class='td'>7</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>6</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Duelista</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Hostigadores<br> - Capa y daga<br> - Terror (solo Véspero | La Máscara de la Muerte)");
    }
    if ($(event.target).hasClass('miragliano')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Maximilian</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Tirador</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('almuktar')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Al Muktar</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Jeque Shufti</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>4</td><td class='td'>2</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Ibn</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>0</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Jinete</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Caballo de guerra</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Caballería rápida");
    }
    if ($(event.target).hasClass('braganza')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Braganza</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Ballestero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Pavés");
    }
    if ($(event.target).hasClass('voland')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Voland</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Cazador</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Caballo de guerra</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios");
    }
    if ($(event.target).hasClass('urslo')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Beorg</td><td class='td'>4</td><td class='td'>5</td><td class='td'>0</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Oerl</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>2</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Hombre oso</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>4</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Furia asesina<br> - Salvación especial 4+ (solo Beorg | Colmillo del Oso)<br> - +1 Impactar en el 1r turno de cada combate (Estandarte)");
    }
    if ($(event.target).hasClass('golgfag')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Golgfag</td><td class='td'>6</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>5</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Skaff</td><td class='td'>6</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Ogro</td><td class='td'>6</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Miedo<br> - Golpetazo<br> - Arremetido<br> - Tozudos<br> - Vanguardia<br>");
    }
    if ($(event.target).hasClass('lumpin')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Lumpin Croop</td><td class='td'>4</td><td class='td'>3</td><td class='td'>5</td><td class='td'>3</td><td class='td'>3</td><td class='td'>2</td><td class='td'>6</td><td class='td'>2</td><td class='td'>9</td></tr>" +
                "<tr><td class='td-left'>Ned Puñojamón</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>2</td><td class='td'>2</td><td class='td'>1</td><td class='td'>5</td><td class='td'>1</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Halfling</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>2</td><td class='td'>2</td><td class='td'>1</td><td class='td'>5</td><td class='td'>1</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Cruzar bosques<br> - Hostigadores<br>");
    }
    if ($(event.target).hasClass('oglah')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Oglah Khan</td><td class='td'>4</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Hobgoblin</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>2</td><td class='td'>1</td><td class='td'>6</td></tr>" +
                "<tr><td class='td-left'>Lobo gigante</td><td class='td'>9</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Caballería rápida");
    }
    if ($(event.target).hasClass('drong')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Drong</td><td class='td'>3</td><td class='td'>6</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>3</td><td class='td'>10</td></tr>" +
                "<tr><td class='td-left'>Pirata</td><td class='td'>3</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>9</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Golpe final<br> - Avance imparable<br> - Culto de matadores<br> - Armados hasta los dientes<br>");
    }
    if ($(event.target).hasClass('bronzino')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Bronzino</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Caballo de guerra</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td></tr>" +
                "<tr><td class='td-left'>Artillero</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Cañón</td><td class='td'>8</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>7</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td><td class='td'>-</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - \"¡Retroceda, señor!\"<br> - Pequeño calibre<br> - Movimiento rápido<br> - Combate cuerpo a cuerpo<br> - Despliegue<br>");
    }
    if ($(event.target).hasClass('catrazza')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Daddallo</td><td class='td'>4</td><td class='td'>5</td><td class='td'>5</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>10</td></tr>" +
                "<tr><td class='td-left'>Hombre pájaro</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Volar<br> - Disparar en vuelo<br>");
    }
    if ($(event.target).hasClass('albion')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Hengus</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>2</td><td class='td'>3</td><td class='td'>1</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Cachtorr</td><td class='td'>6</td><td class='td'>3</td><td class='td'>3</td><td class='td'>6</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>*</td><td class='td'>6</td></tr>" +
                "<tr><td class='td-left'>Pelotos</td><td class='td'>6</td><td class='td'>3</td><td class='td'>3</td><td class='td'>6</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>*</td><td class='td'>6</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Miniaturas independientes<br> - Gigantes de Albión (Objetivo grande, terror, caídas)<br> - Ataques de los gigantes de Albión<br> - Báculo de Ogham<br>");
        $("#cantidad").html("<br><b>Unidad original:</b> Hengus el druida y los gigantes de Albión <br>");
    }
    if ($(event.target).hasClass('tichi')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Tichi Huichi</td><td class='td'>6</td><td class='td'>4</td><td class='td'>4</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>5</td><td class='td'>3</td><td class='td'>7</td></tr>" +
                "<tr><td class='td-left'>Eslizón</td><td class='td'>6</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>2</td><td class='td'>1</td><td class='td'>4</td><td class='td'>1</td><td class='td'>6</td></tr>" +
                "<tr><td class='td-left'>Gélido</td><td class='td'>8</td><td class='td'>3</td><td class='td'>0</td><td class='td'>4</td><td class='td'>4</td><td class='td'>1</td><td class='td'>3</td><td class='td'>1</td><td class='td'>3</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Piel escamosa (6+)<br> - Sangre fría<br> - Gélidos \"cornudos\"<br>(miedo, estupidez, piel gruesa, caballería rápida)<br> - Bendecidos por los Ancestrales<br>");
    }
    if ($(event.target).hasClass('ruglud')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Ruglud</td><td class='td'>4</td><td class='td'>5</td><td class='td'>3</td><td class='td'>4</td><td class='td'>5</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>8</td></tr>" +
                "<tr><td class='td-left'>Larva</td><td class='td'>4</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>2</td><td class='td'>1</td><td class='td'>6</td></tr>" +
                "<tr><td class='td-left'>Orco Akorazado</td><td class='td'>4</td><td class='td'>3</td><td class='td'>3</td><td class='td'>3</td><td class='td'>4</td><td class='td'>1</td><td class='td'>2</td><td class='td'>1</td><td class='td'>7</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Animosidad de Ruglud<br> - Ignoran el pánico de los pieles verdes<br> - Larva<br> - Rebanadoras (todos excepto Larva)<br>");
    }
    if ($(event.target).hasClass('maldita')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Richter Kreugar</td><td class='td'>4</td><td class='td'>5</td><td class='td'>3</td><td class='td'>4</td><td class='td'>4</td><td class='td'>2</td><td class='td'>4</td><td class='td'>3</td><td class='td'>9</td></tr>" +
                "<tr><td class='td-left'>Esqueleto</td><td class='td'>4</td><td class='td'>2</td><td class='td'>2</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>2</td><td class='td'>1</td><td class='td'>3</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - No Muertos<br> - Odio a los No Muertos<br> - Independientes<br> - \"Bienvenido a la maldición...\"<br>");
    }
    if ($(event.target).hasClass('mengil')) {
        $("#perfil").html("<table><tr class='perfil'><td class='td'></td><td class='td'>M</td class='td'><td style='padding: 6px'>HA</td><td style='padding: 6px'>HP</td><td class='td'>F</td><td class='td'>R</td><td class='td'>H</td><td class='td'>I</td><td class='td'>A</td><td class='td'>L</td></tr>" +
                "<tr><td class='td-left'>Mengil</td><td class='td'>5</td><td class='td'>6</td><td class='td'>6</td><td class='td'>4</td><td class='td'>3</td><td class='td'>2</td><td class='td'>7</td><td class='td'>3</td><td class='td'>9</td></tr>" +
                "<tr><td class='td-left'>Desollador</td><td class='td'>5</td><td class='td'>5</td><td class='td'>5</td><td class='td'>3</td><td class='td'>3</td><td class='td'>1</td><td class='td'>5</td><td class='td'>1</td><td class='td'>8</td></tr></table><br>");
        $("#reglas").html("<br><b>Reglas especiales:</b><br> - Mercenarios<br> - Siempre ataca primero<br> - Destreza homicida<br> - [Odio a los Altos Elfos]<br> - Hostigadores<br> - Despellejar<br> - Veneno negro<br>");
    }
//CANTIDAD
    if (event.target.hasAttribute("cantidad")) {
        showCantidad();
        function showCantidad() {
            if ($(event.target).hasClass("gor") || $(event.target).hasClass("bestigor") || $(event.target).hasClass("piquero") || $(event.target).hasClass("ballestero") || $(event.target).hasClass("enano") || $(event.target).hasClass("nordico") || $(event.target).hasClass("halfling")) {
                $("#cantidad").html("<br><b>Tamaño de unidad:</b> (10+) <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 10) {
                        $("#tamaño").val(10);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("ungor") || $(event.target).hasClass("duelista")) {
                $("#cantidad").html("<br><b>Tamaño de unidad:</b> (5 - 20) <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 5) {
                        $("#tamaño").val(5);
                    } else if ($("#tamaño").val() > 20) {
                        $("#tamaño").val(20);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("mastin") || $(event.target).hasClass("arpia") || $(event.target).hasClass("centigor") || $(event.target).hasClass("caballero") || $(event.target).hasClass("jinete")) {
                $("#cantidad").html("<br><b>Tamaño de unidad:</b> (5+) <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 5) {
                        $("#tamaño").val(5);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("minotauro") || $(event.target).hasClass("troll") || $(event.target).hasClass("ogroD") || $(event.target).hasClass("ogro")) {
                $("#cantidad").html("<br><b>Tamaño de unidad:</b> (3+) <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 3) {
                        $("#tamaño").val(3);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("pumba")) {
                $("#cantidad").html("<br><b>Tamaño de unidad:</b> (1+) <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 1) {
                        $("#tamaño").val(1);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("pirazzo")) {
                $("#cantidad").html("<br><b>Unidad original:</b> Pirazzo, 4 ballesteros y 5 piqueros <br><b>Tamaño de unidad: </b>(10+) <br><b>Piqueros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br><b>Ballesteros adicionales:</b> <br><input type='number' id='tamaño2' value='" + event.target.getAttribute("cantidad2") + "'><br>");
                var anteVal = $("#tamaño").val();
                $("#tamaño").on("change paste", function () {
                    if (!($("#tamaño").val())) {
                        $("#tamaño").val(anteVal);
                    } else if ($("#tamaño").val() < 0) {
                        $("#tamaño").val(0);
                    } else {
                        var newVal = $("#tamaño").val();
                        event.target.setAttribute("cantidad", parseInt(newVal));
                        var aux = 0;
                        if (parseInt(newVal) > parseInt(anteVal)) {
                            aux = parseInt(newVal) - parseInt(anteVal);
                            incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal) < parseInt(anteVal)) {
                            aux = parseInt(anteVal) - parseInt(newVal);
                            reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
                var anteVal2 = $("#tamaño2").val();
                $("#tamaño2").on("change paste", function () {
                    if (!($("#tamaño2").val())) {
                        $("#tamaño2").val(anteVal2);
                    } else if ($("#tamaño2").val() < 0) {
                        $("#tamaño2").val(0);
                    } else {
                        var newVal2 = $("#tamaño2").val();
                        event.target.setAttribute("cantidad2", parseInt(newVal2));
                        var aux = 0;
                        if (parseInt(newVal2) > parseInt(anteVal2)) {
                            aux = parseInt(newVal2) - parseInt(anteVal2);
                            incrementarPuntos(event.target.getAttribute("cInd2") * aux, event.target.getAttribute("tipo"));
                        } else if (parseInt(newVal2) < parseInt(anteVal2)) {
                            aux = parseInt(anteVal2) - parseInt(newVal2);
                            reducirPuntos(event.target.getAttribute("cInd2") * aux, event.target.getAttribute("tipo"));
                        }
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showCantidad();
                });
            } else if ($(event.target).hasClass("ren")) {
                if ($(event.target).hasClass("alcatani")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Rodrigo Delmonte y 9 piqueros <br><b>Tamaño de unidad: </b>(10+) <br><b>Piqueros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("leopold")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Leopold y 9 piqueros <br><b>Tamaño de unidad: </b>(10+) <br><b>Piqueros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("rico")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Ricco \"el Desharrapado\" y 9 piqueros <br><b>Tamaño de unidad: </b>(10+) <br><b>Piqueros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("vespero")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Véspero y 4 duelistas <br><b>Tamaño de unidad: </b>(5+) <br><b>Duelistas adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("miragliano")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Maximilian y 9 tiradores <br><b>Tamaño de unidad: </b>(10+) <br><b>Tiradores adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("almuktar")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Al Muktar, el Jeque Ahmed Shufti, Ibn y 2 jinetes <br><b>Tamaño de unidad: </b>(5+) <br><b>Jinetes adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("braganza")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Luca Braganza y 9 ballesteros <br><b>Tamaño de unidad: </b>(10+) <br><b>Ballesteros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("voland")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Voland y 4 cazadores <br><b>Tamaño de unidad: </b>(5+) <br><b>Cazadores adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("urslo")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Beorg, Oerl el joven y 8 hombres oso <br><b>Tamaño de unidad: </b>(10+) <br><b>Hombres oso adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("golgfag")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Golgfag, Skaff y 2 ogros <br><b>Tamaño de unidad: </b>(4+) <br><b>Ogros adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("lumpin")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Lumpin Croop, Ned (o Neddly) Puñojamón y 3 halflings <br><b>Tamaño de unidad: </b>(5+) <br><b>Halflings adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("oglah")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Oglah Khan y 4 jinetes hobgoblin <br><b>Tamaño de unidad: </b>(5+) <br><b>Jinetes hobgoblins adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("drong")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Drong el largo y 9 piratas enanos <br><b>Tamaño de unidad: </b>(10-30) <br><b>Piratas adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("bronzino")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> el maestro artillero Bronzino y un <br>cañón con su cureña tirada por caballos y sus artilleros <br><b>Tamaño de unidad: </b>(cada cañón tiene una dotación <br>de 3 artilleros, uno de los cuales monta en un caballo <br>de guerra) <br><b>Cañones adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("catrazza")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Daddallo y 4 hombres pájaro <br><b>Tamaño de unidad: </b>(5-10)<br><b>Hombres pájaro adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("tichi")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Tichi Huichi y 4 eslizones de gran cresta <br><b>Tamaño de unidad: </b>(5-20)<br><b>Eslizones adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("ruglud")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Ruglud Mascahuesos, Larva y 8 orcos akorazados <br><b>Tamaño de unidad: </b>(10+)<br><b>Orcos akorazados adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("maldita")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Richter Kreugar y 9 esqueletos de la Compañía Maldita <br><b>Tamaño de unidad: </b>(10-30)<br><b>Esqueletos adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                } else if ($(event.target).hasClass("mengil")) {
                    $("#cantidad").html("<br><b>Unidad original:</b> Mengil y 4 desolladores <br><b>Tamaño de unidad: </b>(5-15)<br><b>Desolladores adicionales:</b> <br><input type='number' id='tamaño' value='" + event.target.getAttribute("cantidad") + "'><br>");
                }
                if ($(event.target).hasClass("drong") || $(event.target).hasClass("maldita")) {
                    var anteVal = $("#tamaño").val();
                    $("#tamaño").on("change paste", function () {
                        if (!($("#tamaño").val())) {
                            $("#tamaño").val(anteVal);
                        } else if ($("#tamaño").val() < 0) {
                            $("#tamaño").val(0);
                        } else if ($("#tamaño").val() > 20) {
                            $("#tamaño").val(30);
                        } else {
                            var newVal = $("#tamaño").val();
                            event.target.setAttribute("cantidad", parseInt(newVal));
                            var aux = 0;
                            if (parseInt(newVal) > parseInt(anteVal)) {
                                aux = parseInt(newVal) - parseInt(anteVal);
                                incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            } else if (parseInt(newVal) < parseInt(anteVal)) {
                                aux = parseInt(anteVal) - parseInt(newVal);
                                reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            }
                        }
                        actualizarUnidad(event);
                        updatePunts(event);
                        showCantidad();
                    });
                } else if ($(event.target).hasClass("catrazza")) {
                    var anteVal = $("#tamaño").val();
                    $("#tamaño").on("change paste", function () {
                        if (!($("#tamaño").val())) {
                            $("#tamaño").val(anteVal);
                        } else if ($("#tamaño").val() < 0) {
                            $("#tamaño").val(0);
                        } else if ($("#tamaño").val() > 5) {
                            $("#tamaño").val(30);
                        } else {
                            var newVal = $("#tamaño").val();
                            event.target.setAttribute("cantidad", parseInt(newVal));
                            var aux = 0;
                            if (parseInt(newVal) > parseInt(anteVal)) {
                                aux = parseInt(newVal) - parseInt(anteVal);
                                incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            } else if (parseInt(newVal) < parseInt(anteVal)) {
                                aux = parseInt(anteVal) - parseInt(newVal);
                                reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            }
                        }
                        actualizarUnidad(event);
                        updatePunts(event);
                        showCantidad();
                    });
                } else if ($(event.target).hasClass("tichi")) {
                    var anteVal = $("#tamaño").val();
                    $("#tamaño").on("change paste", function () {
                        if (!($("#tamaño").val())) {
                            $("#tamaño").val(anteVal);
                        } else if ($("#tamaño").val() < 0) {
                            $("#tamaño").val(0);
                        } else if ($("#tamaño").val() > 15) {
                            $("#tamaño").val(30);
                        } else {
                            var newVal = $("#tamaño").val();
                            event.target.setAttribute("cantidad", parseInt(newVal));
                            var aux = 0;
                            if (parseInt(newVal) > parseInt(anteVal)) {
                                aux = parseInt(newVal) - parseInt(anteVal);
                                incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            } else if (parseInt(newVal) < parseInt(anteVal)) {
                                aux = parseInt(anteVal) - parseInt(newVal);
                                reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            }
                        }
                        actualizarUnidad(event);
                        updatePunts(event);
                        showCantidad();
                    });
                } else if ($(event.target).hasClass("mengil")) {
                    var anteVal = $("#tamaño").val();
                    $("#tamaño").on("change paste", function () {
                        if (!($("#tamaño").val())) {
                            $("#tamaño").val(anteVal);
                        } else if ($("#tamaño").val() < 0) {
                            $("#tamaño").val(0);
                        } else if ($("#tamaño").val() > 10) {
                            $("#tamaño").val(30);
                        } else {
                            var newVal = $("#tamaño").val();
                            event.target.setAttribute("cantidad", parseInt(newVal));
                            var aux = 0;
                            if (parseInt(newVal) > parseInt(anteVal)) {
                                aux = parseInt(newVal) - parseInt(anteVal);
                                incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            } else if (parseInt(newVal) < parseInt(anteVal)) {
                                aux = parseInt(anteVal) - parseInt(newVal);
                                reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            }
                        }
                        actualizarUnidad(event);
                        updatePunts(event);
                        showCantidad();
                    });
                } else {
                    var anteVal = $("#tamaño").val();
                    $("#tamaño").on("change paste", function () {
                        if (!($("#tamaño").val())) {
                            $("#tamaño").val(anteVal);
                        } else if ($("#tamaño").val() < 0) {
                            $("#tamaño").val(0);
                        } else {
                            var newVal = $("#tamaño").val();
                            event.target.setAttribute("cantidad", parseInt(newVal));
                            var aux = 0;
                            if (parseInt(newVal) > parseInt(anteVal)) {
                                aux = parseInt(newVal) - parseInt(anteVal);
                                incrementarPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            } else if (parseInt(newVal) < parseInt(anteVal)) {
                                aux = parseInt(anteVal) - parseInt(newVal);
                                reducirPuntos(event.target.getAttribute("cInd") * aux, event.target.getAttribute("tipo"));
                            }
                        }
                        actualizarUnidad(event);
                        updatePunts(event);
                        showCantidad();
                    });
                }
            }
        }
    } else {
        $("#cantidad").html("");
    }
//GRUPO DE MANDO: CAMPEON
    if (event.target.hasAttribute("campeon")) {
        showCampeon();
        function showCampeon() {
            if (event.target.getAttribute("campeon") === "no") {
                if ($(event.target).hasClass("gor")) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Desgarrador (10)");
                } else if ($(event.target).hasClass('ungor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Mediocuerno (10)");
                } else if ($(event.target).hasClass('bestigor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Corneador (10)");
                } else if ($(event.target).hasClass('centigor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Pezuñasangrienta (10)");
                } else if ($(event.target).hasClass('minotauro')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Minotauro sangriento (10)");
                } else if ($(event.target).hasClass('ogroD')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Ogro Dragón Shartak (10)");
                } else if ($(event.target).hasClass('merc')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox'> Campeón (10)");
                }
            } else {
                if ($(event.target).hasClass("gor")) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Desgarrador (10)");
                } else if ($(event.target).hasClass('ungor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Mediocuerno (10)");
                } else if ($(event.target).hasClass('bestigor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Corneador (10)");
                } else if ($(event.target).hasClass('centigor')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Pezuñasangrienta (10)");
                } else if ($(event.target).hasClass('minotauro')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Minotauro sangriento (10)");
                } else if ($(event.target).hasClass('ogroD')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Ogro Dragón Shartak (10)");
                } else if ($(event.target).hasClass('merc')) {
                    $("#campeon").html("<br><b>Grupo de mando: </b><br><input type='checkbox' id='campBox' checked> Campeón (10)");
                }
            }
            $("#campBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("campeon", "si");
                    event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + 10);
                    incrementarPuntos(10, event.target.getAttribute("tipo"));
                } else {
                    event.target.setAttribute("campeon", "no");
                    if (event.target.hasAttribute("pRegaloC")) {
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10 - parseInt(event.target.getAttribute("pRegaloC")));
                        reducirPuntos(parseInt(event.target.getAttribute("pRegaloC")), event.target.getAttribute("tipo"));
                        event.target.setAttribute("regaloCampeon", 0);
                        event.target.setAttribute("pRegaloC", 0);
                    } else if (event.target.hasAttribute("pObjetoC")) {
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10 - parseInt(event.target.getAttribute("pObjetoC")));
                        reducirPuntos(parseInt(event.target.getAttribute("pObjetoC")), event.target.getAttribute("tipo"));
                        event.target.setAttribute("objetoCampeon", 0);
                        event.target.setAttribute("pObjetoC", 0);
                    } else {
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10);
                    }
                    reducirPuntos(10, event.target.getAttribute("tipo"));
                }
                updatePunts(event);
                showCampeon();
                showRegaloCampeon();
                showObjetoCampeon();
            });
        }
    } else {
        $("#campeon").html("");
    }
//GRUPO DE MANDO: ESTANDARTE
    if (event.target.hasAttribute("estandarte")) {
        showEstandarte();
        function showEstandarte() {
            if (event.target.getAttribute("estandarte") === "no") {
                $("#estandarte").html("<input type='checkbox' id='estBox'> Estandarte (10)");
                $("#estBox").click(function () {
                    if ($(this).is(":checked")) {
                        event.target.setAttribute("estandarte", "si");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + 10);
                        incrementarPuntos(10, event.target.getAttribute("tipo"));
                    } else {
                        if (event.target.getAttribute("estandarteMag")) {
                            event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - parseInt(document.getElementById("listEstandarte").value));
                            reducirPuntos(parseInt(document.getElementById("listEstandarte").value), event.target.getAttribute("tipo"));
                            event.target.setAttribute("estandarteMag", 0);
                        }
                        event.target.setAttribute("estandarte", "no");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                    }
                    updatePunts(event);
                    showEstandarte();
                    showEstMag();
                });
            } else {
                $("#estandarte").html("<input type='checkbox' id='estBox' checked> Estandarte (10)");
                $("#estBox").click(function () {
                    if ($(this).is(":checked")) {
                        event.target.setAttribute("estandarte", "si");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + 10);
                        incrementarPuntos(10, event.target.getAttribute("tipo"));
                    } else {
                        if (event.target.getAttribute("estandarteMag")) {
                            event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - parseInt(document.getElementById("listEstandarte").value));
                            reducirPuntos(parseInt(document.getElementById("listEstandarte").value), event.target.getAttribute("tipo"));
                            event.target.setAttribute("estandarteMag", 0);
                        }
                        event.target.setAttribute("estandarte", "no");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showEstandarte();
                    showEstMag();
                });
            }
        }
    } else {
        $("#estandarte").html("");
    }
//GRUPO DE MANDO: MÚSICO
    if (event.target.hasAttribute("musico")) {
        showMusico();
        function showMusico() {
            if (event.target.getAttribute("musico") === "no") {
                $("#musico").html("<input type='checkbox' id='musBox'> Músico (10)");
                $("#musBox").click(function () {
                    if ($(this).is(":checked")) {
                        event.target.setAttribute("musico", "si");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + 10);
                        incrementarPuntos(10, event.target.getAttribute("tipo"));
                    } else {
                        event.target.setAttribute("musico", "no");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showMusico();
                });
            } else {
                $("#musico").html("<input type='checkbox' id='musBox' checked> Músico (10)");
                $("#musBox").click(function () {
                    if ($(this).is(":checked")) {
                        event.target.setAttribute("musico", "si");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + 10);
                        incrementarPuntos(10, event.target.getAttribute("tipo"));
                    } else {
                        event.target.setAttribute("musico", "no");
                        event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                    }
                    actualizarUnidad(event);
                    updatePunts(event);
                    showMusico();
                });
            }
        }
    } else {
        $("#musico").html("");
    }
//ESCUDO
    if (event.target.hasAttribute("escudo")) {
        showEscudo();
        function showEscudo() {
            if (event.target.getAttribute("escudo") === "no") {
                if ($(event.target).hasClass('caudillo')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Escudo (3)");
                } else if ($(event.target).hasClass('tacatauro')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Escudo (5)");
                } else if ($(event.target).hasClass('beligor')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Escudo (2)");
                } else if ($(event.target).hasClass('minotauroH')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Escudo (4)");
                } else if ($(event.target).hasClass('duelista')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Cuchillos arrojadizos (1)");
                } else if ($(event.target).hasClass('caballero') || $(event.target).hasClass('jinete') || $(event.target).hasClass('enano') || $(event.target).hasClass('nordico')) {
                    $("#escudo").html("<input type='checkbox' id='escBox'> Escudo (1)");
                }
                $("#escBox").click(function () {
                    if ($(this).is(":checked")) {
                        sumaEscudo();
                    } else {
                        restaEscudo();
                    }
                });
            } else {
                if ($(event.target).hasClass('caudillo')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Escudo (3)");
                } else if ($(event.target).hasClass('tacatauro')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Escudo (5)");
                } else if ($(event.target).hasClass('beligor')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Escudo (2)");
                } else if ($(event.target).hasClass('minotauroH')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Escudo (4)");
                } else if ($(event.target).hasClass('duelista')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Cuchillos arrojadizos (1)");
                } else if ($(event.target).hasClass('caballero') || $(event.target).hasClass('jinete') || $(event.target).hasClass('enano') || $(event.target).hasClass('nordico')) {
                    $("#escudo").html("<input type='checkbox' id='escBox' checked> Escudo (1)");
                }
                $("#escBox").click(function () {
                    if ($(this).is(":checked")) {
                        sumaEscudo();
                    } else {
                        restaEscudo();
                    }
                });
            }
        }
    } else {
        $("#escudo").html("");
    }
    function sumaEscudo() {
        if ($(event.target).hasClass('caudillo')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 3);
            incrementarPuntos(3, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('tacatauro')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
            incrementarPuntos(5, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('beligor')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 2);
            incrementarPuntos(2, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('minotauroH')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 4);
            incrementarPuntos(4, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('duelista') || $(event.target).hasClass('caballero') || $(event.target).hasClass('jinete') || $(event.target).hasClass('enano') || $(event.target).hasClass('nordico')) {
            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
            incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
        }
        event.target.setAttribute("escudo", "si");
        updatePunts(event);
    }
    function restaEscudo() {
        if ($(event.target).hasClass('caudillo')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 3);
            reducirPuntos(3, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('tacatauro')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
            reducirPuntos(5, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('beligor')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 2);
            reducirPuntos(2, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('minotauroH')) {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 4);
            reducirPuntos(4, event.target.getAttribute("tipo"));
        } else if ($(event.target).hasClass('duelista') || $(event.target).hasClass('caballero') || $(event.target).hasClass('jinete') || $(event.target).hasClass('enano') || $(event.target).hasClass('nordico')) {
            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
            reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
        }
        event.target.setAttribute("escudo", "no");
        updatePunts(event);
    }
//BARDA
    if (event.target.hasAttribute("barda")) {
        showBarda();
        function showBarda() {
            if (event.target.getAttribute("barda") === "no") {
                $("#barda").html("<input type='checkbox' id='bardBox'> Barda (1)");
            } else {
                $("#barda").html("<input type='checkbox' id='bardBox' checked> Barda (1)");
            }
            $("#bardBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("barda", "si");
                    updatePunts(event);
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("barda", "no");
                    updatePunts(event);
                }
            });
        }
    } else {
        $("#barda").html("");
    }
//ARCO //ARMA2
    if (event.target.hasAttribute("arco")) {
        showArco();
        function showArco() {
            if (event.target.getAttribute("arco") === "no") {
                if ($(event.target).hasClass('jinete')) {
                    $("#arma2").html("<input type='checkbox' id='arcBox'> Arco (3)");
                } else if ($(event.target).hasClass('enano')) {
                    $("#arma2").html("<input type='checkbox' id='arcBox'> Ballesta (4)");
                }
            } else {
                if ($(event.target).hasClass('jinete')) {
                    $("#arma2").html("<input type='checkbox' id='arcBox' checked> Arco (3)");
                } else if ($(event.target).hasClass('enano')) {
                    $("#arma2").html("<input type='checkbox' id='arcBox' checked> Ballesta (4)");
                }
            }
            $("#arcBox").click(function () {
                if ($(this).is(":checked")) {
                    if ($(event.target).hasClass('jinete')) {
                        event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                        incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    } else if ($(event.target).hasClass('enano')) {
                        event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 4);
                        incrementarPuntos(4 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    }
                    event.target.setAttribute("arco", "si");
                    updatePunts(event);
                } else {
                    if ($(event.target).hasClass('jinete')) {
                        event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                        reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    } else if ($(event.target).hasClass('enano')) {
                        event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 4);
                        reducirPuntos(4 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    }
                    event.target.setAttribute("arco", "no");
                    updatePunts(event);
                }
            });
        }
    } else {
        $("#arma2").html("");
    }
//ARMA
    if (event.target.hasAttribute("arma")) {
        if ($(event.target).hasClass('caudillo')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (6)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (6)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (6)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('granChaman') || $(event.target).hasClass('chaman')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (2)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('tacatauro')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (12)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (12)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (12)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('beligor')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (4)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (4)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (4)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('minotauroH')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (11)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (11)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (11)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('gor')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (1)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (1)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (1)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (1)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' > Arma adicional (1)" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Escudo (1)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('carro')) {
            $("#arma").html("<br><b>Dotación: </b><br> - 1 Bestigor y 1 Gor<br>" +
                    "<br><b>Equipo: </b><br> - Arma a dos manos (Bestigor)<br> - Lanza (Gor)<br>" +
                    "<br><b>Tirado por: </b><br> - 2 Tuskgors<br><br><b>Armadura del carro: </b><br><i> - Salvación por armadura 4+</i><br>");
        } else if ($(event.target).hasClass('ungor')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br> - Lanza<br> - Escudo<br>" +
                        "<br><b>Equipo adicional: </b><br><input type='radio' name='arma' id='arma1R' checked> Ninguno" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arco corto (1)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Javalina (1)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br> - Lanza<br> - Escudo<br>" +
                        "<br><b>Equipo adicional: </b><br><input type='radio' name='arma' id='arma1R'> Ninguno" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arco corto (1)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Javalina (1)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br> - Lanza<br> - Escudo<br>" +
                        "<br><b>Equipo adicional: </b><br><input type='radio' name='arma' id='arma1R'> Ninguno" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arco corto (1)" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Javalina (1)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('mastin')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Zarpas y colmillos (arma de mano)<br>");
        } else if ($(event.target).hasClass('bestigor')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma a dos manos <br> - Armadura pesada<br>");
        } else if ($(event.target).hasClass('arpia')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Garras (arma de mano)<br>");
        } else if ($(event.target).hasClass('centigor')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Lanza y escudo" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (2)");
                clickEventArmas(event);
            } else {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Lanza y escudo" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (2)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('minotauro')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (3)" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (3)" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (3)" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Escudo (3)" +
                        "<br><input type='radio' name='arma' id='arma2R' > Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('troll')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)");
                clickEventArmas(event);
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('ogroD')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Alabarda (8)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Alabarda (8)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Alabarda (8)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' > Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Alabarda (8)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('pumba')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Colmillos, pezuñas y mucho mal genio (arma de mano)<br>");
        } else if ($(event.target).hasClass('cigor')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Garras y cuernos de gran tamaño (arma de mano)<br>");
        } else if ($(event.target).hasClass('gigante')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Gran garrote y mal aliento (arma de mano)<br>");
        } else if ($(event.target).hasClass('escuerzo')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Mandíbulas y garras (arma de mano)<br>");
        } else if ($(event.target).hasClass('quimera')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Garras, una cola y varias mandíbulas (arma de mano)<br>");
        } else if ($(event.target).hasClass('engendro')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Tentáculos, garras y dientes (arma de mano)<br>");
        } else if ($(event.target).hasClass('shaggoth')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (5)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (12)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (5)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (12)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (5)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (12)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('piquero')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Pica (y Rasca)<br>");
        } else if ($(event.target).hasClass('ballestero')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma de mano<br> - Ballesta<br>");
        } else if ($(event.target).hasClass('duelista')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Rodela (escudo) (1)" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Pistola (3)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (1)" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Pistola (3)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R'> Escudo (1)" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Pistola (3)");
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Escudo (1)" +
                        "<br><input type='radio' name='arma' id='arma2R' > Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Pistola (3)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('caballero')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Lanza de caballería" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos" +
                        "<br> - Armadura pesada<br> - Caballo de guerra<br>");
                clickEventArmas(event);
            } else {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Lanza de caballería" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos" +
                        "<br> - Armadura pesada<br> - Caballo de guerra<br>");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('jinete')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Lanza (1)" +
                        "<br> - Caballo de guerra<br>");
                clickEventArmas(event);
            } else {
                $("#arma").html("<br><b>Equipo: </b><br> - Caballo de guerra<br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Lanza (1)" +
                        "<br> - Caballo de guerra<br>");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('ogro')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (8)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (3)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (8)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('enano')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (2)");
                clickEventArmas(event);
            } else {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (2)");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('nordico')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Mayal (2)");
            } else if (event.target.getAttribute("arma") === "ad") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' checked> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Mayal (2)");
            } else if (event.target.getAttribute("arma") === "2m") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R'> Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Arma a dos manos (3)" +
                        "<br><input type='radio' name='arma' id='arma4R'> Mayal (2)");
            } else if (event.target.getAttribute("arma") === "es") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano" +
                        "<br><input type='radio' name='arma' id='arma2R' > Arma adicional (2)" +
                        "<br><input type='radio' name='arma' id='arma3R'> Arma a dos manos (3)" +
                        "<br><input type='radio' name='arma' id='arma4R' checked> Mayal (2)");
            }
            clickEventArmas(event);
        } else if ($(event.target).hasClass('halfling')) {
            if (event.target.getAttribute("arma") === "no") {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R' checked> Arma de mano y arco" +
                        "<br><input type='radio' name='arma' id='arma3R'> Lanza, armadura ligera y escudo");
                clickEventArmas(event);
            } else {
                $("#arma").html("<br><b>Equipo: </b><br><input type='radio' name='arma' id='arma1R'> Arma de mano y arco" +
                        "<br><input type='radio' name='arma' id='arma3R' checked> Lanza, armadura ligera y escudo");
                clickEventArmas(event);
            }
        } else if ($(event.target).hasClass('olla') || $(event.target).hasClass('cañon')) {
            $("#arma").html("<br><b>Equipo (dotación): </b><br> - Arma de mano <br>");
        } else if ($(event.target).hasClass('pirazzo')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Pica o ballesta<br> - Armadura ligera<br><br><b>Equipo: </b>(Pirazzo)<br> - Dos armas de mano<br> - Ballesta<br> - Armadura ligera<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (ballestero)<br> - Músico (ballestero)<br>");
        } else if ($(event.target).hasClass('rico')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Pica <br> - Armadura pesada<br><br><b>Equipo: </b>(Ricco)<br> - Dos armas de mano<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('leopold')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Pica <br> - Armadura ligera<br><br><b>Equipo: </b>(Leopold)<br> - Arma de mano<br> - Pistola<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('alcatani')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Pica <br> - Armadura ligera<br><br><b>Equipo: </b>(Rodrigo)<br> - Dos armas de mano<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('vespero')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Dos armas de mano <br> - Cuchillos arrojadizos<br> - Capas<br> - Armadura ligera<br><br><b>Objetos mágicos: </b>(Véspero)<br> - La Máscara de la Muerte<br>");
        } else if ($(event.target).hasClass('miragliano')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma de mano <br> - Ballesta<br> - Armadura ligera<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('almuktar')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma de mano <br> - Escudo<br> - Armadura ligera<br> - Caballo de guerra<br><br><b>Objetos mágicos: </b><br> - Cimitarra de Dakisir (Jeque Shufti)<br> - Estandarte Negro de los Muktarhin<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Ibn)<br> - Músico<br>");
        } else if ($(event.target).hasClass('braganza')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Arma de mano <br> - Ballesta<br> - Armadura pesada<br> - Pavés<br><br><b>Equipo: </b>(Braganza)<br> - Arma de mano<br> - Pistola<br> - Ballesta<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('voland')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Lanza de caballería<br> - Armadura pesada<br> - Escudo<br> - Caballo de guerra con barda<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte<br> - Músico<br>");
        } else if ($(event.target).hasClass('urslo')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Arma de mano<br> - Armadura ligera<br> - Escudo<br><br><b>Equipo: </b>(Beorg)<br> - Garras y dinetes (Arma de mano)<br><br><b>Objetos mágicos: </b>(Beorg)<br> - Colmillo de Oso<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Oerl) (Estandarte del Oso)<br> - Músico<br>");
        } else if ($(event.target).hasClass('golgfag')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Dos armas de mano<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Skaff)<br> - Músico<br>");
        } else if ($(event.target).hasClass('lumpin')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Armas de mano<br> - Arco<br><br><b>Equipo :</b> (Lumpin)<br> - Arma de mano<br> - Arco<br> - Armadura ligera<br> - Escudo<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte <br> - Músico<br>");
        } else if ($(event.target).hasClass('oglah')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Lanza<br> - Arco<br> - Armadura ligera<br> - Escudo<br> - Lobo gigante<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte <br> - Músico<br>");
        } else if ($(event.target).hasClass('drong')) {
            $("#arma").html("<br><b>Equipo: </b><br> - ¡Montones y montones de pistolas!<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte <br> - Músico<br>");
        } else if ($(event.target).hasClass('bronzino')) {
            $("#arma").html("<br><b>Equipo: </b>(dotación)<br> - Arma de mano<br> - Caballo de guerra (solo 1 miembro)<br><br><b>Equipo: </b>(Bronzino)<br> - Arma de mano<br> - Armadura completa<br> - Caballo de guerra<br>");
        } else if ($(event.target).hasClass('catrazza')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma de mano<br> - Ballesta ligera<br>");
        } else if ($(event.target).hasClass('albion')) {
            $("#arma").html("<br><b>Equipo: </b>(gigantes)<br> - Enormes peñascos o monolitos (Arma de mano)<br><br><b>Equipo: </b>(Hengus)<br> - Arma de mano<br> - Báculo Ogham<br>");
        } else if ($(event.target).hasClass('tichi')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Lanza<br> - Escudo<br>" +
                    "<br><b>Grupo de mando:</b><br> - Músico<br>");
        } else if ($(event.target).hasClass('ruglud')) {
            $("#arma").html("<br><b>Equipo: </b><br> - Arma de mano<br> - Ballesta<br> - Armadura pesada<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Larva)<br> - Músico<br>");
        } else if ($(event.target).hasClass('maldita')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Arma de mano<br> - Escudo<br> - Armadura ligera<br><br><b>Equipo: </b>(Richter Kreugar)<br> - Arma de mano<br> - Escudo<br> - Armadura pesada<br><br><b>Objetos mágicos: </b>(Richter Kreugar)<br> - Gema Oscura de los Condenados<br> - Aflicción<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Estandarte de los Malditos)<br> - Músico<br>");
        } else if ($(event.target).hasClass('mengil')) {
            $("#arma").html("<br><b>Equipo: </b>(tropa)<br> - Arma a dos manos<br> - Ballesta de repetición<br><br><b>Equipo: </b>(Mengil)<br> - Arma a dos manos<br> - Pistola ballesta<br>" +
                    "<br><b>Grupo de mando:</b><br> - Estandarte (Estandarte de Kalad)<br> - Músico<br>");
        }
    } else {
        $("#arma").html("");
    }
    function clickEventArmas() {
        $("#arma1R").click(function () {
            if (event.target.getAttribute("arma") !== "no") {
                restartArma(event);
                event.target.setAttribute("arma", "no");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
        $("#arma2R").click(function () {
            if (event.target.getAttribute("arma") !== "ad") {
                restartArma(event);
                if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('tacatauro') || $(event.target).hasClass('minotauroH')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 3);
                    incrementarPuntos(3, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('beligor') || $(event.target).hasClass('granChaman') || $(event.target).hasClass('chaman')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 2);
                    incrementarPuntos(2, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('gor') || $(event.target).hasClass('ungor')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('minotauro') || $(event.target).hasClass('troll') || $(event.target).hasClass('ogroD') || $(event.target).hasClass('ogro')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                    incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('shaggoth')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                    incrementarPuntos(5, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('duelista') || $(event.target).hasClass('nordico')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('jinete')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
                event.target.setAttribute("arma", "ad");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
        $("#arma3R").click(function () {
            if (event.target.getAttribute("arma") !== "2m") {
                restartArma(event);
                if ($(event.target).hasClass('caudillo')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 6);
                    incrementarPuntos(6, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('tacatauro') || $(event.target).hasClass('shaggoth')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 12);
                    incrementarPuntos(12, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('beligor')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 4);
                    incrementarPuntos(4, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('minotauroH')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 11);
                    incrementarPuntos(11, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('centigor') || $(event.target).hasClass('enano')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('minotauro') || $(event.target).hasClass('ogroD') || $(event.target).hasClass('ogro')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 8);
                    incrementarPuntos(8 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('duelista') || $(event.target).hasClass('nordico')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                    incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
                event.target.setAttribute("arma", "2m");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
        $("#arma4R").click(function () {
            if (event.target.getAttribute("arma") !== "es") {
                restartArma(event);
                if ($(event.target).hasClass('gor') || $(event.target).hasClass('ungor')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('minotauro')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                    incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('ogroD')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 8);
                    incrementarPuntos(8 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('duelista')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('nordico')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
                event.target.setAttribute("arma", "es");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
    }
    function restartArma() {
        var arma = event.target.getAttribute("arma");
        if (arma === "2m") {
            if ($(event.target).hasClass('caudillo')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 6);
                reducirPuntos(6, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('tacatauro') || $(event.target).hasClass('shaggoth')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 12);
                reducirPuntos(12, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('beligor')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 4);
                reducirPuntos(4, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('minotauroH')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 11);
                reducirPuntos(11, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('centigor') || $(event.target).hasClass('enano')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('minotauro') || $(event.target).hasClass('ogroD') || $(event.target).hasClass('ogro')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 8);
                reducirPuntos(8 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('duelista') || $(event.target).hasClass('nordico')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            }
        }
        if (arma === "ad" || arma === "es") {
            if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('tacatauro') || $(event.target).hasClass('minotauroH')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 3);
                reducirPuntos(3, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('beligor') || $(event.target).hasClass('granChaman') || $(event.target).hasClass('chaman')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 2);
                reducirPuntos(2, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('gor') || $(event.target).hasClass('ungor') || $(event.target).hasClass('jinete')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                reducirPuntos(1 * event.target.getAttribute("cantidad"), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('minotauro') || $(event.target).hasClass('troll') || $(event.target).hasClass('ogro')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('shaggoth')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                reducirPuntos(5, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('nordico')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            }
            if ($(event.target).hasClass('ogroD')) {
                if (arma === "ad") {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                    reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if (arma === "es") {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 8);
                    reducirPuntos(8 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
            }
            if ($(event.target).hasClass('duelista')) {
                if (arma === "ad") {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                    reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if (arma === "es") {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
            }
        }
    }
//ARMADURA
    if (event.target.hasAttribute("armadura")) {
        if ($(event.target).hasClass('caudillo')) {
            if (event.target.getAttribute("armadura") === "no") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R' checked> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera (3)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (5)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R'> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera (3)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (5)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R'> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera (3)" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (5)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('tacatauro')) {
            if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (5)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (5)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('beligor')) {
            if (event.target.getAttribute("armadura") === "no") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R' checked> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (4)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R'> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (4)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R'> Sin armadura" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (4)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('minotauroH')) {
            if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (4)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (4)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('centigor')) {
            if (event.target.getAttribute("armadura") === "no") {
                $("#armadura").html("<br><b>Equipo adicional: </b><br><input type='radio' name='armadura' id='armadura1R' checked> Ninguno" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Hachas arrojadizas (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Javalinas (2)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><b>Equipo adicional: </b><br><input type='radio' name='armadura' id='armadura1R'> Ninguno" +
                        "<br><input type='radio' name='armadura' id='armadura2R' checked> Hachas arrojadizas (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Javalinas (2)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><b>Equipo adicional: </b><br><input type='radio' name='armadura' id='armadura1R'> Ninguno" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Hachas arrojadizas (2)" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Javalinas (2)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('minotauro')) {
            $("#armadura").html(" - Armadura ligera");
        } else if ($(event.target).hasClass('shaggoth')) {
            $("#armadura").html(" - Armadura ligera");
        } else if ($(event.target).hasClass('piquero') || $(event.target).hasClass('enano')) {
            if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (1)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (1)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('jinete')) {
            if (event.target.getAttribute("armadura") === "no") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R' checked> Desnudos" +
                        "<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera (2)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura1R'> Desnudos" +
                        "<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera (2)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('ogro')) {
            if (event.target.getAttribute("armadura") === "li") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R' checked> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R'> Armadura pesada (3)");
                clickEventArmadura(event);
            } else if (event.target.getAttribute("armadura") === "pe") {
                $("#armadura").html("<br><input type='radio' name='armadura' id='armadura2R'> Armadura ligera" +
                        "<br><input type='radio' name='armadura' id='armadura3R' checked> Armadura pesada (3)");
                clickEventArmadura(event);
            }
        } else if ($(event.target).hasClass('nordico')) {
            $("#armadura").html(" - Armadura ligera");
        }
    } else {
        $("#armadura").html("");
    }
    function clickEventArmadura() {
        $("#armadura1R").click(function () {
            if (event.target.getAttribute("armadura") !== "no") {
                restartArmadura(event);
                event.target.setAttribute("armadura", "no");
                updatePunts(event);
            }
        });
        $("#armadura2R").click(function () {
            if (event.target.getAttribute("armadura") !== "li") {
                restartArmadura(event);
                if ($(event.target).hasClass('caudillo')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 3);
                    incrementarPuntos(3, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('beligor')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 2);
                    incrementarPuntos(2, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('centigor')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('jinete')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
                event.target.setAttribute("armadura", "li");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
        $("#armadura3R").click(function () {
            if (event.target.getAttribute("armadura") !== "pe") {
                restartArmadura(event);
                if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('tacatauro')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                    incrementarPuntos(5, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('beligor') || $(event.target).hasClass('minotauroH')) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 4);
                    incrementarPuntos(4, event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('centigor')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('piquero') || $(event.target).hasClass('enano')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                } else if ($(event.target).hasClass('ogro')) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                    incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                }
                event.target.setAttribute("armadura", "pe");
                actualizarUnidad(event);
                updatePunts(event);
            }
        });
    }
    function restartArmadura() {
        var armadura = event.target.getAttribute("armadura");
        if (armadura === "pe") {
            if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('tacatauro')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                reducirPuntos(5, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('beligor') || $(event.target).hasClass('minotauroH')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 4);
                reducirPuntos(4, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('centigor')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('piquero') || $(event.target).hasClass('enano')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('ogro')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            }
        }
        if (armadura === "li") {
            if ($(event.target).hasClass('caudillo')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 3);
                reducirPuntos(3, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('beligor')) {
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 2);
                reducirPuntos(2, event.target.getAttribute("tipo"));
            } else if ($(event.target).hasClass('centigor') || $(event.target).hasClass('jinete')) {
                event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
            }
        }
    }
//MONTURA
    if (event.target.hasAttribute("montura")) {
        if (event.target.getAttribute("montura") === "no") {
            $("#montura").html("<br><div>Montura:</div><input type='checkbox' id='montBox'> Carro de Tuskgors (80) (sustituye al bestigor)");
            $("#montBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 80);
                    incrementarPuntos(80, event.target.getAttribute("tipo"));
                    event.target.setAttribute("montura", "si");
                    updatePunts(event);
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 80);
                    event.target.setAttribute("montura", "no");
                    reducirPuntos(80, event.target.getAttribute("tipo"));
                    updatePunts(event);
                }
            });
        } else {
            $("#montura").html("<br><div>Montura:</div><input type='checkbox' id='montBox' checked> Carro de Tuskgors (80) (sustituye al bestigor)");
            $("#montBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 80);
                    incrementarPuntos(80, event.target.getAttribute("tipo"));
                    event.target.setAttribute("montura", "si");
                    updatePunts(event);
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 80);
                    reducirPuntos(80, event.target.getAttribute("tipo"));
                    event.target.setAttribute("montura", "no");
                    updatePunts(event);
                }
            });
        }
    } else {
        $("#montura").html("");
    }
//ARMAS MAGICA
    if (event.target.hasAttribute("armaMagic")) {
        showArmaMagic();
    } else {
        $("#armaMagic").html("");
    }
    function showArmaMagic() {
        var pos = event.target.getAttribute("armaMagic");
        var textArma = "¿?";
        if (pos === "1") {
            textArma = "Por cada herida no salvada un monstruo o personaje reduce sus A en 1 (mínimo de 1)";
        } else if (pos === "2") {
            textArma = "Causar heridas en monstruos o personajes otorgan Estupidez al objetivo";
        } else if (pos === "3") {
            textArma = "Miedo";
        } else if (pos === "4") {
            textArma = "Siempre hiere a 5+ (o inferior)";
        } else if (pos === "5") {
            textArma = "Poder de penetración";
        } else if (pos === "6") {
            textArma = "I = 10";
        } else if (pos === "7") {
            textArma = "+1 Impactar";
        } else if (pos === "8") {
            textArma = "Furia Asesina, no la puede perder";
        } else if (pos === "9") {
            textArma = "+1 A";
        } else if (pos === "10") {
            textArma = "+1 F";
        } else if (pos === "11") {
            textArma = "Siempre ataca primero";
        } else if (pos === "12") {
            textArma = "Un hechicero que sufra heridas perderá hechizos al azar";
        } else if (pos === "13") {
            textArma = "+1 F & +1 A por cada héroe en contacto peana con peana";
        } else if (pos === "14") {
            textArma = "Armas emparejadas, HA = 10";
        } else if (pos === "15") {
            textArma = "+2 A";
        } else if (pos === "16") {
            textArma = "+2 F";
        } else if (pos === "17") {
            textArma = "Ignora armadura";
        } else if (pos === "18") {
            textArma = "+3 A";
        } else if (pos === "19") {
            textArma = "+3 F";
        } else if (pos === "21") {
            textArma = "Armas emparejadas, +1D3 A. Si se obtiene un 6(+3 A) todos los ataques ignoran armadura durante ese turno";
        } else if (pos === "22") {
            textArma = "Lanza. Arma de disparo: Alcance 24UM, siempre impacta a 5+, se trata como un disparo de lanzavirotes. Permite mover y disparar/aguantar y disparar";
        }
        if ($(event.target).hasClass("beligor") || $(event.target).hasClass("chaman") || $(event.target).hasClass("minotauroH")) {
            $("#armaMagic").html("<br><b>Arma mágica: </b><br><select id='listArmaMagic' title='" + textArma + "' style='width: 300px'> " +
                    "<option value='0' title='Aquí no hay nada'>-- Nada --</option>" +
                    "<option value='5' title='Por cada herida no salvada un monstruo o personaje reduce sus A en 1 (mínimo de 1)'>Azote del Guerrero (5)</option>" +
                    "<option value='5' title='Causar heridas en monstruos o personajes otorgan Estupidez al objetivo'>Espada del Tormento (5)</option>" +
                    "<option value='10' title='Miedo'>Espada Aullante (10)</option>" +
                    "<option value='10' title='Siempre hiere a 5+ (o inferior)'>Espada Reliquia (10)</option>" +
                    "<option value='10' title='Poder de penetración'>Mordisco de acero (10)</option>" +
                    "<option value='15' title='I = 10'>Espada de Oro (15)</option>" +
                    "<option value='15' title='+1 Impactar'>Espada Veloz (15)</option>" +
                    "<option value='20' title='Furia Asesina, no la puede perder'>Espada Asesina (20)</option>" +
                    "<option value='20' title='+1 A'>Espada de Batalla (20)</option>" +
                    "<option value='20' title='+1 F'>Espada de Poder (20)</option>" +
                    "<option value='25' title='Siempre ataca primero'>Espada de la Muerte Rápida (25)</option>" +
                    "<option value='25' title='Un hechicero que sufra heridas perderá hechizos al azar'>Espada Robahechizos (25)</option>" +
                    "<option value='30' title='+1 F & +1 A por cada héroe en contacto peana con peana'>Espada Antihéroes (30)</option>" +
                    "<option value='35' title='Armas emparejadas, HA = 10'>Espadas de Esgrima (35)</option>" +
                    "<option value='40' title='+2 A'>Espada de Conflictos (40)</option>" +
                    "<option value='40' title='+2 F'>Espada Ogra (40)</option>" +
                    "<option value='50' title='Ignora armadura'>Espada de Obsidiana (50)</option>" +
                    "<option disabled title='+3 A'>Espada de Sangre (60)</option>" +
                    "<option disabled title='+3 F'>Espada Gigante (60)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='35' title='Armas emparejadas, +1D3 A. Si se obtiene un 6(+3 A) todos los ataques ignoran armadura durante ese turno'>Garras de Acero (35)</option>" +
                    "<option value='50' title='Lanza. Arma de disparo: Alcance 24UM, siempre impacta a 5+, se trata como un disparo de lanzavirotes. Permite mover y disparar/aguantar y disparar'>Lanza de Caza (50)</option>" +
                    "</select>");
        } else {
            $("#armaMagic").html("<br><b>Arma mágica: </b><br><select id='listArmaMagic' title='" + textArma + "' style='width: 300px'> " +
                    "<option value='0' title='Aquí no hay nada'>-- Nada --</option>" +
                    "<option value='5' title='Por cada herida no salvada un monstruo o personaje reduce sus A en 1 (mínimo de 1)'>Azote del Guerrero (5)</option>" +
                    "<option value='5' title='Causar heridas en monstruos o personajes otorgan Estupidez al objetivo'>Espada del Tormento (5)</option>" +
                    "<option value='10' title='Miedo'>Espada Aullante (10)</option>" +
                    "<option value='10' title='Siempre hiere a 5+ (o inferior)'>Espada Reliquia (10)</option>" +
                    "<option value='10' title='Poder de penetración'>Mordisco de acero (10)</option>" +
                    "<option value='15' title='I = 10'>Espada de Oro (15)</option>" +
                    "<option value='15' title='+1 Impactar'>Espada Veloz (15)</option>" +
                    "<option value='20' title='Furia Asesina, no la puede perder'>Espada Asesina (20)</option>" +
                    "<option value='20' title='+1 A'>Espada de Batalla (20)</option>" +
                    "<option value='20' title='+1 F'>Espada de Poder (20)</option>" +
                    "<option value='25' title='Siempre ataca primero'>Espada de la Muerte Rápida (25)</option>" +
                    "<option value='25' title='Un hechicero que sufra heridas perderá hechizos al azar'>Espada Robahechizos (25)</option>" +
                    "<option value='30' title='+1 F & +1 A por cada héroe en contacto peana con peana'>Espada Antihéroes (30)</option>" +
                    "<option value='35' title='Armas emparejadas, HA = 10'>Espadas de Esgrima (35)</option>" +
                    "<option value='40' title='+2 A'>Espada de Conflictos (40)</option>" +
                    "<option value='40' title='+2 F'>Espada Ogra (40)</option>" +
                    "<option value='50' title='Ignora armadura'>Espada de Obsidiana (50)</option>" +
                    "<option value='60' title='+3 A'>Espada de Sangre (60)</option>" +
                    "<option value='60' title='+3 F'>Espada Gigante (60)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='35' title='Armas emparejadas, +1D3 A. Si se obtiene un 6(+3 A) todos los ataques ignoran armadura durante ese turno'>Garras de Acero (35)</option>" +
                    "<option value='50' title='Lanza. Arma de disparo: Alcance 24UM, siempre impacta a 5+, se trata como un disparo de lanzavirotes. Permite mover y disparar/aguantar y disparar'>Lanza de Caza (50)</option>" +
                    "</select>");
        }
        document.getElementById("listArmaMagic").options.item(pos).selected = true;
        clickEventArmaMagic(event);
    }
    function clickEventArmaMagic() {
        var armaAnte = parseInt(document.getElementById("listArmaMagic").value);
        $("#listArmaMagic").change(function () {
            var index = document.getElementById("listArmaMagic").selectedIndex;
            var valor = parseInt(document.getElementById("listArmaMagic").value);
            var checkEst = checkTieneEstMag(event);
            if (checkEst) {
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - armaAnte);
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + valor);
                var check = checkObjetos(event.target.getAttribute("pObjetos"));
                if (check) {
                    event.target.setAttribute("armaMagic", index);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - armaAnte);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                    reducirPuntos(armaAnte, event.target.getAttribute("tipo"));
                    incrementarPuntos(valor, event.target.getAttribute("tipo"));
                } else {
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - valor);
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + armaAnte);
                }
            }
            updatePunts(event);
            showArmaMagic();
        });
    }
//ARMADURA MAGICA
    if (event.target.hasAttribute("armaduraMagic")) {
        showArmaduraMagic();
    } else {
        $("#armaduraMagic").html("");
    }
    function showArmaduraMagic() {
        var pos = event.target.getAttribute("armaduraMagic");
        var textArmadura = "¿?";
        if (pos === "1") {
            textArmadura = "Escudo. Evita el primer impacto con un 2+";
        } else if (pos === "2") {
            textArmadura = "Escudo. Mejora la armadura en 2 puntos en lugar de 1";
        } else if (pos === "3") {
            textArmadura = "Mejora la armadura en 1 punto. Salvación Especial 2+ contra flamígeros";
        } else if (pos === "4") {
            textArmadura = "Armadura pesada. Salvación Especial 6+";
        } else if (pos === "5") {
            textArmadura = "Escudo. Resistencia a la magia (1)";
        } else if (pos === "6") {
            textArmadura = "Armadura ligera. -1 impactar al portador en combate";
        } else if (pos === "7") {
            textArmadura = "Escudo. Armadura 1+ contra ataques de proyectil";
        } else if (pos === "8") {
            textArmadura = "Mejora la armadura en 1 punto. Al inicio de la fase de combate elige 1 personaje en contacto que deberá superar un chequeo de Liderazgo o no podrá atacar y será impactado automáticamente";
        } else if (pos === "9") {
            textArmadura = "Armadura pesada. Salvación Especial 5+";
        } else if (pos === "10") {
            textArmadura = "Armadura 2+. No puede mejorarse";
        } else if (pos === "11") {
            textArmadura = "Armadura pesada. Salvación Especial 4+";
        } else if (pos === "12") {
            textArmadura = "Mejora la armadura en 1 punto. Se deben repetir las tiradas para herir exitosas contra el portador";
        } else if (pos === "14") {
            textArmadura = "Mejora la armadura en 1 punto. Por cada salvación por armadura superada efectúa un ataque adicional con la Fuerza base del portador";
        } else if (pos === "15") {
            textArmadura = "Armadura pesada. Los disparos contra el portador o su unidad tendrán -1 para impactar. Los hechizos que toman como objetivo al portador o su unidad restarán 2 al lanzamiento";
        }
        $("#armaduraMagic").html("<br><b>Armadura mágica: </b><br><select id='listArmaduraMagic' title='" + textArmadura + "' style='width: 300px'> " +
                "<option value='0' title='Permite repetir las tiradas... es broma aquí no hay nada'>-- Nada --</option>" +
                "<option value='5' title='Escudo. Evita el primer impacto con un 2+'>Escudo Encantado (5)</option>" +
                "<option value='5' title='Escudo. Mejora la armadura en 2 puntos en lugar de 1'>Escudo Hechizado (5)</option>" +
                "<option value='10'title='Mejora la armadura en 1 punto. Salvación Especial 2+ contra flamígeros'>Yelmo del Dragón (10)</option>" +
                "<option value='20' title='Armadura pesada. Salvación Especial 6+'>Armadura de Jugador (20)</option>" +
                "<option value='20' title='Escudo. Resistencia a la magia (1)'>Escudo Antihechizos (20)</option>" +
                "<option value='25' title='Armadura ligera. -1 impactar al portador en combate'>Escamas brillantes (25)</option>" +
                "<option value='25' title='Escudo. Armadura 1+ contra ataques de proyectil'>Escudo de Ptolos (25)</option>" +
                "<option value='30' title='Mejora la armadura en 1 punto. Al inicio de la fase de combate elige 1 personaje en contacto que deberá superar un chequeo de Liderazgo o no podrá atacar y será impactado automáticamente'>Yelmo de la Discordia (30)</option>" +
                "<option value='35' title='Armadura pesada. Salvación Especial 5+'>Armadura de la Fortuna (35)</option>" +
                "<option value='45' title='Armadura 2+. No puede mejorarse'>Armadura de Plata (45)</option>" +
                "<option value='50' title='Armadura pesada. Salvación Especial 4+'>Armadura del Destino (50)</option>" +
                "<option value='50' title='Mejora la armadura en 1 punto. Se deben repetir las tiradas para herir exitosas contra el portador'>Yelmo del Engaño (50)</option>" +
                "<option disabled>----------</option>" +
                "<option value='15' title='Mejora la armadura en 1 punto. Por cada salvación por armadura superada efectúa un ataque adicional con la Fuerza base del portador'>Casco del Cuerno de cabra (15)</option>" +
                "<option value='45' title='Armadura pesada. Los disparos contra el portador o su unidad tendrán -1 para impactar. Los hechizos que toman como objetivo al portador o su unidad restarán 2 al lanzamiento'>Pellejo del Caminante de sombras (45)</option>" +
                "</select>");
        document.getElementById("listArmaduraMagic").options.item(pos).selected = true;
        clickEventArmaduraMagic(event);
    }
    function clickEventArmaduraMagic() {
        var armaduraAnte = parseInt(document.getElementById("listArmaduraMagic").value);
        $("#listArmaduraMagic").change(function () {
            var index = document.getElementById("listArmaduraMagic").selectedIndex;
            var valor = parseInt(document.getElementById("listArmaduraMagic").value);
            var checkEst = checkTieneEstMag(event);
            if (checkEst) {
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - armaduraAnte);
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + valor);
                var check = checkObjetos(event.target.getAttribute("pObjetos"));
                if (check) {
                    event.target.setAttribute("armaduraMagic", index);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - armaduraAnte);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                    reducirPuntos(armaduraAnte, event.target.getAttribute("tipo"));
                    incrementarPuntos(valor, event.target.getAttribute("tipo"));
                } else {
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - valor);
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + armaduraAnte);
                }
            }
            updatePunts(event);
            showArmaduraMagic();
        });
    }
//ARCANO
    if (event.target.hasAttribute("arcano")) {
        showArcano();
    } else {
        $("#arcano").html("");
    }
    function showArcano() {
        var pos = event.target.getAttribute("arcano");
        var textArcano = "¿?";
        if (pos === "1") {
            textArcano = "+1 canalizar";
        } else if (pos === "2") {
            textArcano = "Un solo uso. Añade 1D6 para dispersar. Puede usarse después del intento";
        } else if (pos === "3") {
            textArcano = "Un solo uso. Usar en lugar de dispersar. El objetivo del hechizo obtiene Salvación Especial 4+";
        } else if (pos === "4") {
            textArcano = "Un solo uso. Añade 2 dados de magia al lanzar un hechizo";
        } else if (pos === "5") {
            textArcano = "Un solo uso. Durante toda la fase, cuando un hechicero enemigo disperse un hechizo sufre una herida con un 5+. Que noh engaña que noh ehta engañando que noh diga la verdaa...";
        } else if (pos === "6") {
            textArcano = "¿Hace falta que lo explique?";
        } else if (pos === "7") {
            textArcano = "Un solo uso. Repite una tirada en la tabla de disfunciones";
        } else if (pos === "8") {
            textArcano = "Un solo uso. Al lanzar un hechizo, cualquier doble será Fuerza Irresistible (y disfunción)";
        } else if (pos === "9") {
            textArcano = "Un solo uso. Al inicio de la fase añade 1D6 dados a la reserva. El hechicero sufre 1D3 heridas";
        } else if (pos === "10") {
            textArcano = "Un solo uso. Añade 1D6 para lanzar un hechizo. Puede usarse después del intento";
        } else if (pos === "11") {
            textArcano = "Un solo uso. Usar en lugar de dispersar. El hechicero que lanzó el hechizo tira 1D6, si obtiene un resultado mayor a su nivel de hechicero se convierte en sapo! (Atributos = 1 excepto H, no puede usar equipo/objetos ni canalizar ni na!). Tira cada turno a 4+ termina el efecto";
        } else if (pos === "12") {
            textArcano = "Un solo uso. Usar en lugar de dispersar. Tira 1D6 por cada dado de energía usado para el hechizo. El hechicero que lo lanzó sufre una herida por cada 5+";
        } else if (pos === "13") {
            textArcano = "Un solo uso. Usar en lugar de dispersar. Añade tantos dados a la reserva de dispersión como dados de energía se han usado para el hechizo";
        } else if (pos === "14") {
            textArcano = "+1 lanzar y dispersar hechizos";
        } else if (pos === "16") {
            textArcano = "Al inicio de la fase de magia elige una unidad enemiga a 24UM. Puedes repetir las tiradas para herir contra esa unidad durante la fase";
        }
        if ($(event.target).hasClass("chaman")) {
            $("#arcano").html("<br><b>Objetos arcanos: </b><br><select id='listArcano' title='" + textArcano + "' style='width: 300px'> " +
                    "<option value='0' title='National Automobile Dealers Association (NADA)'>-- Nada --</option>" +
                    "<option value='15' title='+1 canalizar'>Báculo canalizador (15)</option>" +
                    "<option value='15' title='Un solo uso. Añade 1D6 para dispersar. Puede usarse después del intento'>Cetro de Estabilidad (15)</option>" +
                    "<option value='15' title='Un solo uso. Usar en lugar de dispersar. El objetivo del hechizo obtiene Salvación Especial 4+'>Pergamino de Protección (15)</option>" +
                    "<option value='20' title='Un solo uso. Añade 2 dados de magia al lanzar un hechizo'>Piedra de energía (20)</option>" +
                    "<option value='25' title='Un solo uso. Durante toda la fase, cuando un hechicero enemigo disperse un hechizo sufre una herida con un 5+. Que noh engaña que noh ehta engañando que noh diga la verdaa...'>Fragmento de la Piedra de Engaño (25)</option>" +
                    "<option value='25' title='¿Hace falta que lo explique?'>Pergamino de Dispersión (25)</option>" +
                    "<option value='25' title='Un solo uso. Repite una tirada en la tabla de disfunciones'>Vara Terrenal (25)</option>" +
//                "<option value='35'>Báculo de la Hechicería (35)</option>" +
                    "<option value='35' title='Un solo uso. Al lanzar un hechizo, cualquier doble será Fuerza Irresistible (y disfunción)'>Pergamino de Energía (35)</option>" +
                    "<option value='35' title='Un solo uso. Al inicio de la fase añade 1D6 dados a la reserva. El hechicero sufre 1D3 heridas'>Vara Prohibida (35)</option>" +
                    "<option value='35' title='Un solo uso. Añade 1D6 para lanzar un hechizo. Puede usarse después del intento'>Varita de Azabache (35)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. El hechicero que lanzó el hechizo tira 1D6, si obtiene un resultado mayor a su nivel de hechicero se convierte en sapo! (Atributos = 1 excepto H, no puede usar equipo/objetos ni canalizar ni na!). Tira cada turno a 4+ termina el efecto'>Pergamino de la Maldición de Svenjir (50)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. Tira 1D6 por cada dado de energía usado para el hechizo. El hechicero que lo lanzó sufre una herida por cada 5+'>Pergamino de la Reacción (50)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. Añade tantos dados a la reserva de dispersión como dados de energía se han usado para el hechizo'>Pergamino Sanguijuela (50)</option>" +
                    "<option disabled title='+1 lanzar y dispersar hechizos'>Libro de Ashur (70)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='20' title='Al inicio de la fase de magia elige una unidad enemiga a 24UM. Puedes repetir las tiradas para herir contra esa unidad durante la fase'>Fetiche Árbol de bruja (20)</option>" +
                    "</select>");
        } else {
            $("#arcano").html("<br><b>Objetos arcanos: </b><br><select id='listArcano' title='" + textArcano + "' style='width: 300px'> " +
                    "<option value='0' title='National Automobile Dealers Association (NADA)'>-- Nada --</option>" +
                    "<option value='15' title='+1 canalizar'>Báculo canalizador (15)</option>" +
                    "<option value='15' title='Un solo uso. Añade 1D6 para dispersar. Puede usarse después del intento'>Cetro de Estabilidad (15)</option>" +
                    "<option value='15' title='Un solo uso. Usar en lugar de dispersar. El objetivo del hechizo obtiene Salvación Especial 4+'>Pergamino de Protección (15)</option>" +
                    "<option value='20' title='Un solo uso. Añade 2 dados de magia al lanzar un hechizo'>Piedra de energía (20)</option>" +
                    "<option value='25' title='Un solo uso. Durante toda la fase, cuando un hechicero enemigo disperse un hechizo sufre una herida con un 5+. Que noh engaña que noh ehta engañando que noh diga la verdaa...'>Fragmento de la Piedra de Engaño (25)</option>" +
                    "<option value='25' title='¿Hace falta que lo explique?'>Pergamino de Dispersión (25)</option>" +
                    "<option value='25' title='Un solo uso. Repite una tirada en la tabla de disfunciones'>Vara Terrenal (25)</option>" +
//                "<option value='35'>Báculo de la Hechicería (35)</option>" +
                    "<option value='35' title='Un solo uso. Al lanzar un hechizo, cualquier doble será Fuerza Irresistible (y disfunción)'>Pergamino de Energía (35)</option>" +
                    "<option value='35' title='Un solo uso. Al inicio de la fase añade 1D6 dados a la reserva. El hechicero sufre 1D3 heridas'>Vara Prohibida (35)</option>" +
                    "<option value='35' title='Un solo uso. Añade 1D6 para lanzar un hechizo. Puede usarse después del intento'>Varita de Azabache (35)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. El hechicero que lanzó el hechizo tira 1D6, si obtiene un resultado mayor a su nivel de hechicero se convierte en sapo! (Atributos = 1 excepto H, no puede usar equipo/objetos ni canalizar ni na!). Tira cada turno a 4+ termina el efecto'>Pergamino de la Maldición de Svenjir (50)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. Tira 1D6 por cada dado de energía usado para el hechizo. El hechicero que lo lanzó sufre una herida por cada 5+'>Pergamino de la Reacción (50)</option>" +
                    "<option value='50' title='Un solo uso. Usar en lugar de dispersar. Añade tantos dados a la reserva de dispersión como dados de energía se han usado para el hechizo'>Pergamino Sanguijuela (50)</option>" +
                    "<option value='70' title='+1 lanzar y dispersar hechizos'>Libro de Ashur (70)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='20' title='Al inicio de la fase de magia elige una unidad enemiga a 24UM. Puedes repetir las tiradas para herir contra esa unidad durante la fase'>Fetiche Árbol de bruja (20)</option>" +
                    "</select>");
        }
        document.getElementById("listArcano").options.item(pos).selected = true;
        clickEventArcano(event);
    }
    function clickEventArcano() {
        var arcanoAnte = parseInt(document.getElementById("listArcano").value);
        $("#listArcano").change(function () {
            var index = document.getElementById("listArcano").selectedIndex;
            var valor = parseInt(document.getElementById("listArcano").value);
            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - arcanoAnte);
            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + valor);
            var check = checkObjetos(event.target.getAttribute("pObjetos"));
            if (check) {
                event.target.setAttribute("arcano", index);
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - arcanoAnte);
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                reducirPuntos(arcanoAnte, event.target.getAttribute("tipo"));
                incrementarPuntos(valor, event.target.getAttribute("tipo"));
                updatePunts(event);
                showArcano();
            } else {
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - valor);
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + arcanoAnte);
                showArcano();
            }
        });
    }
//TALISMAN
    if (event.target.hasAttribute("talisman")) {
        showTalisman();
    } else {
        $("#talisman").html("");
    }
    function showTalisman() {
        var pos = event.target.getAttribute("talisman");
        var textTalis = "¿?";
        if (pos === "1") {
            textTalis = "Un solo uso. Repite una única tirada de armadura fallida";
        } else if (pos === "2") {
            textTalis = "Salvación Especial 5+ contra voladores en combate... en serio vas a coger esto?";
        } else if (pos === "3") {
            textTalis = "Salvación Especial 2+ contra flamígeros";
        } else if (pos === "4") {
            textTalis = "Regeneración 6+";
        } else if (pos === "5") {
            textTalis = "Salvación Especial 4+ contra la primera herida";
        } else if (pos === "6") {
            textTalis = "Resistencia a la magia (1)";
        } else if (pos === "7") {
            textTalis = "Salvación Especial 6+";
        } else if (pos === "8") {
            textTalis = "Repite las tiradas de armadura fallidas";
        } else if (pos === "9") {
            textTalis = "Resistencia a la magia (2)";
        } else if (pos === "10") {
            textTalis = "Salvación Especial 5+";
        } else if (pos === "11") {
            textTalis = "Resistencia a la magia (3)";
        } else if (pos === "12") {
            textTalis = "Salvación Especial 4+";
        }
        $("#talisman").html("<br><b>Talisman: </b><br><select id='listTalisman' title='" + textTalis + "' style='width: 300px'> " +
                "<option value='0' title='Nada... Menuda paradoja... Diriamos que en esta selección \"no hay nada\", sin embargo si que hay \"nada\" porque \"nada\" esta escrito en esta opción. Pero al existir \"nada\" se confirma que no hay algo, luego si hay ausencia de algo, en el lugar de ese algo, coloquialmente hablando \"no hay nada\"...'>-- Nada --</option>" +
                "<option value='5' title='Un solo uso. Repite una única tirada de armadura fallida'>Amuleto de la Suerte (5)</option>" +
                "<option value='5' title='Salvación Especial 5+ contra voladores en combate... en serio vas a coger esto?'>Collar Desplumapalomas (5)</option>" +
                "<option value='5' title='Salvación Especial 2+ contra flamígeros'>Gema Matadragones (5)</option>" +
                "<option value='10' title='Regeneración 6+'>Semilla del Renacimiento (10)</option>" +
                "<option value='15' title='Salvación Especial 4+ contra la primera herida'>Amuleto del Ópalo (15)</option>" +
                "<option value='15' title='Resistencia a la magia (1)'>Baratija de Obsidiana (15)</option>" +
                "<option value='15' title='Salvación Especial 6+'>Talismán de Protección (15)</option>" +
                "<option value='25' title='Repite las tiradas de armadura fallidas'>Piedra del amanecer (25)</option>" +
                "<option value='30' title='Resistencia a la magia (2)'>Amuleto de Obsidiana (30)</option>" +
                "<option value='30' title='Salvación Especial 5+'>Talismán de Resistencia (30)</option>" +
                "<option value='45' title='Resistencia a la magia (3)'>Piedra de Obsidiana (45)</option>" +
                "<option value='45' title='Salvación Especial 4+'>Talismán de Salvación (45)</option>" +
                "</select>");
        document.getElementById("listTalisman").options.item(pos).selected = true;
        clickEventTalisman(event);
    }
    function clickEventTalisman() {
        var talismanAnte = parseInt(document.getElementById("listTalisman").value);
        $("#listTalisman").change(function () {
            var index = document.getElementById("listTalisman").selectedIndex;
            var valor = parseInt(document.getElementById("listTalisman").value);
            var checkEst = checkTieneEstMag(event);
            if (checkEst) {
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - talismanAnte);
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + valor);
                var check = checkObjetos(event.target.getAttribute("pObjetos"));
                if (check) {
                    event.target.setAttribute("talisman", index);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - talismanAnte);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                    reducirPuntos(talismanAnte, event.target.getAttribute("tipo"));
                    incrementarPuntos(valor, event.target.getAttribute("tipo"));
                } else {
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - valor);
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + talismanAnte);
                }
            }
            updatePunts(event);
            showTalisman();
        });
    }
//HECHIZADO
    if (event.target.hasAttribute("hechizado")) {
        showHechizado();
    } else {
        $("#hechizado").html("");
    }
    function showHechizado() {
        var pos = event.target.getAttribute("hechizado");
        var textHechi = "¿?";
        if (pos === "1") {
            textHechi = "El personaje y su unidad tienen Salvación Especial 6+ contra las armas de las máquinas de guerra";
        } else if (pos === "2") {
            textHechi = "Un solo uso. Beber al inicio del turno. Carga devastadora(+1A) e Inmune a la psicologia (se vuelve to loko)";
        } else if (pos === "3") {
            textHechi = "Un solo uso. Beber al inicio del turno. +3 I";
        } else if (pos === "4") {
            textHechi = "Las miniaturas en contacto (amigas y enemigas) deberán repetir las Salvaciones Especiales superadas";
        } else if (pos === "5") {
            textHechi = "Un solo uso. Beber al inicio del turno. +3 F";
        } else if (pos === "6") {
            textHechi = "Un solo uso. Beber al inicio del turno. +3 R";
        } else if (pos === "7") {
            textHechi = "Terror. Las miniaturas no podrán utilizar su L";
        } else if (pos === "8") {
            textHechi = "Hechizo vinculado (nivel 3): Bola de fuego. Endavant i força Rubí...";
        } else if (pos === "9") {
            textHechi = "Los voladores deben repetir tiradas exitosas para impactar contra el portador y su unidad";
        } else if (pos === "10") {
            textHechi = "Tozudez";
        } else if (pos === "11") {
            textHechi = "Un solo uso. Beber al inicio del turno. Recupera 1D6 H";
        } else if (pos === "12") {
            textHechi = "Volar. No puede unirse a ninguna unidad. Un mundo ideaaal ♫";
        } else if (pos === "13") {
            textHechi = "Antes de desplegar coloca una Atalaya en tu zona de despliegue";
        } else if (pos === "14") {
            textHechi = "El portador es hechicero de nivel 2 (saber de la magia elegido al azar). Estupidez";
        } else if (pos === "16") {
            textHechi = "Hechizo vinculado (nivel 3): Marea mortal";
        } else if (pos === "17") {
            textHechi = "Un solo uso. Declarar al inicio de la fase de disparo enemiga. Todas las unidades tendrán -1 impactar durante la fase. Si no utilizan HP solo podrán disparar con 4+ en 1D6";
        }
        if ($(event.target).hasClass("beligor") || $(event.target).hasClass("chaman") || $(event.target).hasClass("minotauroH")) {
            $("#hechizado").html("<br><b>Objeto hechizado: </b><br><select id='listHechizado' title='" + textHechi + "' style='width: 300px'> " +
                    "<option value='0' title='Nada de na ni mucho ni poco te quedas mirando la vida pasar'>-- Nada --</option>" +
                    "<option value='5' title='El personaje y su unidad tienen Salvación Especial 6+ contra las armas de las máquinas de guerra'>Icono de Acero Maldito (5)</option>" +
                    "<option value='5' title='Un solo uso. Beber al inicio del turno. Carga devastadora(+1A) e Inmune a la psicologia (se vuelve to loko)'>Poción de Temeridad (5)</option>" +
                    "<option value='5' title='Un solo uso. Beber al inicio del turno. +3 I'>Poción de Velocidad (5)</option>" +
                    "<option value='15' title='Un solo uso. Beber al inicio del turno. +3 I'>El otro Fragmento de la Piedra de Engaño (15)</option>" +
                    "<option value='20' title='Un solo uso. Beber al inicio del turno. +3 F'>Poción de Fuerza (20)</option>" +
                    "<option value='20' title='Un solo uso. Beber al inicio del turno. +3 R'>Poción de Resistencia (20)</option>" +
                    "<option value='25' title='Terror. Las miniaturas no podrán utilizar su L'>Terrible Máscara de ¡EEE! (25)</option>" +
                    "<option value='25' title='Hechizo vinculado (nivel 3): Bola de fuego. Endavant i força Rubí...'>Rubí de Destrucción (25)</option>" +
                    "<option value='35' title='Los voladores deben repetir tiradas exitosas para impactar contra el portador y su unidad'>Antorcha contra Voladores (35)</option>" +
                    "<option value='35' title='Tozudez'>Corona de Mando (35)</option>" +
                    "<option value='35' title='Un solo uso. Beber al inicio del turno. Recupera 1D6 H'>Poción Curativa (35)</option>" +
                    "<option value='50' title='Volar. No puede unirse a ninguna unidad. Un mundo ideaaal ♫'>Alfombra Árabe (50)</option>" +
                    "<option disabled title='Antes de desplegar coloca una Atalaya en tu zona de despliegue'>Fortaleza de Fozzrik (100)</option>" +
                    "<option disabled title='El portador es hechicero de nivel 2 (saber de la magia elegido al azar). Estupidez'>Sombrero Brujo (100)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='25' title='Hechizo vinculado (nivel 3): Marea mortal'>Cayado de Darkoth (25)</option>" +
                    "<option value='30' title='Un solo uso. Declarar al inicio de la fase de disparo enemiga. Todas las unidades tendrán -1 impactar durante la fase. Si no utilizan HP solo podrán disparar con 4+ en 1D6'>Cáliz de la Lluvia negra (30)</option>" +
                    "</select>");
        } else {
            $("#hechizado").html("<br><b>Objeto hechizado: </b><br><select id='listHechizado' title='" + textHechi + "' style='width: 300px'> " +
                    "<option value='0' title='Nada de na ni mucho ni poco te quedas mirando la vida pasar'>-- Nada --</option>" +
                    "<option value='5' title='El personaje y su unidad tienen Salvación Especial 6+ contra las armas de las máquinas de guerra'>Icono de Acero Maldito (5)</option>" +
                    "<option value='5' title='Un solo uso. Beber al inicio del turno. Carga devastadora(+1A) e Inmune a la psicologia (se vuelve to loko)'>Poción de Temeridad (5)</option>" +
                    "<option value='5' title=''>Poción de Velocidad (5)</option>" +
                    "<option value='15' title='Un solo uso. Beber al inicio del turno. +3 I'>El otro Fragmento de la Piedra de Engaño (15)</option>" +
                    "<option value='20' title='Un solo uso. Beber al inicio del turno. +3 F'>Poción de Fuerza (20)</option>" +
                    "<option value='20' title='Un solo uso. Beber al inicio del turno. +3 R'>Poción de Resistencia (20)</option>" +
                    "<option value='25' title='Terror. Las miniaturas no podrán utilizar su L'>Terrible Máscara de ¡EEE! (25)</option>" +
                    "<option value='25' title='Hechizo vinculado (nivel 3): Bola de fuego. Endavant i força Rubí...'>Rubí de Destrucción (25)</option>" +
                    "<option value='35' title='Los voladores deben repetir tiradas exitosas para impactar contra el portador y su unidad'>Antorcha contra Voladores (35)</option>" +
                    "<option value='35' title='Tozudez'>Corona de Mando (35)</option>" +
                    "<option value='35' title='Un solo uso. Beber al inicio del turno. Recupera 1D6 H'>Poción Curativa (35)</option>" +
                    "<option value='50' title='Volar. No puede unirse a ninguna unidad. Un mundo ideaaal ♫'>Alfombra Árabe (50)</option>" +
                    "<option value='100' title='Antes de desplegar coloca una Atalaya en tu zona de despliegue'>Fortaleza de Fozzrik (100)</option>" +
                    "<option value='100' title='El portador es hechicero de nivel 2 (saber de la magia elegido al azar). Estupidez'>Sombrero Brujo (100)</option>" +
                    "<option disabled>----------</option>" +
                    "<option value='25' title='Hechizo vinculado (nivel 3): Marea mortal'>Cayado de Darkoth (25)</option>" +
                    "<option value='30' title='Un solo uso. Declarar al inicio de la fase de disparo enemiga. Todas las unidades tendrán -1 impactar durante la fase. Si no utilizan HP solo podrán disparar con 4+ en 1D6'>Cáliz de la Lluvia negra (30)</option>" +
                    "</select>");
        }
        document.getElementById("listHechizado").options.item(pos).selected = true;
        clickEventHechizado(event);
    }
    function clickEventHechizado() {
        var hechizadoAnte = parseInt(document.getElementById("listHechizado").value);
        $("#listHechizado").change(function () {
            var index = document.getElementById("listHechizado").selectedIndex;
            var valor = parseInt(document.getElementById("listHechizado").value);
            var checkEst = checkTieneEstMag(event);
            if (checkEst) {
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - hechizadoAnte);
                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + valor);
                var check = checkObjetos(event.target.getAttribute("pObjetos"));
                if (check) {
                    event.target.setAttribute("hechizado", index);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - hechizadoAnte);
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                    reducirPuntos(hechizadoAnte, event.target.getAttribute("tipo"));
                    incrementarPuntos(valor, event.target.getAttribute("tipo"));
                } else {
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - valor);
                    event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + hechizadoAnte);
                }
            }
            updatePunts(event);
            showHechizado();
        });
    }
    function checkTieneEstMag() {
        if (event.target.getAttribute("portadebatalla") === "si") {
            if (event.target.getAttribute("estandarteMag") !== "0") {
                alert("Estandarte mágico y objetos mágicos? Fistro pecadorl! No puedor...");
                return false;
            }
        }
        return true;
    }
    function checkObjetos(pObjetos) {
        var x = Math.floor((Math.random() * 14) + 1);
        var aux = "";
        if (x === 1) {
            aux = " puntos... Si ten cullons...";
        } else if (x === 2) {
            aux = " puntos... Se va a habeh...";
        } else if (x === 3) {
            aux = "p? Hi ha molta maldat en este món...";
        } else if (x === 4) {
            aux = " puntos, oye que te estás pasando amigo mío.";
        } else if (x === 5) {
            aux = "p. Tinc els pebrots que m'exploten ja...";
        } else if (x === 6) {
            aux = "p!! Ho haveu vist?!!";
        } else if (x === 7) {
            aux = "p? Qué dice este hombre? Se ha vuelto loco...";
        } else if (x === 8) {
            aux = " puntos? No es posible! No es posible!";
        } else if (x === 9) {
            aux = " puntos... Las neuronas estan fritas...";
        } else if (x === 10) {
            aux = " puntos... Vaya tela...";
        } else if (x === 11) {
            aux = " puntos... Muy bien sabio, muy bien.";
        } else if (x === 12) {
            aux = " puntos. Tu te crees que esto es normal?";
        } else if (x === 13) {
            aux = " puntos? No me haga más reir, hombre...";
        } else if (x === 14) {
            aux = "p. PROU!";
        }
        if (pObjetos > 100) {
            if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('granChaman')) {
                alert(pObjetos + aux + "\n\nMáximo 100p en objetos mágicos y 50p en regalos del caos. ");
                return false;
            }
            if ($(event.target).hasClass('tacatauro')) {
                alert(pObjetos + aux + " \n\nMáximo 100p entre objetos mágicos y regalos del caos. ");
                return false;
            }
        }
        if (pObjetos > 50) {
            if ($(event.target).hasClass('beligor') || $(event.target).hasClass('chaman')) {
                alert(pObjetos + aux + " \n\nMáximo 50p en objetos mágicos y 25p en regalos del caos.");
                return false;
            }
            if ($(event.target).hasClass('minotauroH')) {
                alert(pObjetos + aux + " \n\nMáximo 50p entre objetos mágicos y regalos del caos.");
                return false;
            }
        }
        return true;
    }
    function checkRegalos(pRegalos) {
        var x = Math.floor((Math.random() * 14) + 1);
        var aux = "";
        if (x === 1) {
            aux = " puntos... Si ten cullons...";
        } else if (x === 2) {
            aux = " puntos... Se va a habeh...";
        } else if (x === 3) {
            aux = "p? Hi ha molta maldat en este món...";
        } else if (x === 4) {
            aux = " puntos, oye que te estás pasando amigo mío.";
        } else if (x === 5) {
            aux = "p. Tinc els pebrots que m'exploten ja...";
        } else if (x === 6) {
            aux = " puntos. No te das cuenta que asi no, que no vas bien...";
        } else if (x === 7) {
            aux = "p? Qué dice este hombre? Se ha vuelto loco...";
        } else if (x === 8) {
            aux = " puntos? No es posible! No es posible!";
        } else if (x === 9) {
            aux = " puntos... Las neuronas estan fritas...";
        } else if (x === 10) {
            aux = " puntos... Vaya tela...";
        } else if (x === 11) {
            aux = " puntos... Muy bien sabio, muy bien.";
        } else if (x === 12) {
            aux = " puntos. Tu te crees que esto es normal?";
        } else if (x === 13) {
            aux = " puntos? No me haga más reir, hombre...";
        } else if (x === 14) {
            aux = "p. PROU!";
        }
        if (pRegalos > 50) {
            if ($(event.target).hasClass('caudillo') || $(event.target).hasClass('granChaman')) {
                alert(pRegalos + aux + "\n\nMáximo 100p en objetos mágicos y 50p en regalos del caos. ");
                return false;
            }
        }
        if (pRegalos > 25) {
            if ($(event.target).hasClass('beligor') || $(event.target).hasClass('chaman')) {
                alert(pRegalos + aux + " \n\nMáximo 50p en objetos mágicos y 25p en regalos del caos.");
                return false;
            }
        }
        return true;
    }
//PORTA DE BATALLA
    if (event.target.hasAttribute("portadebatalla")) {
        showPorta();
        function showPorta() {
            if (event.target.getAttribute("portadebatalla") === "no") {
                $("#portadebatalla").html("<br><label class='big-chB'><input type='checkbox' id='portaBox'></label> PORTAESTANDARTE DE BATALLA (25)");
                $("#portaBox").click(function () {
                    if ($(this).is(":checked")) {
                        if (portaexist) {
                            alert("Ya tienes un porta de batalla, pescao!");
                            showPorta();
                        } else {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 25);
                            incrementarPuntos(25, event.target.getAttribute("tipo"));
                            event.target.setAttribute("portadebatalla", "si");
                            event.target.setAttribute("estandarteMag", "0");
                            portaexist = true;
                            updatePunts(event);
                            showEstMag();
                        }
                    } else {
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 25);
                        reducirPuntos(25, event.target.getAttribute("tipo"));
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - parseInt(document.getElementById("listEstandarte").value));
                        reducirPuntos(parseInt(document.getElementById("listEstandarte").value), event.target.getAttribute("tipo"));
                        event.target.setAttribute("portadebatalla", "no");
                        event.target.removeAttribute("estandarteMag");
                        portaexist = false;
                        updatePunts(event);
                        showEstMag();
                    }
                });
            } else {
                $("#portadebatalla").html("<br><label class='big-chB'><input type='checkbox' class='filled-in' id='portaBox' checked></label> PORTAESTANDARTE DE BATALLA (25)");
                $("#portaBox").click(function () {
                    if ($(this).is(":checked")) {
                        if (portaexist) {
                            alert("Ya tienes un porta de batalla, pescao!");
                            showPorta();
                        } else {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 25);
                            incrementarPuntos(25, event.target.getAttribute("tipo"));
                            event.target.setAttribute("portadebatalla", "si");
                            event.target.setAttribute("estandarteMag", "0");
                            portaexist = true;
                            updatePunts(event);
                            showEstMag();
                        }
                    } else {
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 25);
                        reducirPuntos(25, event.target.getAttribute("tipo"));
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - parseInt(document.getElementById("listEstandarte").value));
                        reducirPuntos(parseInt(document.getElementById("listEstandarte").value), event.target.getAttribute("tipo"));
                        event.target.setAttribute("portadebatalla", "no");
                        event.target.removeAttribute("estandarteMag");
                        portaexist = false;
                        updatePunts(event);
                        showEstMag();
                    }
                });
            }
        }
    } else {
        $("#portadebatalla").html("");
        $("#estandarteMag").html("");
    }
//ESTANDARTES M
    if (event.target.hasAttribute("estandarteMag")) {
        showEstMag();
    } else {
        $("#estandarteMag").html("");
    }
    function showEstMag() {
        if (event.target.hasAttribute("estandarteMag")) {
            showEstandarteMag();
        } else {
            $("#estandarteMag").html("");
        }
        function showEstandarteMag() {
            var pos = event.target.getAttribute("estandarteMag");
            var textEst = "¿?";
            if (pos === "1") {
                textEst = "Miedo contra voladores";
            } else if (pos === "2") {
                textEst = "Un solo uso. Repite el primer chequeo de L fallido";
            } else if (pos === "3") {
                textEst = "Ataques flamígeros. Inflamable quiere decir flamable?";
            } else if (pos === "4") {
                textEst = "+1 L. No pueden usar la Presencia inspiradora del general";
            } else if (pos === "5") {
                textEst = "+1 M";
            } else if (pos === "6") {
                textEst = "Resistencia a la magia (1)";
            } else if (pos === "7") {
                textEst = "+1 a la resolución del combate";
            } else if (pos === "8") {
                textEst = "Poder de penetración";
            } else if (pos === "9") {
                textEst = "Cruzar";
            } else if (pos === "10") {
                textEst = "Terror";
            } else if (pos === "11") {
                textEst = "Permite repetir las tiradas de distancia de carga fallidas";
            } else if (pos === "13") {
                textEst = "+1 F al portador y su unidad";
            }
            if ($(event.target).hasClass("gor") || $(event.target).hasClass("minotauro")) {
                if (event.target.getAttribute("estandarte") === "si") {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0' title='Quien nada no se ahoga'>-- Nada --</option>" +
                            "<option value='5' title='Miedo contra voladores'>Estandarte Espantapájaros (5)</option>" +
                            "<option value='5' title='Un solo uso. Repite el primer chequeo de L fallido'>Pendón Reluciente (5)</option>" +
                            "<option value='10' title='Ataques flamígeros. Inflamable quiere decir flamable?'>Estandarte de la Llama que llama Perpétua (10)</option>" +
                            "<option value='15' title='+1 L. No pueden usar la Presencia inspiradora del general'>Estandarte de la Disciplina (15)</option>" +
                            "<option value='15' title='+1 M'>Estandarte de la Rapidez (15)</option>" +
                            "<option value='15' title='Resistencia a la magia (1)'>Pendón de Hueso (15)</option>" +
                            "<option disabled title='+1 a la resolución del combate'>Estandarte de Guerra (35)</option>" +
                            "<option disabled title='Poder de penetración'>Estandarte Destructor (45)</option>" +
                            "<option disabled title='Cruzar'>Estandarte del Explorador (50)</option>" +
                            "<option disabled title='Terror'>Estandarte Aullador (50)</option>" +
                            "<option disabled title='Permite repetir las tiradas de distancia de carga fallidas'>Estandarte Furioso (55)</option>" +
                            "<option disabled>----------</option>" +
                            "<option disabled title='+1 F al portador y su unidad'>Estandarte de la Bestia (60)</option>" +
                            "</select>");
                    if ($(event.target).hasClass("minotauro")) {
                        if (gnoblar !== true) {
                            $("#regaloCampeon").html("<br><input type='checkbox' id='gnoblarA'> Gnoblar avisador");
                            $("#gnoblarA").click(function () {
                                if ($(this).is(":checked")) {
                                    gnoblar = true;
                                    alert("Es conya! Com vols que tinguin gnoblar avisador??? Tamos lokos...");
                                    showEstandarteMag();
                                }
                            });
                        } else {
                            $("#regaloCampeon").html("");
                        }
                    }
                } else {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0'>Requiere estandarte</option>" +
                            "</select>");
                }
            } else if ($(event.target).hasClass("bestigor")) {
                if (event.target.getAttribute("estandarte") === "si") {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0' title='Quien nada no se ahoga'>-- Nada --</option>" +
                            "<option value='5' title='Miedo contra voladores'>Estandarte Espantapájaros (5)</option>" +
                            "<option value='5' title='Un solo uso. Repite el primer chequeo de L fallido'>Pendón Reluciente (5)</option>" +
                            "<option value='10' title='Ataques flamígeros. Inflamable quiere decir flamable?'>Estandarte de la Llama que llama Perpétua (10)</option>" +
                            "<option value='15' title='+1 L. No pueden usar la Presencia inspiradora del general'>Estandarte de la Disciplina (15)</option>" +
                            "<option value='15' title='+1 M'>Estandarte de la Rapidez (15)</option>" +
                            "<option value='15' title='Resistencia a la magia (1)>Pendón de Hueso (15)</option>" +
                            "<option value='35' title='+1 a la resolución del combate'>Estandarte de Guerra (35)</option>" +
                            "<option value='45' title='Poder de penetración'>Estandarte Destructor (45)</option>" +
                            "<option value='50' title='Cruzar'>Estandarte del Explorador (50)</option>" +
                            "<option value='50' title='Terror'>Estandarte Aullador (50)</option>" +
                            "<option disabled title='Permite repetir las tiradas de distancia de carga fallidas'>Estandarte Furioso (55)</option>" +
                            "<option disabled>----------</option>" +
                            "<option disabled title='+1 F al portador y su unidad'>Estandarte de la Bestia (60)</option>" +
                            "</select>");
                } else {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0'>Requiere estandarte</option>" +
                            "</select>");
                }
            } else if ($(event.target).hasClass("merc")) {
                if (event.target.getAttribute("estandarte") === "si") {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0' title='Quien nada no se ahoga'>-- Nada --</option>" +
                            "<option value='5' title='Miedo contra voladores'>Estandarte Espantapájaros (5)</option>" +
                            "<option value='5' title='Un solo uso. Repite el primer chequeo de L fallido'>Pendón Reluciente (5)</option>" +
                            "<option value='10' title='Ataques flamígeros. Inflamable quiere decir flamable?'>Estandarte de la Llama que llama Perpétua (10)</option>" +
                            "<option value='15' title='+1 L. No pueden usar la Presencia inspiradora del general'>Estandarte de la Disciplina (15)</option>" +
                            "<option value='15' title='+1 M'>Estandarte de la Rapidez (15)</option>" +
                            "<option value='15' title='Resistencia a la magia (1)'>Pendón de Hueso (15)</option>" +
                            "<option disabled title='+1 a la resolución del combate'>Estandarte de Guerra (35)</option>" +
                            "<option disabled title='Poder de penetración'>Estandarte Destructor (45)</option>" +
                            "<option disabled title='Cruzar'>Estandarte del Explorador (50)</option>" +
                            "<option disabled title='Terror'>Estandarte Aullador (50)</option>" +
                            "<option disabled title='Permite repetir las tiradas de distancia de carga fallidas'>Estandarte Furioso (55)</option>" +
                            "</select>");
                } else {
                    $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                            "<option value='0'>Requiere estandarte</option>" +
                            "</select>");
                }
            } else {
                $("#estandarteMag").html("<br><b>Estandarte mágico: </b><br><select id='listEstandarte' title='" + textEst + "' style='width: 300px'> " +
                        "<option value='0' title='Quien nada no se ahoga'>-- Nada --</option>" +
                        "<option value='5' title='Miedo contra voladores'>Estandarte Espantapájaros (5)</option>" +
                        "<option value='5' title='Un solo uso. Repite el primer chequeo de L fallido'>Pendón Reluciente (5)</option>" +
                        "<option value='10' title='Ataques flamígeros. Inflamable quiere decir flamable?'>Estandarte de la Llama que llama Perpétua (10)</option>" +
                        "<option value='15' title='+1 L. No pueden usar la Presencia inspiradora del general'>Estandarte de la Disciplina (15)</option>" +
                        "<option value='15' title='+1 M'>Estandarte de la Rapidez (15)</option>" +
                        "<option value='15' title='Resistencia a la magia (1)>Pendón de Hueso (15)</option>" +
                        "<option value='35' title='+1 a la resolución del combate'>Estandarte de Guerra (35)</option>" +
                        "<option value='45' title='Poder de penetración'>Estandarte Destructor (45)</option>" +
                        "<option value='50' title='Cruzar'>Estandarte del Explorador (50)</option>" +
                        "<option value='50' title='Terror'>Estandarte Aullador (50)</option>" +
                        "<option value='55' title='Permite repetir las tiradas de distancia de carga fallidas'>Estandarte Furioso (55)</option>" +
                        "<option disabled>----------</option>" +
                        "<option value='60' title='+1 F al portador y su unidad'>Estandarte de la Bestia (60)</option>" +
                        "</select>");
            }
            document.getElementById("listEstandarte").options.item(pos).selected = true;
            clickEventEstandarte(event);
        }
        function clickEventEstandarte() {
            var estandarteAnte = parseInt(document.getElementById("listEstandarte").value);
            $("#listEstandarte").change(function () {
                var index = document.getElementById("listEstandarte").selectedIndex;
                var valor = parseInt(document.getElementById("listEstandarte").value);
                if ($(event.target).hasClass("hero") || $(event.target).hasClass("comand")) {
                    var checkObj = checkTieneObjetos(event);
                    if (checkObj) {
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - estandarteAnte);
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                        event.target.setAttribute("estandarteMag", index);
                    } else {

                    }
                } else {
                    event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - estandarteAnte);
                    event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + valor);
                    event.target.setAttribute("estandarteMag", index);
                }
                reducirPuntos(estandarteAnte, event.target.getAttribute("tipo"));
                incrementarPuntos(valor, event.target.getAttribute("tipo"));
                updatePunts(event);
                showEstandarteMag();
            });
        }
        function checkTieneObjetos() {
            if (event.target.getAttribute("armaMagic") !== "0" || event.target.getAttribute("armaduraMagic") !== "0" || event.target.getAttribute("talisman") !== "0" || event.target.getAttribute("hechizado") !== "0") {
                alert("Estandarte mágico y objetos mágicos? Fistro pecadorl! No puedor...");
                return false;
            }
            return true;
        }
    }
//LEVEL
    if (event.target.hasAttribute("level")) {
        if (event.target.getAttribute("level") === "0") {
            if ($(event.target).hasClass('granChaman')) {
                $("#level").html("<br><input type='radio' name='level' id='level1R' checked> Nivel 3" +
                        "<br><input type='radio' name='level' id='level2R'> Nivel 4 (35)");
            } else if ($(event.target).hasClass('chaman')) {
                $("#level").html("<br><input type='radio' name='level' id='level1R' checked> Nivel 1" +
                        "<br><input type='radio' name='level' id='level2R'> Nivel 2 (35)");
            }
            clickEventLevel(event);
        } else if (event.target.getAttribute("level") === "1") {
            if ($(event.target).hasClass('granChaman')) {
                $("#level").html("<br><input type='radio' name='level' id='level1R'> Nivel 3" +
                        "<br><input type='radio' name='level' id='level2R' checked> Nivel 4 (35)");
            } else if ($(event.target).hasClass('chaman')) {
                $("#level").html("<br><input type='radio' name='level' id='level1R'> Nivel 1" +
                        "<br><input type='radio' name='level' id='level2R' checked> Nivel 2 (35)");
            }
            clickEventLevel(event);
        }
    } else {
        $("#level").html("");
    }
    function clickEventLevel() {
        $("#level1R").click(function () {
            if (event.target.getAttribute("level") !== 0) {
                restartLevel(event);
                event.target.setAttribute("level", 0);
                updatePunts(event);
            }
        });
        $("#level2R").click(function () {
            if (event.target.getAttribute("level") !== 1) {
                restartLevel(event);
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 35);
                incrementarPuntos(35, event.target.getAttribute("tipo"));
                event.target.setAttribute("level", 1);
                updatePunts(event);
            }
        });
    }
    function restartLevel() {
        var level = event.target.getAttribute("level");
        if (level === "1") {
            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 35);
            reducirPuntos(35, event.target.getAttribute("tipo"));
        }
    }
//SABER
    if (event.target.hasAttribute("saber")) {
        var pos = event.target.getAttribute("saber");
        $("#saber").html("<select id='listSaber'> " +
                "<option>Saber de lo salvaje</option>" +
                "<option>Saber de la muerte</option>" +
                "<option>Saber de las sombras</option>" +
                "<option>Saber de las bestias</option>" +
                "<option>Saber de los cielos</option>" +
                "<option>Saber del hielo</option>" +
                "</select>");
        document.getElementById("listSaber").options.item(pos).selected = true;
        $("#listSaber").change(function () {
            var index = document.getElementById("listSaber").selectedIndex;
            event.target.setAttribute("saber", index);
        });
    } else {
        $("#saber").html("");
    }
//EMBOSCADA
    if (event.target.hasAttribute("emboscada")) {
        showEmboscada();
        function showEmboscada() {
            if (event.target.getAttribute("emboscada") === "no") {
                if ($(event.target).hasClass("caudillo") || $(event.target).hasClass("beligor")) {
                    $("#emboscada").html("<br><input type='checkbox' id='embBox'> Emboscada (0)<br>(Debe estar acompañado de una unidad)");
                    $("#embBox").click(function () {
                        if ($(this).is(":checked")) {
                            event.target.setAttribute("emboscada", "si");
                        } else {
                            event.target.setAttribute("emboscada", "no");
                        }
                    });
                } else if ($(event.target).hasClass("gor")) {
                    $("#emboscada").html("<br><input type='checkbox' id='embBox'> Emboscada (1)");
                    $("#embBox").click(function () {
                        if ($(this).is(":checked")) {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                            event.target.setAttribute("emboscada", "si");
                            incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                            actualizarUnidad(event);
                            updatePunts(event);
                        } else {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                            event.target.setAttribute("emboscada", "no");
                            reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                            actualizarUnidad(event);
                            updatePunts(event);
                        }
                    });
                } else if ($(event.target).hasClass("ungor")) {
                    if (event.target.getAttribute("emboscada") === "no") {
                        $("#emboscada").html("<br><input type='radio' name='embos' id='emb1R' checked> Despliegue soso y normal (0)" +
                                "<br><input type='radio' name='embos' id='emb2R'> Emboscada (0)" +
                                "<br><input type='radio' name='embos' id='emb3R'> Exploradores (3)");
                        checkEmb(event);
                    }
                } else if ($(event.target).hasClass("arpia")) {
                    if (event.target.getAttribute("emboscada") === "no") {
                        $("#emboscada").html("<br><input type='radio' name='embos' id='emb1R' checked> Despliegue soso y normal (0)" +
                                "<br><input type='radio' name='embos' id='emb3R'> Exploradores (3)");
                        checkEmb(event);
                    }
                }
            } else {
                if ($(event.target).hasClass("caudillo") || $(event.target).hasClass("beligor")) {
                    $("#emboscada").html("<br><input type='checkbox' id='embBox' checked> Emboscada (0)<br>(Debe estar acompañado de una unidad)");
                    $("#embBox").click(function () {
                        if ($(this).is(":checked")) {
                            event.target.setAttribute("emboscada", "si");
                        } else {
                            event.target.setAttribute("emboscada", "no");
                        }
                    });
                } else if ($(event.target).hasClass("gor")) {
                    $("#emboscada").html("<br><input type='checkbox' id='embBox' checked> Emboscada (1)");
                    $("#embBox").click(function () {
                        if ($(this).is(":checked")) {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                            event.target.setAttribute("emboscada", "si");
                            incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                            actualizarUnidad(event);
                            updatePunts(event);
                        } else {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                            event.target.setAttribute("emboscada", "no");
                            reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                            actualizarUnidad(event);
                            updatePunts(event);
                        }
                    });
                } else if ($(event.target).hasClass("ungor")) {
                    if (event.target.getAttribute("emboscada") === "si") {
                        $("#emboscada").html("<br><input type='radio' name='embos' id='emb1R'> Despliegue soso y normal (0)" +
                                "<br><input type='radio' name='embos' id='emb2R' checked> Emboscada (0)" +
                                "<br><input type='radio' name='embos' id='emb3R'> Exploradores (3)");
                        checkEmb(event);
                    } else if (event.target.getAttribute("emboscada") === "ex") {
                        $("#emboscada").html("<br><input type='radio' name='embos' id='emb1R'> Despliegue soso y normal (0)" +
                                "<br><input type='radio' name='embos' id='emb2R'> Emboscada (0)" +
                                "<br><input type='radio' name='embos' id='emb3R' checked> Exploradores (3)");
                        checkEmb(event);
                    }
                } else if ($(event.target).hasClass("arpia")) {
                    if (event.target.getAttribute("emboscada") === "ex") {
                        $("#emboscada").html("<br><input type='radio' name='embos' id='emb1R'> Despliegue soso y normal (0)" +
                                "<br><input type='radio' name='embos' id='emb3R' checked> Exploradores (3)");
                        checkEmb(event);
                    }
                }
            }
            function checkEmb(event) {
                $("#emb1R").click(function () {
                    if (event.target.getAttribute("emboscada") !== "no") {
                        if (event.target.getAttribute("emboscada") === "ex") {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                            reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                        }
                        event.target.setAttribute("emboscada", "no");
                        actualizarUnidad(event);
                        updatePunts(event);
                    }
                });
                $("#emb2R").click(function () {
                    if (event.target.getAttribute("emboscada") !== "si") {
                        if (event.target.getAttribute("emboscada") === "ex") {
                            event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 3);
                            reducirPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                        }
                        event.target.setAttribute("emboscada", "si");
                        actualizarUnidad(event);
                        updatePunts(event);
                    }
                });
                $("#emb3R").click(function () {
                    if (event.target.getAttribute("emboscada") !== "ex") {
                        event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 3);
                        incrementarPuntos(3 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                        event.target.setAttribute("emboscada", "ex");
                        actualizarUnidad(event);
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#emboscada").html("");
    }
//MEJORAS MASTINES: VANGUARDIA
    if (event.target.hasAttribute("vanguardia")) {
        if (event.target.getAttribute("vanguardia") === "no") {
            $("#mejora1").html("<br><b>Mejoras: </b><br><div><input type='checkbox' id='vangBox'> Vanguardia (2)</div>");
            $("#vangBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("vanguardia", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                    reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("vanguardia", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        } else {
            $("#mejora1").html("<br><b>Mejoras: </b><br><div><input type='checkbox' id='vangBox' checked> Vanguardia (2)</div>");
            $("#vangBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 2);
                    incrementarPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("vanguardia", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 2);
                    reducirPuntos(2 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("vanguardia", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        }
    } else {
        $("#mejora1").html("");
    }
//MEJORAS MASTINES: PELLEJO E
    if (event.target.hasAttribute("pellejoE")) {
        if (event.target.getAttribute("pellejoE") === "no") {
            $("#mejora2").html("<div><input type='checkbox' id='pellejoEBox'> Pellejo escamoso (1)</div>");
            $("#pellejoEBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("pellejoE", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("pellejoE", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        } else {
            $("#mejora2").html("<div><input type='checkbox' id='pellejoEBox' checked> Pellejo escamoso (1)</div>");
            $("#pellejoEBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("pellejoE", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("pellejoE", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        }
    } else {
        $("#mejora2").html("");
    }
//MEJORAS MASTINES: MUTACIONES
    if (event.target.hasAttribute("mutacion")) {
        if (event.target.getAttribute("mutacion") === "no") {
            $("#mejora3").html("<div><input type='checkbox' id='mutacionBox'> Mutaciones venenosas (1)</div>");
            $("#mutacionBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("mutacion", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("mutacion", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        } else {
            $("#mejora3").html("<div><input type='checkbox' id='mutacionBox' checked> Mutaciones venenosas (1)</div>");
            $("#mutacionBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) + 1);
                    incrementarPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("mutacion", "si");
                } else {
                    event.target.setAttribute("cInd", parseInt(event.target.getAttribute("cInd")) - 1);
                    reducirPuntos(1 * parseInt(event.target.getAttribute("cantidad")), event.target.getAttribute("tipo"));
                    event.target.setAttribute("mutacion", "no");
                }
                actualizarUnidad(event);
                updatePunts(event);
            });
        }
    } else {
        $("#mejora3").html("");
    }
//MEJORAS QUIMERA: ALIENTO
    if (event.target.hasAttribute("aliento")) {
        if (event.target.getAttribute("aliento") === "no") {
            $("#mejora4").html("<br><b>Mejoras: </b><br><div><input type='checkbox' id='alientoBox'> Aliento flamígero (30)</div>");
            $("#alientoBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 30);
                    incrementarPuntos(30, event.target.getAttribute("tipo"));
                    event.target.setAttribute("aliento", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 30);
                    reducirPuntos(30, event.target.getAttribute("tipo"));
                    event.target.setAttribute("aliento", "no");
                }
                updatePunts(event);
            });
        } else {
            $("#mejora4").html("<br><b>Mejoras: </b><br><div><input type='checkbox' id='alientoBox' checked> Aliento flamígero (30)</div>");
            $("#alientoBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 30);
                    incrementarPuntos(30, event.target.getAttribute("tipo"));
                    event.target.setAttribute("aliento", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 30);
                    reducirPuntos(30, event.target.getAttribute("tipo"));
                    event.target.setAttribute("aliento", "no");
                }
                updatePunts(event);
            });
        }
    } else {
        $("#mejora4").html("");
    }
//MEJORAS QUIMERA: PIEL REGENERATIVA
    if (event.target.hasAttribute("pielR")) {
        if (event.target.getAttribute("pielR") === "no") {
            $("#mejora5").html("<div><input type='checkbox' id='pielRBox'> Piel regenerativa (15)</div>");
            $("#pielRBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                    incrementarPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("pielR", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                    reducirPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("pielR", "no");
                }
                updatePunts(event);
            });
        } else {
            $("#mejora5").html("<div><input type='checkbox' id='pielRBox' checked> Piel regenerativa (15)</div>");
            $("#pielRBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                    incrementarPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("pielR", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                    reducirPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("pielR", "no");
                }
                updatePunts(event);
            });
        }
    } else {
        $("#mejora5").html("");
    }
//MEJORAS QUIMERA: DIEGO SUDOR VENENO
    if (event.target.hasAttribute("sudor")) {
        if (event.target.getAttribute("sudor") === "no") {
            $("#mejora6").html("<div><input type='checkbox' id='sudorBox'> Sudoración venenosa (15)</div>");
            $("#sudorBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                    incrementarPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("sudor", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                    reducirPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("sudor", "no");
                }
                updatePunts(event);
            });
        } else {
            $("#mejora6").html("<div><input type='checkbox' id='sudorBox' checked> Sudoración venenosa (15)</div>");
            $("#sudorBox").click(function () {
                if ($(this).is(":checked")) {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                    incrementarPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("sudor", "si");
                } else {
                    event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                    reducirPuntos(15, event.target.getAttribute("tipo"));
                    event.target.setAttribute("sudor", "no");
                }
                updatePunts(event);
            });
        }
    } else {
        $("#mejora6").html("");
    }
//REGALOS DEL CAOS
    if (event.target.hasAttribute("rCorona")) {
        $("#regalos").html("<br><b>Regalos del Caos: </b>");
    } else {
        $("#regalos").html("");
    }
//REGALOS: Corona
    if (event.target.hasAttribute("rCorona")) {
        showCorona();
        function showCorona() {
            if (event.target.getAttribute("rCorona") === "no") {
                if ($(event.target).hasClass("beligor") || $(event.target).hasClass("chaman")) {
                    $("#rCorona").html("<div title='Tozudez'><input type='checkbox' id='rCoronaBox' disabled> Corona de Cuernos (35)</div>");
                } else {
                    $("#rCorona").html("<div title='Tozudez'><input type='checkbox' id='rCoronaBox'> Corona de Cuernos (35)</div>");
                }
                $("#rCoronaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 35);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 35);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 35);
                            event.target.setAttribute("rCorona", "si");
                            incrementarPuntos(35, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 35);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 35);
                            }
                            showCorona();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 35);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 35);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 35);
                        reducirPuntos(35, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rCorona", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rCorona").html("<div title='Tozudez'><input type='checkbox' id='rCoronaBox' checked> Corona de Cuernos (35)</div>");
                $("#rCoronaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 35);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 35);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 35);
                            event.target.setAttribute("rCorona", "si");
                            incrementarPuntos(35, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 35);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 35);
                            }
                            showCorona();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 35);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 35);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 35);
                        reducirPuntos(35, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rCorona", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rCorona").html("");
    }
//REGALOS: PielN
    if (event.target.hasAttribute("rPielN")) {
        showPielN();
        function showPielN() {
            if (event.target.getAttribute("rPielN") === "no") {
                $("#rPielN").html("<div title='Las miniaturas enemigas en contacto con esta miniatura al inicio del combate reciben un impacto de F3'><input type='checkbox' id='rPielNBox'> Piel Necrótica (25)</div>");
                $("#rPielNBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 25);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 25);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 25);
                            event.target.setAttribute("rPielN", "si");
                            incrementarPuntos(25, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 25);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 25);
                            }
                            showPielN();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 25);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 25);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 25);
                        reducirPuntos(25, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielN", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rPielN").html("<div title='Las miniaturas enemigas en contacto con esta miniatura al inicio del combate reciben un impacto de F3'><input type='checkbox' id='rPielNBox' checked> Piel Necrótica (25)</div>");
                $("#rPielNBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 25);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 25);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 25);
                            event.target.setAttribute("rPielN", "si");
                            incrementarPuntos(25, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 25);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 25);
                            }
                            showPielN();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 25);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 25);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 25);
                        reducirPuntos(25, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielN", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rPielN").html("");
    }
//REGALOS: Diablo
    if (event.target.hasAttribute("rDiablo")) {
        showDiablo();
        function showDiablo() {
            if (event.target.getAttribute("rDiablo") === "no") {
                $("#rDiablo").html("<div title='La miniatura tiene un ataque adicional que debe efectuar con su F base'><input type='checkbox' id='rDiabloBox'> Diablo de Múltiples Extremidades (20)</div>");
                $("#rDiabloBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 20);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 20);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 20);
                            event.target.setAttribute("rDiablo", "si");
                            incrementarPuntos(20, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                            }
                            showDiablo();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 20);
                        reducirPuntos(20, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rDiablo", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rDiablo").html("<div title='La miniatura tiene un ataque adicional que debe efectuar con su F base'><input type='checkbox' id='rDiabloBox' checked> Diablo de Múltiples Extremidades (20)</div>");
                $("#rDiabloBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 20);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 20);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 20);
                            event.target.setAttribute("rDiablo", "si");
                            incrementarPuntos(20, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                            }
                            showDiablo();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 20);
                        reducirPuntos(20, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rDiablo", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rDiablo").html("");
    }
//REGALOS: Zancada
    if (event.target.hasAttribute("rZancada")) {
        showZancada();
        function showZancada() {
            if (event.target.getAttribute("rZancada") === "no") {
                $("#rZancada").html("<div title='+1 Movimiento'><input type='checkbox' id='rZancadaBox'> Gran Zancada (20)</div>");
                $("#rZancadaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 20);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 20);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 20);
                            event.target.setAttribute("rZancada", "si");
                            incrementarPuntos(20, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                            }
                            showZancada();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 20);
                        reducirPuntos(20, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rZancada", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rZancada").html("<div title='+1 Movimiento'><input type='checkbox' id='rZancadaBox' checked> Gran Zancada (20)</div>");
                $("#rZancadaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 20);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 20);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 20);
                            event.target.setAttribute("rZancada", "si");
                            incrementarPuntos(20, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                            }
                            showZancada();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 20);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 20);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 20);
                        reducirPuntos(20, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rZancada", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rZancada").html("");
    }
//REGALOS: Pellejo
    if (event.target.hasAttribute("rPellejo")) {
        showPellejo();
        function showPellejo() {
            if (event.target.getAttribute("rPellejo") === "no") {
                $("#rPellejo").html("<div title='Piel escamosa 5+'><input type='checkbox' id='rPellejoBox'> Pellejo Endurecido (15)</div>");
                $("#rPellejoBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 15);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 15);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                            incrementarPuntos(15, event.target.getAttribute("tipo"));
                            event.target.setAttribute("rPellejo", "si");
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                            }
                            showPellejo();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                        reducirPuntos(15, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPellejo", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rPellejo").html("<div title='Piel escamosa 5+'><input type='checkbox' id='rPellejoBox' checked> Pellejo Endurecido (15)</div>");
                $("#rPellejoBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 15);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 15);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                            incrementarPuntos(15, event.target.getAttribute("tipo"));
                            event.target.setAttribute("rPellejo", "si");
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                            }
                            showPellejo();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                        reducirPuntos(15, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPellejo", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rPellejo").html("");
    }
//REGALOS: PielH
    if (event.target.hasAttribute("rPielH")) {
        showPielH();
        function showPielH() {
            if (event.target.getAttribute("rPielH") === "no") {
                if ($(event.target).hasClass("chaman") || $(event.target).hasClass("granChaman")) {
                    $("#rPielH").html("<div title='Explorador (solo chamanes)'><input type='checkbox' id='rPielHBox'> Piel Humana (15)</div>");
                } else {
                    $("#rPielH").html("<div title='Explorador (solo chamanes)'><input type='checkbox' id='rPielHBox' disabled> Piel Humana (15)</div>");
                }
                $("#rPielHBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 15);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 15);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                            event.target.setAttribute("rPielH", "si");
                            incrementarPuntos(15, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                            }
                            showPielH();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                        reducirPuntos(15, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielH", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rPielH").html("<div title='Explorador'><input type='checkbox' id='rPielHBox' checked> Piel Humana (15)</div>");
                $("#rPielHBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 15);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 15);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 15);
                            event.target.setAttribute("rPielH", "si");
                            incrementarPuntos(15, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                            }
                            showPielH();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 15);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 15);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 15);
                        reducirPuntos(15, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielH", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rPielH").html("");
    }
//REGALOS: Colmillos
    if (event.target.hasAttribute("rColmillos")) {
        showColmillos();
        function showColmillos() {
            if (event.target.getAttribute("rColmillos") === "no") {
                $("#rColmillos").html("<div title='Poder de penetración'><input type='checkbox' id='rColmillosBox'> Colmillos Destripadores (10)</div>");
                $("#rColmillosBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 10);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 10);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 10);
                            event.target.setAttribute("rColmillos", "si");
                            incrementarPuntos(10, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                            }
                            showColmillos();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rColmillos", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rColmillos").html("<div title='Poder de penetración'><input type='checkbox' id='rColmillosBox' checked> Colmillos Destripadores (10)</div>");
                $("#rColmillosBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 10);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 10);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 10);
                            event.target.setAttribute("rColmillos", "si");
                            incrementarPuntos(10, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                            }
                            showColmillos();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rColmillos", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rColmillos").html("");
    }
//REGALOS: Runa
    if (event.target.hasAttribute("rRuna")) {
        showRuna();
        function showRuna() {
            if (event.target.getAttribute("rRuna") === "no") {
                $("#rRuna").html("<div title='Las bestias de guerra, bestias monstruosas, caballerias, caballerias monstruosas, carros, enjambres y monstruos (pero no sus jinetes) tendrán -1 impactar al personaje en combate'><input type='checkbox' id='rRunaBox'> Runa de la Bestia Verdadera (10)</div>");
                $("#rRunaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 10);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 10);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 10);
                            event.target.setAttribute("rRuna", "si");
                            incrementarPuntos(10, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                            }
                            showRuna();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rRuna", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rRuna").html("<div title='Las bestias de guerra, bestias monstruosas, caballerias, caballerias monstruosas, carros, enjambres y monstruos (pero no sus jinetes) tendrán -1 impactar al personaje en combate'><input type='checkbox' id='rRunaBox' checked> Runa de la Bestia Verdadera (10)</div>");
                $("#rRunaBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 10);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 10);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 10);
                            event.target.setAttribute("rRuna", "si");
                            incrementarPuntos(10, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                            }
                            showRuna();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 10);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 10);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 10);
                        reducirPuntos(10, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rRuna", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rRuna").html("");
    }
//REGALOS: Sentidos
    if (event.target.hasAttribute("rSentidos")) {
        showSentidos();
        function showSentidos() {
            if (event.target.getAttribute("rSentidos") === "no") {
                $("#rSentidos").html("<div title='+1 Iniciativa'><input type='checkbox' id='rSentidosBox'> Sentidos Amplificados (5)</div>");
                $("#rSentidosBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 5);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 5);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                            event.target.setAttribute("rSentidos", "si");
                            incrementarPuntos(5, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                            }
                            showSentidos();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                        reducirPuntos(5, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rSentidos", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rSentidos").html("<div title='+1 Iniciativa'><input type='checkbox' id='rSentidosBox' checked> Sentidos Amplificados (5)</div>");
                $("#rSentidosBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 5);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 5);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                            event.target.setAttribute("rSentidos", "si");
                            incrementarPuntos(5, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                            }
                            showSentidos();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                        reducirPuntos(5, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rSentidos", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rSentidos").html("");
    }
//REGALOS: PielS
    if (event.target.hasAttribute("rPielS")) {
        showPielS();
        function showPielS() {
            if (event.target.getAttribute("rPielS") === "no") {
                $("#rPielS").html("<div title='Si está tras cobertura añade -1 impactar a los disparos que tomen como objetivo al personaje'><input type='checkbox' id='rPielSBox'> Piel Sombría (5)</div>");
                $("#rPielSBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 5);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 5);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                            event.target.setAttribute("rPielS", "si");
                            incrementarPuntos(5, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                            }
                            showPielS();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                        reducirPuntos(5, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielS", "no");
                        updatePunts(event);
                    }
                });
            } else {
                $("#rPielS").html("<div title='Si está tras cobertura añade -1 impactar a los disparos que tomen como objetivo al personaje'><input type='checkbox' id='rPielSBox' checked> Piel Sombría (5)</div>");
                $("#rPielSBox").click(function () {
                    if ($(this).is(":checked")) {
                        var check = false;
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) + 5);
                            check = checkObjetos(event.target.getAttribute("pObjetos"));
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) + 5);
                            check = checkRegalos(event.target.getAttribute("pRegalos"));
                        }
                        if (check) {
                            event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + 5);
                            event.target.setAttribute("rPielS", "si");
                            incrementarPuntos(5, event.target.getAttribute("tipo"));
                            updatePunts(event);
                        } else {
                            if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                                event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                            } else {
                                event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                            }
                            showPielS();
                        }
                    } else {
                        if ($(event.target).hasClass("tacatauro") || $(event.target).hasClass("minotauroH")) {
                            event.target.setAttribute("pObjetos", parseInt(event.target.getAttribute("pObjetos")) - 5);
                        } else {
                            event.target.setAttribute("pRegalos", parseInt(event.target.getAttribute("pRegalos")) - 5);
                        }
                        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - 5);
                        reducirPuntos(5, event.target.getAttribute("tipo"));
                        event.target.setAttribute("rPielS", "no");
                        updatePunts(event);
                    }
                });
            }
        }
    } else {
        $("#rPielS").html("");
    }
//REGALO CAMPEON
    if (event.target.hasAttribute("regaloCampeon")) {
        showRegaloCampeon();
    } else {
        $("#regaloCampeon").html("");
    }
    function showRegaloCampeon() {
        if (event.target.hasAttribute("regaloCampeon")) {
            var pos = event.target.getAttribute("regaloCampeon");
            var textRegaloCamp = "¿?";
            if (pos === "1") {
                textRegaloCamp = "Si está tras cobertura añade -1 impactar a los disparos que tomen como objetivo al campeón";
            } else if (pos === "2") {
                textRegaloCamp = "+1 Iniciativa";
            } else if (pos === "3") {
                textRegaloCamp = "Las bestias de guerra, bestias monstruosas, caballerias, caballerias monstruosas, carros, enjambres y monstruos (pero no sus jinetes) tendrán -1 impactar al campeón en combate";
            } else if (pos === "4") {
                textRegaloCamp = "Poder de penetración";
            } else if (pos === "6") {
                textRegaloCamp = "Piel escamosa 5+";
            } else if (pos === "7") {
                textRegaloCamp = "+1 Movimiento";
            } else if (pos === "8") {
                textRegaloCamp = "La miniatura tiene un ataque adicional que debe efectuar con su F base";
            } else if (pos === "9") {
                textRegaloCamp = "Las miniaturas enemigas en contacto con esta miniatura al inicio del combate reciben un impacto de F3";
            }
            if (event.target.getAttribute("campeon") === "si") {
                $("#regaloCampeon").html("<br><b>Regalo del Caos (sólo campeón): </b><br><select id='listRegaloCampeon' title='" + textRegaloCamp + "' style='width: 300px'> " +
                        "<option value='0'>-- Nada --</option>" +
                        "<option value='5' title='Si está tras cobertura añade -1 impactar a los disparos que tomen como objetivo al campeón'>Piel sombría (5)</option>" +
                        "<option value='5' title='+1 Iniciativa'>Sentidos amplificados (5)</option>" +
                        "<option value='10' title='Las bestias de guerra, bestias monstruosas, caballerias, caballerias monstruosas, carros, enjambres y monstruos (pero no sus jinetes) tendrán -1 impactar al campeón en combate'>Runa de la bestia verdadera (10)</option>" +
                        "<option value='10' title='Poder de penetración'>Colmillos destripadores (10)</option>" +
                        "<option disabled title='Explorador (solo chamanes)'>Piel humana (15)</option>" +
                        "<option value='15' title='Piel escamosa 5+'>Pellejo endurecido (15)</option>" +
                        "<option value='20' title='+1 Movimiento'>Gran zancada (20)</option>" +
                        "<option value='20' title='La miniatura tiene un ataque adicional que debe efectuar con su F base'>Diablo de múltiples extremidades (20)</option>" +
                        "<option value='25' title='Las miniaturas enemigas en contacto con esta miniatura al inicio del combate reciben un impacto de F3'>Piel necrótica (25)</option>" +
                        "<option disabled title='Tozudez'>Corona de cuernos (35)</option>" +
                        "</select>");
            } else {
                $("#regaloCampeon").html("<br><b>Regalo del Caos (sólo campeón): </b><br><select id='listRegaloCampeon' title='¿?' style='width: 300px'> " +
                        "<option>Requiere campeón</option>");
            }
            document.getElementById("listRegaloCampeon").options.item(pos).selected = true;
            clickEventRegaloCampeon(event);
        }
    }
    function clickEventRegaloCampeon() {
        var regaloCampeonAnte = parseInt(document.getElementById("listRegaloCampeon").value);
        $("#listRegaloCampeon").change(function () {
            var index = document.getElementById("listRegaloCampeon").selectedIndex;
            var valor = parseInt(document.getElementById("listRegaloCampeon").value);
            event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) - regaloCampeonAnte);
            event.target.setAttribute("pRegaloC", valor);
            event.target.setAttribute("cextras", parseInt(event.target.getAttribute("cextras")) + valor);
            event.target.setAttribute("regaloCampeon", index);
            reducirPuntos(regaloCampeonAnte, event.target.getAttribute("tipo"));
            incrementarPuntos(valor, event.target.getAttribute("tipo"));
            updatePunts(event);
            showRegaloCampeon();
        });
    }
//GRAN SHAGGOTH
    if (event.target.hasAttribute("gran")) {
        showGran();
    } else {
        $("#gran").html("");
    }
    function showGran() {
        if (event.target.getAttribute("gran") === "no") {
            $("#gran").html("<br><input type='checkbox' id='granBox'> Gran Ogro Dragón Shaggoth<br>(Si marcas esta opción, esta unidad pasará a ser un comandante)");
        } else {
            $("#gran").html("<br><input type='checkbox' id='granBox' checked> Gran Ogro Dragón Shaggoth<br>(Si marcas esta opción, esta unidad pasará a ser un comandante)");
        }
        $("#granBox").click(function () {
            if ($(this).is(":checked")) {
                event.target.setAttribute("gran", "si");
                event.target.setAttribute("nombre", "Gran " + event.target.getAttribute("nombre"));
                reducirPuntos(event.target.getAttribute("puntos"), event.target.getAttribute("tipo"));
                $(event.target).removeClass("sing");
                event.target.setAttribute("tipo", "command");
                $(event.target).addClass("comand");
                incrementarPuntos(event.target.getAttribute("puntos"), event.target.getAttribute("tipo"));
                $("#listComand").append(event.target);
                showDetails(event);
                showGran();
            } else {
                event.target.setAttribute("puntos", event.target.getAttribute("puntos") - parseInt(document.getElementById("listMejoraGran").value));
                reducirPuntos(parseInt(document.getElementById("listMejoraGran").value), event.target.getAttribute("tipo"));
                event.target.setAttribute("gran", "no");
                event.target.setAttribute("mej", 0);
                reducirPuntos(event.target.getAttribute("puntos"), event.target.getAttribute("tipo"));
                $(event.target).removeClass("comand");
                event.target.setAttribute("tipo", "sing");
                $(event.target).addClass("sing");
                incrementarPuntos(event.target.getAttribute("puntos"), event.target.getAttribute("tipo"));
                $("#listSing").append(event.target);
                event.target.setAttribute("nombre", event.target.getAttribute("nombre2"));
                showDetails(event);
                showGran();
            }
        });
        updatePunts(event);
        showMej();
    }
    function showMej() {
        if (event.target.getAttribute("gran") === "si") {
            var pos = event.target.getAttribute("mej");
            var textMej = "¿?";
            if (pos === "1") {
                textMej = "El golpetazo atronador causa 1D6+1 impactos";
            } else if (pos === "2") {
                textMej = "Sangre fría";
            } else if (pos === "3") {
                textMej = "Salvación especial 6+";
            } else if (pos === "4") {
                textMej = "Las unidades enemigas a 6UM tienen -1 L";
            }
            $("#mejora1").html("<br><b>Mejora: </b><br><select id='listMejoraGran' title='" + textMej + "' style='width: 300px'> " +
                    "<option value='0'>-- Nada --</option>" +
                    "<option value='5' title='Golpetazo atronador causa 1D6+1 impactos'>Gigantesco (5)</option>" +
                    "<option value='15' title='Sangre fría'>Testarudez ancestral (15)</option>" +
                    "<option value='15' title='Salvación especial 6+'>Aura espiritual (15)</option>" +
                    "<option value='20' title='Las unidades enemigas a 6UM sufren -1 L'>Terror primigenio (20)</option>");
            document.getElementById("listMejoraGran").options.item(pos).selected = true;
            clickEventMejora(event);
        } else {
            $("#mejora1").html("<br><b>Mejora: </b><br><select id='listMejoraGran' title='¿?' style='width: 300px'> " +
                    "<option>Requiere Gran Ogro Dragón Shaggoth</option>");
        }
        function clickEventMejora() {
            var mejoraAnte = parseInt(document.getElementById("listMejoraGran").value);
            $("#listMejoraGran").change(function () {
                var index = document.getElementById("listMejoraGran").selectedIndex;
                var valor = parseInt(document.getElementById("listMejoraGran").value);
                event.target.setAttribute("mej", index);
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) - mejoraAnte);
                event.target.setAttribute("puntos", parseInt(event.target.getAttribute("puntos")) + valor);
                reducirPuntos(mejoraAnte, event.target.getAttribute("tipo"));
                incrementarPuntos(valor, event.target.getAttribute("tipo"));
                updatePunts(event);
                showGran();
            });
        }
    }
//GNOBLARIZAR XD
    if ($(event.target).hasClass("gnob")) {
        gnoblarizar(event);
    } else {
        $("#gnob").html("");
    }
    function gnoblarizar(event) {
        $("#gnob").html("<br><button type='button' class='btn btn-default' title='Convertir en gnoblar'><b>\"Gnoblarizar\"</b></button>");
        var x = document.getElementById("audio");
        if ($(event.target).hasClass("rico")) {
            $("#gnob").click(function () {
//                console.log(event.target);
                event.target.setAttribute("src", "img warhgen/gnoblar/gnRico.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("alcatani")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnAlcatani.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("vespero")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnVespero.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("urslo")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnUrslo.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("voland")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnVoland.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("almuktar")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnMuktar.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("drong")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnDrong.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        } else if ($(event.target).hasClass("catrazza")) {
            $("#gnob").click(function () {
                event.target.setAttribute("src", "img warhgen/gnoblar/gnCatrazza.PNG");
                x.play();
                $(event.target).removeClass("gnob");
                showDetails(event);
            });
        }

    }

}


function incrementarPuntos(coste, tipo) {
    console.log("+ " + coste);
    var puntos = $('#punts');
    var total = parseInt(puntos.text()) + parseInt(coste);
    if (tipo === "command") {
        var totalCommand = parseInt($('#pCommand').text()) + parseInt(coste);
        $('#pCommand').html("<h4>" + totalCommand + "</h4>");
    } else if (tipo === "hero") {
        var totalHero = parseInt($('#pHero').text()) + parseInt(coste);
        $('#pHero').html("<h4>" + totalHero + "</h4>");
    } else if (tipo === "basic") {
        var totalBasic = parseInt($('#pBasic').text()) + parseInt(coste);
        $('#pBasic').html("<h4>" + totalBasic + "</h4>");
    } else if (tipo === "esp") {
        var totalEsp = parseInt($('#pEsp').text()) + parseInt(coste);
        $('#pEsp').html("<h4>" + totalEsp + "</h4>");
    } else if (tipo === "sing") {
        var totalSing = parseInt($('#pSing').text()) + parseInt(coste);
        $('#pSing').html("<h4>" + totalSing + "</h4>");
    }
    puntos.html(total);
    checkPercent();
}

function deleteUnit(event) {
    console.log("Delete");
    console.log(event.target);
    var list = event.target.parentNode;
    list.removeChild(event.target);
    if (event.target.getAttribute("cInd")) {
        if (event.target.getAttribute("cInd2")) {
            reducirPuntos(event.target.getAttribute("cInd2") * event.target.getAttribute("cantidad2"), event.target.getAttribute("tipo"));
        }
        reducirPuntos(event.target.getAttribute("cInd") * event.target.getAttribute("cantidad"), event.target.getAttribute("tipo"));
    } else if (event.target.getAttribute("puntos")) {
        reducirPuntos(event.target.getAttribute("puntos"), event.target.getAttribute("tipo"));
    }
    if (event.target.getAttribute("cextras")) {
        reducirPuntos(event.target.getAttribute("cextras"), event.target.getAttribute("tipo"));
    }
    resetDetail();
    document.getElementById("nombre").innerHTML = "";
}

function reducirPuntos(coste, tipo) {
    console.log("- " + coste);
    var puntos = $('#punts');
    var total = parseInt(puntos.text()) - parseInt(coste);
    if (tipo === "command") {
        var totalCommand = parseInt($('#pCommand').text()) - parseInt(coste);
        $('#pCommand').html("<h4>" + totalCommand + "</h4>");
    } else if (tipo === "hero") {
        var totalHero = parseInt($('#pHero').text()) - parseInt(coste);
        $('#pHero').html("<h4>" + totalHero + "</h4>");
    } else if (tipo === "basic") {
        var totalBasic = parseInt($('#pBasic').text()) - parseInt(coste);
        $('#pBasic').html("<h4>" + totalBasic + "</h4>");
    } else if (tipo === "esp") {
        var totalEsp = parseInt($('#pEsp').text()) - parseInt(coste);
        $('#pEsp').html("<h4>" + totalEsp + "</h4>");
    } else if (tipo === "sing") {
        var totalSing = parseInt($('#pSing').text()) - parseInt(coste);
        $('#pSing').html("<h4>" + totalSing + "</h4>");
    }
    puntos.html(total);
    checkPercent();
}

function checkPercent() {
    if ($("#pTotal").val() < 0) {
        $("#pTotal").val(0);
    }
    if ($("#pTotal").val()) {
        var pCommand = parseInt($("#pCommand").text());
        var pHero = parseInt($("#pHero").text());
        var pBasic = parseInt($("#pBasic").text());
        var pEsp = parseInt($("#pEsp").text());
        var pSing = parseInt($("#pSing").text());
        if ($("#pTotal").val() / 4 >= pCommand) {
            $("#pCommand").css("color", "green");
        } else {
            $("#pCommand").css("color", "red");
        }
        if ($("#pTotal").val() / 4 >= pHero) {
            $("#pHero").css("color", "green");
        } else {
            $("#pHero").css("color", "red");
        }
        if ($("#pTotal").val() / 4 <= pBasic) {
            $("#pBasic").css("color", "green");
        } else {
            $("#pBasic").css("color", "red");
        }
        if ($("#pTotal").val() / 2 >= pEsp) {
            $("#pEsp").css("color", "green");
        } else {
            $("#pEsp").css("color", "red");
        }
        if ($("#pTotal").val() / 4 >= pSing) {
            $("#pSing").css("color", "green");
        } else {
            $("#pSing").css("color", "red");
        }
    } else {
        $("#pCommand").css("color", "black");
        $("#pHero").css("color", "black");
        $("#pBasic").css("color", "black");
        $("#pEsp").css("color", "black");
        $("#pSing").css("color", "black");
    }
}

function actualizarUnidad(event) {
    if ($(event.target).hasClass("pirazzo")) {
        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("cInd")) * parseInt(event.target.getAttribute("cantidad")) + parseInt(event.target.getAttribute("cInd2")) * parseInt(event.target.getAttribute("cantidad2")));
    } else if (event.target.getAttribute("cantidad")) {
        event.target.setAttribute("puntos", parseInt(event.target.getAttribute("cInd")) * parseInt(event.target.getAttribute("cantidad")));
    }
}
function addCaudillo() {
    var coste = 120;
    var escudo = "no";
    var arma = "no";
    var armadura = "no";
    var montura = "no";
    var armaMagic = 0;
    var armaduraMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var emboscada = "no";
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var pRegalos = 0;
    var tipo = "command";
    $("#listComand").append("<img nombre='Caudillo' nombre2='Caudillo' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " pRegalos=" + pRegalos + " arma=" + arma + " armadura=" + armadura + " escudo=" + escudo + " emboscada=" + emboscada + " montura=" + montura + " armaMagic=" + armaMagic + " armaduraMagic=" + armaduraMagic + " talisman=" + talisman + " hechizado=" + hechizado + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rPielH=" + rPielH + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " class='comand caudillo' src='img warhgen/HombresBestia/Caudillo.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}

function addGranChaman() {
    var coste = 185;
    var armaMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var arcano = 0;
    var level = 0;
    var arma = "no";
    var montura = "no";
    var saber = 0;
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var pRegalos = 0;
    var tipo = "command";
    $("#listComand").append("<img nombre='Gran Chamán del Rebaño' nombre2='Gran Chamán del Rebaño' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " pRegalos=" + pRegalos + " arma=" + arma + " montura=" + montura + " armaMagic=" + armaMagic + " talisman=" + talisman + " hechizado=" + hechizado + " arcano=" + arcano + " level=" + level + " saber=" + saber + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " rPielH=" + rPielH + " class='comand granChaman' src='img warhgen/HombresBestia/Gran Chaman.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMinotauroC() {
    var coste = 235;
    var armaMagic = 0;
    var armaduraMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var arma = "no";
    var armadura = "li";
    var escudo = "no";
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var tipo = "command";
    $("#listComand").append("<img nombre='Minotauro de la Condenación' nombre2='Minotauro de la Condenación' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " arma=" + arma + " armadura=" + armadura + " escudo=" + escudo + " armaMagic=" + armaMagic + " armaduraMagic=" + armaduraMagic + " talisman=" + talisman + " hechizado=" + hechizado + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rPielH=" + rPielH + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " class='comand tacatauro' src='img warhgen/HombresBestia/Minotauro super tacatauro.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}

function showcomands() {
    $("#unitsComand").css({display: "inline"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addBeligor() {
    var coste = 60;
    var escudo = "no";
    var arma = "no";
    var armadura = "no";
    var montura = "no";
    var armaMagic = 0;
    var armaduraMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var portadebatalla = "no";
//    var estandarteMag = 0;
    var emboscada = "no";
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var pRegalos = 0;
    var tipo = "hero";
    $("#listHero").append("<img nombre='Beligor' nombre2='Beligor' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " pRegalos=" + pRegalos + " arma=" + arma + " armadura=" + armadura + " escudo=" + escudo + " emboscada=" + emboscada + " montura=" + montura + " armaMagic=" + armaMagic + " armaduraMagic=" + armaduraMagic + " talisman=" + talisman + " hechizado=" + hechizado + " portadebatalla=" + portadebatalla + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rPielH=" + rPielH + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " class='hero beligor' src='img warhgen/HombresBestia/Beligor.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addChaman() {
    var coste = 70;
    var armaMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var arcano = 0;
    var level = 0;
    var arma = "no";
    var montura = "no";
    var saber = 0;
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var pRegalos = 0;
    var tipo = "hero";
    $("#listHero").append("<img nombre='Chamán del Rebaño' nombre2='Chamán del Rebaño' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " pRegalos=" + pRegalos + " arma=" + arma + " montura=" + montura + " armaMagic=" + armaMagic + " talisman=" + talisman + " hechizado=" + hechizado + " arcano=" + arcano + " level=" + level + " saber=" + saber + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " rPielH=" + rPielH + " class='hero chaman' src='img warhgen/HombresBestia/Chaman.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMinotauroH() {
    var coste = 150;
    var armaMagic = 0;
    var armaduraMagic = 0;
    var talisman = 0;
    var hechizado = 0;
    var arma = "no";
    var armadura = "li";
    var escudo = "no";
    var portadebatalla = "no";
    var rCorona = "no";
    var rPielN = "no";
    var rDiablo = "no";
    var rZancada = "no";
    var rPellejo = "no";
    var rPielH = "no";
    var rColmillos = "no";
    var rRuna = "no";
    var rSentidos = "no";
    var rPielS = "no";
    var pObjetos = 0;
    var tipo = "hero";
    $("#listHero").append("<img nombre='Minotauro Destripador' nombre2='Minotauro Destripador' tipo=" + tipo + " puntos=" + coste + " pObjetos=" + pObjetos + " arma=" + arma + " armadura=" + armadura + " escudo=" + escudo + " armaMagic=" + armaMagic + " armaduraMagic=" + armaduraMagic + " talisman=" + talisman + " hechizado=" + hechizado + " portadebatalla=" + portadebatalla + " rCorona=" + rCorona + " rPielN=" + rPielN + " rDiablo=" + rDiablo + " rZancada=" + rZancada + " rPellejo=" + rPellejo + " rPielH=" + rPielH + " rColmillos=" + rColmillos + " rRuna=" + rRuna + " rSentidos=" + rSentidos + " rPielS=" + rPielS + " class='hero minotauroH' src='img warhgen/HombresBestia/Minotauro tacatauro.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}

function showheroes() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "inline"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}

function addCarro() {
    var coste = 80;
    var tipo = "basic";
    $("#listBasic").append("<img nombre='Carro de Tuskgors' nombre2='Carro de Tuskgors' tipo=" + tipo + " puntos=" + coste + " arma='no' class='basic carro' src='img warhgen/HombresBestia/Carro de Tuskgors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addGors() {
    var costeInd = 6;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no"; //incluye escudo
    var emboscada = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "basic";
    $("#listBasic").append("<img nombre='Rebaño de Gors' nombre2='Rebaño de Gors' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " emboscada=" + emboscada + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='basic gor' src='img warhgen/HombresBestia/Gors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addUngors() {
    var costeInd = 5;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var emboscada = "no";
    var campeon = "no";
    var estandarte = "no";
    var musico = "no";
    var tipo = "basic";
    $("#listBasic").append("<img nombre='Rebaño de Ungors' nombre2='Rebaño de Ungors' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " emboscada=" + emboscada + " campeon=" + campeon + " estandarte=" + estandarte + " musico=" + musico + " class='basic ungor' src='img warhgen/HombresBestia/Ungors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMastines() {
    var costeInd = 5;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var vanguardia = "no";
    var pellejoE = "no";
    var mutacion = "no";
    var tipo = "basic";
    $("#listBasic").append("<img nombre='Mastines del Caos' nombre2='Mastines del Caos' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " vanguardia=" + vanguardia + " pellejoE=" + pellejoE + " mutacion=" + mutacion + " class='basic mastin' src='img warhgen/HombresBestia/Mastines.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addBestigors() {
    var costeInd = 12;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var regaloCampeon = 0;
    var pRegaloC = 0;
    var tipo = "basic";
    $("#listBasic").append("<img nombre='Rebaño de Bestigors' nombre2='Rebaño de Bestigors' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " regaloCampeon=" + regaloCampeon + " pRegaloC=" + pRegaloC + " class='basic bestigor' src='img warhgen/HombresBestia/Bestigors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showbasicas() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "inline"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}

function addArpias() {
    var costeInd = 13;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var emboscada = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Arpías' nombre2='Arpías' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " emboscada=" + emboscada + " class='esp arpia' src='img warhgen/HombresBestia/Arpias.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addCentigors() {
    var costeInd = 20;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var armadura = "no";
    var campeon = "no";
    var estandarte = "no";
    var musico = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Centigors' nombre2='Centigors' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " armadura=" + armadura + " campeon=" + campeon + " estandarte=" + estandarte + " musico=" + musico + " class='esp centigor' src='img warhgen/HombresBestia/Centigors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMinotauros() {
    var costeInd = 48;
    var cantidad = 3;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var armadura = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var objetoCampeon = 0;
    var pObjetoC = 0;
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Minotauros' nombre2='Minotauros' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " armadura=" + armadura + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " objetoCampeon=" + objetoCampeon + " pObjetoC=" + pObjetoC + " class='esp minotauro' src='img warhgen/HombresBestia/Minotauros.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addTrolls() {
    var costeInd = 35;
    var cantidad = 3;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Trolls del Cau' nombre2='Trolls del Cau' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='esp troll' src='img warhgen/HombresBestia/Trolls.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addQuimera() {
    var coste = 230;
    var aliento = "no";
    var pielR = "no";
    var sudor = "no";
    var arma = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Quimera' nombre2='Quimera' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " aliento=" + aliento + " pielR=" + pielR + " sudor=" + sudor + " class='esp quimera' src='img warhgen/HombresBestia/Quimera.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addOgrosD() {
    var costeInd = 60;
    var cantidad = 3;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var campeon = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Ogros Dragón' nombre2='Ogros Dragón' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " campeon=" + campeon + " class='esp ogroD' src='img warhgen/HombresBestia/OgrosDragon.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addGarragors() {
    var costeInd = 55;
    var cantidad = 1;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var tipo = "esp";
    $("#listEsp").append("<img nombre='Rebaño de Garragors' nombre2='Rebaño de Garragors' tipo=" + tipo + " puntos=" + coste + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='esp pumba' src='img warhgen/HombresBestia/Garragors.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showespeciales() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "inline"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addCigor() {
    var coste = 175;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Cigor' nombre2='Cigor' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing cigor' src='img warhgen/HombresBestia/Cigor.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addEscuerzo() {
    var coste = 200;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Escuerzo Alado' nombre2='Escuerzo Alado' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing escuerzo' src='img warhgen/HombresBestia/Escuerzo.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addGigante() {
    var coste = 200;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Un tio muy grande' nombre2='Un tio muy grande' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing gigante' src='img warhgen/HombresBestia/Gigante.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addEngendro() {
    var coste = 50;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Engendro del Caos' nombre2='Engendro del Caos' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing engendro' src='img warhgen/HombresBestia/Engendro.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addShaggoth() {
    var coste = 215;
    var arma = "no";
    var armadura = "no";
    var gran = "no";
    var mej = 0;
    var tipo = "sing";
    $("#listSing").append("<img nombre='Ogro Dragón Shaggoth' nombre2='Ogro Dragón Shaggoth' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " armadura=" + armadura + " gran=" + gran + " mej=" + mej + " class='sing shaggoth' src='img warhgen/HombresBestia/Shaggoth.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showsingulares() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "inline"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addPiqueros() {
    var costeInd = 7;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var armadura = "li";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Piqueros' nombre2='Piqueros' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " armadura=" + armadura + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc piquero' src='img warhgen/mercs/Piqueros.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addBallesteros() {
    var costeInd = 9;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Ballesteros' nombre2='Ballesteros' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc ballestero' src='img warhgen/mercs/Ballesteros.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addDuelistas() {
    var costeInd = 7;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var escudo = "no";
    var arma = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Duelistas' nombre2='Duelistas' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " escudo=" + escudo + " arma=" + arma + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc duelista' src='img warhgen/mercs/Duelistas.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addCaballeriaPes() {
    var costeInd = 18;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var escudo = "no";
    var arma = "no";
    var barda = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Caballería pesada' nombre2='Caballería pesada' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " escudo=" + escudo + " arma=" + arma + " barda=" + barda + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc caballero' src='img warhgen/mercs/CaballeriaPes.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addCaballeriaLig() {
    var costeInd = 11;
    var cantidad = 5;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var escudo = "no";
    var arco = "no";
    var arma = "no";
    var armadura = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Caballería ligera' nombre2='Caballería ligera' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " escudo=" + escudo + " arco=" + arco + " arma=" + arma + " armadura=" + armadura + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc jinete' src='img warhgen/mercs/CaballeriaLig.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showMercs1() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "inline"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addOgros() {
    var costeInd = 33;
    var cantidad = 3;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var armadura = "li";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Ogros' nombre2='Ogros' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " armadura=" + armadura + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc ogro' src='img warhgen/mercs/Ogros.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addEnanos() {
    var costeInd = 7;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var arco = "no"; //ballesta
    var escudo = "no";
    var armadura = "li";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Enanos' nombre2='Enanos' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " arco=" + arco + " armadura=" + armadura + " escudo=" + escudo + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc enano' src='img warhgen/mercs/Enanos.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addNordicos() {
    var costeInd = 9;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var armadura = "li";
    var escudo = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Incursores nórdicos' nombre2='Incursores nórdicos' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " armadura=" + armadura + " escudo=" + escudo + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc nordico' src='img warhgen/mercs/Nordicos.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addHalflings() {
    var costeInd = 6;
    var cantidad = 10;
    var costeextras = 0;
    var coste = parseInt(costeInd) * parseInt(cantidad);
    var arma = "no";
    var campeon = "no";
    var estandarte = "no";
    var estandarteMag = 0;
    var musico = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Halflings' nombre2='Halflings' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " campeon=" + campeon + " estandarte=" + estandarte + " estandarteMag=" + estandarteMag + " musico=" + musico + " class='sing merc halfling' src='img warhgen/mercs/Halflings.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showMercs2() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "inline"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addOlla() {
    var coste = 50;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Olla caliente Halfling' nombre2='Olla caliente Halfling' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing merc olla' src='img warhgen/mercs/Olla.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addCañon() {
    var coste = 120;
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Cañon' nombre2='Cañon' tipo=" + tipo + " puntos=" + coste + " arma=" + arma + " class='sing merc cañon' src='img warhgen/mercs/Cañon.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showMercs3() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "inline"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addPirazzo() {
    var costeInd = 9;
    var cantidad = 0;
    var costeInd2 = 8;
    var cantidad2 = 0;
    var costeextras = 160;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeInd2) * parseInt(cantidad2) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Legion perdida de Pirazzo' nombre2='Legion perdida de Pirazzo' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " cInd2=" + costeInd2 + " cantidad2=" + cantidad2 + " arma=" + arma + " class='sing ren merc pirazzo' src='img warhgen/mercs/Pirazzo.jpg'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addRico() {
    var costeInd = 10;
    var cantidad = 0;
    var costeextras = 165;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Guardia republicana de Ricco' nombre2='Guardia republicana de Ricco' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc rico' src='img warhgen/mercs/Rico.jpg'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addLeopold() {
    var costeInd = 9;
    var cantidad = 0;
    var costeextras = 160;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Compañía del leopardo de Leopold' nombre2='Compañía del leopardo de Leopold' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc leopold' src='img warhgen/mercs/Leopold.jpg'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addAlcatani() {
    var costeInd = 7;
    var cantidad = 0;
    var costeextras = 110;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='La compañía Alcatani' nombre2='La compañía Alcatani' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc alcatani' src='img warhgen/mercs/Alcatani.jpg'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showRR1() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "inline"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addVespero() {
    var costeInd = 10;
    var cantidad = 0;
    var costeextras = 110;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Asesinos de Véspero' nombre2='Asesinos de Véspero' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc vespero' src='img warhgen/mercs/Vespero.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMiragliano() {
    var costeInd = 10;
    var cantidad = 0;
    var costeextras = 150;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Tiradores de Miragliano' nombre2='Tiradores de Miragliano' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc miragliano' src='img warhgen/mercs/Miragliano.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addAlmuktar() {
    var costeInd = 13;
    var cantidad = 0;
    var costeextras = 170;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Perros del desierto de Al Muktar' nombre2='Perros del desierto de Al Muktar' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc almuktar' src='img warhgen/mercs/Almuktar.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addBraganza() {
    var costeInd = 11;
    var cantidad = 0;
    var costeextras = 155;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Ballesteros de asedio de Braganza' nombre2='Ballesteros de asedio de Braganza' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc braganza' src='img warhgen/mercs/Braganza.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showRR2() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "inline"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addVoland() {
    var costeInd = 23;
    var cantidad = 0;
    var costeextras = 170;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Cazadores de Voland' nombre2='Cazadores de Voland' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc voland' src='img warhgen/mercs/Voland.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addUrslo() {
    var costeInd = 10;
    var cantidad = 0;
    var costeextras = 275;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Beorg Bearstruck y los hombres oso de Urslo' nombre2='Beorg Bearstruck y los hombres oso de Urslo' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc urslo' src='img warhgen/mercs/Urslo.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addGolgfag() {
    var costeInd = 56;
    var cantidad = 0;
    var costeextras = 254;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Ogros mercenarios de Golgfag' nombre2='Ogros mercenarios de Golgfag' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc golgfag' src='img warhgen/mercs/Golgfag.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addLumpin() {
    var costeInd = 7;
    var cantidad = 0;
    var costeextras = 50;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Gallos de pelea de Lumpin Croop' nombre2='Gallos de pelea de Lumpin Croop' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc lumpin' src='img warhgen/mercs/Lumpin.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showRR3() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "inline"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "none"});
}
function addOglah() {
    var costeInd = 14;
    var cantidad = 0;
    var costeextras = 126;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Jinetes del lobo de Oglah Khan' nombre2='Jinetes del lobo de Oglah Khan' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc oglah' src='img warhgen/mercs/Oglah.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addDrong() {
    var costeInd = 12;
    var cantidad = 0;
    var costeextras = 195;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Matadores pirata de Drong el largo' nombre2='Matadores pirata de Drong el largo' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc drong' src='img warhgen/mercs/Drong.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addBronzino() {
    var costeInd = 85;
    var cantidad = 0;
    var costeextras = 140;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Artillería a caballo de Bronzino' nombre2='Artillería a caballo de Bronzino' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc bronzino' src='img warhgen/mercs/Bronzino.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addCatrazza() {
    var costeInd = 15;
    var cantidad = 0;
    var costeextras = 110;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Los hombres pájaro de Catrazza' nombre2='Los hombres pájaro de Catrazza' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing gnob ren merc catrazza' src='img warhgen/mercs/Catrazza.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showRR4() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "inline"});
    $("#unitsRR5").css({display: "none"});
}
function addAlbion() {
    var coste = 400;
    var arma = "no";
    var cantidad = 0;
    var tipo = "sing";
    $("#listSing").append("<img nombre='Gigantes de Albión' nombre2='Gigantes de Albión' tipo=" + tipo + " puntos=" + coste + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc albion' src='img warhgen/mercs/Albion.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addTichi() {
    var costeInd = 20;
    var cantidad = 0;
    var costeextras = 150;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Incursores de Tichi Huichi' nombre2='Incursores de Tichi Huichi' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc tichi' src='img warhgen/mercs/Tichi.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addRuglud() {
    var costeInd = 11;
    var cantidad = 0;
    var costeextras = 170;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Los orcos akorazados de Ruglud' nombre2='Los orcos akorazados de Ruglud' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc ruglud' src='img warhgen/mercs/Ruglud.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMaldita() {
    var costeInd = 7;
    var cantidad = 0;
    var costeextras = 230;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='La compañía Maldita' nombre2='La compañía Maldita' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc maldita' src='img warhgen/mercs/Maldita.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function addMengil() {
    var costeInd = 20;
    var cantidad = 0;
    var costeextras = 170;
    var coste = parseInt(costeInd) * parseInt(cantidad) + parseInt(costeextras);
    var arma = "no";
    var tipo = "sing";
    $("#listSing").append("<img nombre='Los desolladores de Mengil' nombre2='Los desolladores de Mengil' tipo=" + tipo + " puntos=" + coste + " cextras=" + costeextras + " cInd=" + costeInd + " cantidad=" + cantidad + " arma=" + arma + " class='sing ren merc mengil' src='img warhgen/mercs/Mengil.png'/>");
    incrementarPuntos(coste, tipo);
    actualizarEvents();
}
function showRR5() {
    $("#unitsComand").css({display: "none"});
    $("#unitsHero").css({display: "none"});
    $("#unitsBasic").css({display: "none"});
    $("#unitsEsp").css({display: "none"});
    $("#unitsSing").css({display: "none"});
    $("#unitsMerc1").css({display: "none"});
    $("#unitsMerc2").css({display: "none"});
    $("#unitsMerc3").css({display: "none"});
    $("#unitsRR1").css({display: "none"});
    $("#unitsRR2").css({display: "none"});
    $("#unitsRR3").css({display: "none"});
    $("#unitsRR4").css({display: "none"});
    $("#unitsRR5").css({display: "inline"});
}

var saberes = ["Saber de lo Salvaje", "Saber de la Muerte", "Saber de las Sombras", "Saber de las Bestias", "Saber de los Cielos", "Saber del Hielo"];
var armaMagic = ["", "Azote del guerrero", "Espada del Tormento", "Espada Aullante", "Espada Reliquia", "Mordisco de acero", "Espada de Oro", "Espada Veloz", "Espada asesina", "Espada de batalla", "Espada de poder", "Espada de la Muerte Rápida", "Espada Robahechizos", "Espada Antihéroes", "Espadas de Esgrima", "Espada de Conflictos", "Espada Ogra", "Espada de Obsidiana", "Espada de Sangre", "Espada Gigante", "", "Garras de Acero", "Lanza de Caza"];
var armaduraMagic = ["", "Escudo Encantado", "Escudo Hechizado", "Yelmo de Dragón", "Armadura de Jugador", "Escudo Antihechizos", "Escamas brillantes", "Escudo de Ptolos", "Yelmo de la Discordia", "Armadura de la Fortuna", "Armadura de Plata", "Armadura del Destino", "Yelmo del Engaño", "", "Casco del Cuerno de cabra", "Pellejo del Caminante de las sombras"];
var arcano = ["", "Báculo canalizador", "Cetro de Estabilidad", "Pergamino de Protección", "Piedra de energía", "Fragmento de la Piedra de Engaño", "Pergamino de Dispersión", "Vara Terrenal", "Varita de Azabache", "Pergamino de la Maldición de Svenjir", "Pergamino de Reacción", "Pergamino Sanguijuela", "Libro de Ashur", "", "Fetiche Árbol de Bruja"];
var talisman = ["", "Amuleto de la Suerte", "Collar Desplumapalomas", "Gema Matadragones", "Semilla del Renacimiento", "Amuleto del Ópalo", "Baratija de Obsidiana", "Talismán de Protección", "Piedra del amanecer", "Amuleto de Obsidiana", "Talismán de Resistencia", "Piedra de Obsidiana", "Talismán de Salvación"];
var hechizado = ["", "Icono de Acero Maldito", "Poción de Temeridad", "Poción de Velocidad", "El otro Fragmento de la Piedra de Engaño", "Poción de Fuerza", "Poción de Resistencia", "Terrible Máscara de ¡EEE!", "Rubí de Destrucción", "Antorcha contra Voladores", "Corona de Mando", "Poción Curativa", "Alfombra Árabe", "Fortaleza de Fozzrik", "Sombrero Brujo", "", "Cayado de Darkoth", "Caliz de la Lluvia negra"];
var estandarte = ["", "Estandarte Espantapájaros", "Pendón Reluciente", "Estandarte de la Llama que llama Perpétua", "Estandarte de la Disciplina", "Estandarte de la Rapidez", "Estandarte de Guerra", "Estandarte Destructor", "Estandarte del Explorador", "Estandarte Aullador", "Estandarte Furioso", "", "Estandarte de la Bestia"];
var regaloC = ["", "Piel sombría", "Sentidos amplificados", "Runa de la bestia verdadera", "Colmillos destripadores", "", "Pellejo endurecido", "Gran zancada", "Diablo de múltiples extremidades", "Piel necrótica"];
var mejShaggoth = ["", "Gigantesco", "Testarudez ancestral", "Aura espiritual", "Terror primigenio"];

function preparedownload() {
    var listComand = document.getElementById("listComand");
    var listHero = document.getElementById("listHero");
    var listBasic = document.getElementById("listBasic");
    var listEsp = document.getElementById("listEsp");
    var listSing = document.getElementById("listSing");
    var llista = "";
    llista += "--PUNTOS: " + $("#punts").text() + "-- \r\n\r\n";
    if (listComand.hasChildNodes()) {
        for (var i = 0; i < listComand.childNodes.length; i++) {
            llista += (listComand.childNodes[i].getAttribute("nombre")).toUpperCase() + "\r\n";
            llista += "Puntos: " + listComand.childNodes[i].getAttribute("puntos") + "\r\n";
            if (listComand.childNodes[i].getAttribute("arma") === "ad") {
                llista += "-Arma adicional \r\n";
            } else if (listComand.childNodes[i].getAttribute("arma") === "2m") {
                llista += "-Arma a 2 manos \r\n";
            }
            if (listComand.childNodes[i].getAttribute("armadura") === "li") {
                if (!($(listComand.childNodes[i]).hasClass("tacatauro")))
                    llista += "-Armadura ligera \r\n";
            } else if (listComand.childNodes[i].getAttribute("armadura") === "pe") {
                llista += "-Armadura pesada \r\n";
            }
            if (listComand.childNodes[i].hasAttribute("escudo")) {
                if (listComand.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
            }
            if (listComand.childNodes[i].hasAttribute("emboscada")) {
                if (listComand.childNodes[i].getAttribute("emboscada") === "si") {
                    llista += "-Emboscada \r\n";
                }
            }
            if (listComand.childNodes[i].hasAttribute("montura")) {
                if (listComand.childNodes[i].getAttribute("montura") === "si") {
                    llista += "-Carro de Tuskgors \r\n";
                }
            }
            if (listComand.childNodes[i].hasAttribute("level")) {
                if (listComand.childNodes[i].getAttribute("level") === "0") {
                    llista += "-Hechicero nivel 3 (" + saberes[listComand.childNodes[i].getAttribute("saber")] + ")\r\n";
                } else if (listComand.childNodes[i].getAttribute("level") === "1") {
                    llista += "-Hechicero nivel 4 (" + saberes[listComand.childNodes[i].getAttribute("saber")] + ")\r\n";
                }
            }
            if (!($(listComand.childNodes[i]).hasClass("shaggoth"))) {
                if (listComand.childNodes[i].getAttribute("armaMagic") === "0") {
                } else {
                    llista += "-" + armaMagic[listComand.childNodes[i].getAttribute("armaMagic")] + "\r\n";
                }
                if (!(listComand.childNodes[i].hasAttribute("armaduraMagic")) || listComand.childNodes[i].getAttribute("armaduraMagic") === "0") {
                } else {
                    llista += "-" + armaduraMagic[listComand.childNodes[i].getAttribute("armaduraMagic")] + "\r\n";
                }
                if (!(listComand.childNodes[i].hasAttribute("arcano")) || listComand.childNodes[i].getAttribute("arcano") === "0") {
                } else {
                    llista += "-" + arcano[listComand.childNodes[i].getAttribute("arcano")] + "\r\n";
                }
                if (listComand.childNodes[i].getAttribute("talisman") === "0") {
                } else {
                    llista += "-" + talisman[listComand.childNodes[i].getAttribute("talisman")] + "\r\n";
                }
                if (listComand.childNodes[i].getAttribute("hechizado") === "0") {
                } else {
                    llista += "-" + hechizado[listComand.childNodes[i].getAttribute("hechizado")] + "\r\n";
                }
                if (listComand.childNodes[i].getAttribute("rCorona") === "si") {
                    llista += "-Corona de Cuernos \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rPielN") === "si") {
                    llista += "-Piel Necrótica \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rDiablo") === "si") {
                    llista += "-Diablo de Múltiples Extremidades \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rZancada") === "si") {
                    llista += "-Gran Zancada \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rPellejo") === "si") {
                    llista += "-Pellejo Endurecido \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rPielH") === "si") {
                    llista += "-Piel Humana \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rColmillos") === "si") {
                    llista += "-Colmillos Destripadores \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rRuna") === "si") {
                    llista += "-Runa de la Bestia Verdadera \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rSentidos") === "si") {
                    llista += "-Sentidos Amplificados \r\n";
                }
                if (listComand.childNodes[i].getAttribute("rPielS") === "si") {
                    llista += "-Piel Sombría \r\n";
                }
            }
            if (listComand.childNodes[i].hasAttribute("gran")) {
                if (listComand.childNodes[i].getAttribute("gran") === "si") {
                    llista += "-" + mejShaggoth[listComand.childNodes[i].getAttribute("mej")] + "\r\n";
                }
            }
            llista += "\r\n";
        }
    }
    if (listHero.hasChildNodes()) {
        for (var i = 0; i < listHero.childNodes.length; i++) {
            llista += (listHero.childNodes[i].getAttribute("nombre")).toUpperCase() + "\r\n";
            llista += "Puntos: " + listHero.childNodes[i].getAttribute("puntos") + "\r\n";
            if (listHero.childNodes[i].getAttribute("arma") === "ad") {
                llista += "-Dos armas de mano \r\n";
            } else if (listHero.childNodes[i].getAttribute("arma") === "2m") {
                llista += "-Arma a dos manos \r\n";
            }
            if (listHero.childNodes[i].hasAttribute("armadura")) {
                if (listHero.childNodes[i].getAttribute("armadura") === "no") {
                } else if (listHero.childNodes[i].getAttribute("armadura") === "li") {
                    if (!($(listHero.childNodes[i]).hasClass("minotauroH")))
                        llista += "-Armadura ligera \r\n";
                } else if (listHero.childNodes[i].getAttribute("armadura") === "pe") {
                    llista += "-Armadura pesada \r\n";
                }
            }
            if (listHero.childNodes[i].hasAttribute("escudo")) {
                if (listHero.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
            }
            if (listHero.childNodes[i].hasAttribute("emboscada")) {
                if (listHero.childNodes[i].getAttribute("emboscada") === "si") {
                    llista += "-Emboscada \r\n";
                }
            }
            if (listHero.childNodes[i].hasAttribute("montura")) {
                if (listHero.childNodes[i].getAttribute("montura") === "si") {
                    llista += "-Carro de Tuskgors \r\n";
                }
            }
            if (listHero.childNodes[i].hasAttribute("level")) {
                if (listHero.childNodes[i].getAttribute("level") === "0") {
                    llista += "-Hechicero nivel 1 (" + saberes[listHero.childNodes[i].getAttribute("saber")] + ")\r\n";
                } else if (listHero.childNodes[i].getAttribute("level") === "1") {
                    llista += "-Hechicero nivel 2 (" + saberes[listHero.childNodes[i].getAttribute("saber")] + ")\r\n";
                }
            }
            if (listHero.childNodes[i].getAttribute("armaMagic") === "0") {
            } else {
                llista += "-" + armaMagic[listHero.childNodes[i].getAttribute("armaMagic")] + "\r\n";
            }
            if (!(listHero.childNodes[i].hasAttribute("armaduraMagic")) || listHero.childNodes[i].getAttribute("armaduraMagic") === "0") {
            } else {
                llista += "-" + armaduraMagic[listHero.childNodes[i].getAttribute("armaduraMagic")] + "\r\n";
            }
            if (!(listHero.childNodes[i].hasAttribute("arcano")) || listHero.childNodes[i].getAttribute("arcano") === "0") {
            } else {
                llista += "-" + arcano[listHero.childNodes[i].getAttribute("arcano")] + "\r\n";
            }
            if (listHero.childNodes[i].getAttribute("talisman") === "0") {
            } else {
                llista += "-" + talisman[listHero.childNodes[i].getAttribute("talisman")] + "\r\n";
            }
            if (listHero.childNodes[i].getAttribute("hechizado") === "0") {
            } else {
                llista += "-" + hechizado[listHero.childNodes[i].getAttribute("hechizado")] + "\r\n";
            }
            if (listHero.childNodes[i].hasAttribute("portadebatalla") && listHero.childNodes[i].getAttribute("portadebatalla") === "si") {
                llista += "-Portaestandarte de batalla ";
                if (listHero.childNodes[i].getAttribute("estandarteMag") === "0") {
                    llista += "\r\n";
                } else {
                    llista += "(" + estandarte[listHero.childNodes[i].getAttribute("estandarteMag")] + ")\r\n";
                }
            }
            if (listHero.childNodes[i].getAttribute("rCorona") === "si") {
                llista += "-Corona de Cuernos \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rPielN") === "si") {
                llista += "-Piel Necrótica \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rDiablo") === "si") {
                llista += "-Diablo de Múltiples Extremidades \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rZancada") === "si") {
                llista += "-Gran Zancada \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rPellejo") === "si") {
                llista += "-Pellejo Endurecido \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rPielH") === "si") {
                llista += "-Piel Humana \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rColmillos") === "si") {
                llista += "-Colmillos Destripadores \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rRuna") === "si") {
                llista += "-Runa de la Bestia Verdadera \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rSentidos") === "si") {
                llista += "-Sentidos Amplificados \r\n";
            }
            if (listHero.childNodes[i].getAttribute("rPielS") === "si") {
                llista += "-Piel Sombría \r\n";
            }
            llista += "\r\n";
        }
    }
    if (listBasic.hasChildNodes()) {
        for (var i = 0; i < listBasic.childNodes.length; i++) {
            llista += (listBasic.childNodes[i].getAttribute("nombre")).toUpperCase() + "\r\n";
            var pTotal;
            if (listBasic.childNodes[i].hasAttribute("cInd")) {
                pTotal = parseInt(listBasic.childNodes[i].getAttribute("cInd")) * parseInt(listBasic.childNodes[i].getAttribute("cantidad")) + parseInt(listBasic.childNodes[i].getAttribute("cextras"));
            } else {
                pTotal = parseInt(listBasic.childNodes[i].getAttribute("puntos"));
            }
            llista += "Puntos: " + pTotal + "\r\n";
            if (listBasic.childNodes[i].hasAttribute("cantidad")) {
                llista += "Tamaño de unidad: " + listBasic.childNodes[i].getAttribute("cantidad") + "\r\n";
            }
            if ($(listBasic.childNodes[i]).hasClass("gor")) {
                if (listBasic.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listBasic.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Escudo \r\n";
                }
            }
            if ($(listBasic.childNodes[i]).hasClass("ungor")) {
                if (listBasic.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arco corto \r\n";
                } else if (listBasic.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Javalina \r\n";
                }

            }
            if ($(listBasic.childNodes[i]).hasClass("mastin")) {
                if (listBasic.childNodes[i].getAttribute("vanguardia") === "si") {
                    llista += "-Vanguardia \r\n";
                }
                if (listBasic.childNodes[i].getAttribute("PellejoE") === "si") {
                    llista += "-Pellejo escamoso \r\n";
                }
                if (listBasic.childNodes[i].getAttribute("mutacion") === "si") {
                    llista += "-Mutaciones venenosas \r\n";
                }
            }
            if (listBasic.childNodes[i].hasAttribute("emboscada") && listBasic.childNodes[i].getAttribute("emboscada") === "si") {
                llista += "-Emboscada \r\n";
            } else if (listBasic.childNodes[i].hasAttribute("emboscada") && listBasic.childNodes[i].getAttribute("emboscada") === "ex") {
                llista += "-Exploradores \r\n";
            }
            if (listBasic.childNodes[i].hasAttribute("campeon") && listBasic.childNodes[i].getAttribute("campeon") === "si") {
                llista += "-Campeón ";
                if (listBasic.childNodes[i].hasAttribute("regaloCampeon") && listBasic.childNodes[i].getAttribute("regaloCampeon") !== "0") {
                    llista += "(" + regaloC[listBasic.childNodes[i].getAttribute("regaloCampeon")] + ")\r\n";
                } else {
                    llista += "\r\n";
                }
            }
            if (listBasic.childNodes[i].hasAttribute("estandarte") && listBasic.childNodes[i].getAttribute("estandarte") === "si") {
                llista += "-Estandarte ";
                if (listBasic.childNodes[i].hasAttribute("estandarteMag") && listBasic.childNodes[i].getAttribute("estandarteMag") !== "0") {
                    llista += "(" + estandarte[listBasic.childNodes[i].getAttribute("estandarteMag")] + ")\r\n";
                } else {
                    llista += "\r\n";
                }
            }
            if (listBasic.childNodes[i].hasAttribute("musico") && listBasic.childNodes[i].getAttribute("musico") === "si") {
                llista += "-Músico \r\n";
            }
            llista += "\r\n";
        }
    }
    if (listEsp.hasChildNodes()) {
        for (var i = 0; i < listEsp.childNodes.length; i++) {
            llista += (listEsp.childNodes[i].getAttribute("nombre")).toUpperCase() + "\r\n";
            var pTotal;
            if (listEsp.childNodes[i].hasAttribute("cInd")) {
                if (listEsp.childNodes[i].hasAttribute("cextras")) {
                    pTotal = parseInt(listEsp.childNodes[i].getAttribute("cInd")) * parseInt(listEsp.childNodes[i].getAttribute("cantidad")) + parseInt(listEsp.childNodes[i].getAttribute("cextras"));
                } else {
                    pTotal = parseInt(listEsp.childNodes[i].getAttribute("cInd")) * parseInt(listEsp.childNodes[i].getAttribute("cantidad"));
                }
            } else {
                pTotal = parseInt(listEsp.childNodes[i].getAttribute("puntos"));
            }
            llista += "Puntos: " + pTotal + "\r\n";
            if (listEsp.childNodes[i].hasAttribute("cantidad")) {
                llista += "Tamaño de unidad: " + listEsp.childNodes[i].getAttribute("cantidad") + "\r\n";
            }
            if ($(listEsp.childNodes[i]).hasClass("centigor")) {
                if (listEsp.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                } else {
                    llista += "-Lanza y escudo \r\n";
                }
                if (listEsp.childNodes[i].getAttribute("armadura") === "li") {
                    llista += "-Hachas arrojadizas \r\n";
                } else if (listEsp.childNodes[i].getAttribute("armadura") === "pe") {
                    llista += "-Javalinas \r\n";
                }
            }
            if ($(listEsp.childNodes[i]).hasClass("minotauro")) {
                if (listEsp.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listEsp.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                } else if (listEsp.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Escudo \r\n";
                }
            }
            if ($(listEsp.childNodes[i]).hasClass("troll")) {
                if (listEsp.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                }
            }
            if ($(listEsp.childNodes[i]).hasClass("ogroD")) {
                if (listEsp.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listEsp.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                } else if (listEsp.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Alabarda \r\n";
                }
            }
            if ($(listEsp.childNodes[i]).hasClass("quimera")) {
                if (listEsp.childNodes[i].getAttribute("aliento") === "si") {
                    llista += "-Aliento flamígero \r\n";
                }
                if (listEsp.childNodes[i].getAttribute("pielR") === "si") {
                    llista += "-Piel regenerativa \r\n";
                }
                if (listEsp.childNodes[i].getAttribute("sudor") === "si") {
                    llista += "-Sudoración venenosa \r\n";
                }
            }
            if (listEsp.childNodes[i].hasAttribute("emboscada") && listEsp.childNodes[i].getAttribute("emboscada") === "ex") {
                llista += "-Exploradores \r\n";
            }
            if (listEsp.childNodes[i].hasAttribute("campeon") && listEsp.childNodes[i].getAttribute("campeon") === "si") {
                llista += "-Campeón ";
            }
            if (listEsp.childNodes[i].hasAttribute("estandarte") && listEsp.childNodes[i].getAttribute("estandarte") === "si") {
                llista += "-Estandarte ";
                if (listEsp.childNodes[i].hasAttribute("estandarteMag") && listEsp.childNodes[i].getAttribute("estandarteMag") !== "0") {
                    llista += "(" + estandarte[listEsp.childNodes[i].getAttribute("estandarteMag")] + ")\r\n";
                } else {
                    llista += "\r\n";
                }
            }
            if (listEsp.childNodes[i].hasAttribute("musico") && listEsp.childNodes[i].getAttribute("musico") === "si") {
                llista += "-Músico \r\n";
            }
            llista += "\r\n";
        }
    }
    if (listSing.hasChildNodes()) {
        for (var i = 0; i < listSing.childNodes.length; i++) {
            llista += (listSing.childNodes[i].getAttribute("nombre")).toUpperCase() + "\r\n";
            var pTotal;
            if (listSing.childNodes[i].hasAttribute("cInd")) {
                if ($(listSing.childNodes[i]).hasClass("pirazzo")) {
                    pTotal = parseInt(listSing.childNodes[i].getAttribute("cInd")) * parseInt(listSing.childNodes[i].getAttribute("cantidad")) + parseInt(listSing.childNodes[i].getAttribute("cInd2")) * parseInt(listSing.childNodes[i].getAttribute("cantidad2")) + parseInt(listSing.childNodes[i].getAttribute("cextras"));
                } else
                    pTotal = parseInt(listSing.childNodes[i].getAttribute("cInd")) * parseInt(listSing.childNodes[i].getAttribute("cantidad")) + parseInt(listSing.childNodes[i].getAttribute("cextras"));
            } else {
                pTotal = parseInt(listSing.childNodes[i].getAttribute("puntos"));
            }
            llista += "Puntos: " + pTotal + "\r\n";
            if (listSing.childNodes[i].hasAttribute("cantidad")) {
                if ($(listSing.childNodes[i]).hasClass("ren")) {
                    if ($(listSing.childNodes[i]).hasClass("pirazzo")) {
                        llista += "Tamaño de unidad: Pirazzo, " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 5) + " piqueros y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad2")) + 4) + " ballesteros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("rico")) {
                        llista += "Tamaño de unidad: Ricco y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " piqueros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("leopold")) {
                        llista += "Tamaño de unidad: Leopold y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " piqueros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("alcatani")) {
                        llista += "Tamaño de unidad: Rodrigo y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " piqueros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("vespero")) {
                        llista += "Tamaño de unidad: Véspero y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " duelistas \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("miragliano")) {
                        llista += "Tamaño de unidad: Maximilian y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " tiradores \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("almuktar")) {
                        llista += "Tamaño de unidad: Al Muktar, el Jeque Ahmed Shufti, Ibn y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 2) + " jinetes \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("braganza")) {
                        llista += "Tamaño de unidad: Luca y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " ballesteros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("voland")) {
                        llista += "Tamaño de unidad: Voland y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " cazadores \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("urslo")) {
                        llista += "Tamaño de unidad: Beorg, Oerl el joven y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 8) + " hombres oso \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("golgfag")) {
                        llista += "Tamaño de unidad: Golgfag, Skaff y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 2) + " ogros \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("lumpin")) {
                        llista += "Tamaño de unidad: Lumpin Croop, Ned Puñojamón y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 3) + " halflings \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("oglah")) {
                        llista += "Tamaño de unidad: Oglah Khan y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " jinetes hobgoblin \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("drong")) {
                        llista += "Tamaño de unidad: Drong el largo y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " piratas enanos \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("bronzino")) {
                        if (parseInt(listSing.childNodes[i].getAttribute("cantidad")) > 0)
                            llista += "Tamaño de unidad: Bronzino y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 1) + " cañones (con los respectivos grupos de artilleros) \r\n";
                        else
                            llista += "Tamaño de unidad: Bronzino y 1 cañón (con el respectivo grupo de artilleros) \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("catrazza")) {
                        llista += "Tamaño de unidad: Daddallo y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " hombres pájaro \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("tichi")) {
                        llista += "Tamaño de unidad: Tichi Huichi y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " eslizones de gran cresta \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("ruglud")) {
                        llista += "Tamaño de unidad: Ruglud, Larva y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 8) + " orcos akorazados \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("maldita")) {
                        llista += "Tamaño de unidad: Richter Kreugar y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 9) + " esqueletos \r\n";
                    } else if ($(listSing.childNodes[i]).hasClass("mengil")) {
                        llista += "Tamaño de unidad: Mengil y " + (parseInt(listSing.childNodes[i].getAttribute("cantidad")) + 4) + " desolladores \r\n";
                    }
                } else
                    llista += "Tamaño de unidad: " + listSing.childNodes[i].getAttribute("cantidad") + "\r\n";
            }
            if ($(listSing.childNodes[i]).hasClass("shaggoth")) {
                if (listSing.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("piquero")) {
                if (listSing.childNodes[i].getAttribute("armadura") === "pe") {
                    llista += "-Armadura pesada \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("duelista")) {
                if (listSing.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Rodela \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Pistola \r\n";
                }
                if (listSing.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Cuchillos arrojadizos \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("caballero")) {
                if (listSing.childNodes[i].getAttribute("arma") === "no") {
                    llista += "-Lanza de caballería \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                }
                if (listSing.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
                if (listSing.childNodes[i].getAttribute("barda") === "si") {
                    llista += "-Barda \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("jinete")) {
                if (listSing.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Lanza\r\n";
                }
                if (listSing.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
                if (listSing.childNodes[i].getAttribute("arco") === "si") {
                    llista += "-Arco \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("ogro")) {
                if (listSing.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                }
                if (listSing.childNodes[i].getAttribute("armadura") === "pe") {
                    llista += "-Armadura pesada \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("enano")) {
                if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                }
                if (listSing.childNodes[i].getAttribute("armadura") === "pe") {
                    llista += "-Armadura pesada \r\n";
                }
                if (listSing.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
                if (listSing.childNodes[i].getAttribute("arco") === "si") {
                    llista += "-Ballesta \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("nordico")) {
                if (listSing.childNodes[i].getAttribute("arma") === "ad") {
                    llista += "-Arma adicional \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "2m") {
                    llista += "-Arma a 2 manos \r\n";
                } else if (listSing.childNodes[i].getAttribute("arma") === "es") {
                    llista += "-Mayal \r\n";
                }
                if (listSing.childNodes[i].getAttribute("escudo") === "si") {
                    llista += "-Escudo \r\n";
                }
            }
            if ($(listSing.childNodes[i]).hasClass("halfling")) {
                if (listSing.childNodes[i].getAttribute("arma") === "no") {
                    llista += "-Arma de mano y arco \r\n";
                } else {
                    llista += "-Lanza, armadura ligera y escudo \r\n";
                }
            }

            if (listSing.childNodes[i].hasAttribute("campeon") && listSing.childNodes[i].getAttribute("campeon") === "si") {
                llista += "-Campeón ";
                if (listSing.childNodes[i].hasAttribute("regaloCampeon") && listSing.childNodes[i].getAttribute("regaloCampeon") !== "0") {
                    llista += "(" + regaloC[listSing.childNodes[i].getAttribute("regaloCampeon")] + ")\r\n";
                } else {
                    llista += "\r\n";
                }
            }
            if (listSing.childNodes[i].hasAttribute("estandarte") && listSing.childNodes[i].getAttribute("estandarte") === "si") {
                llista += "-Estandarte ";
                if (listSing.childNodes[i].hasAttribute("estandarteMag") && listSing.childNodes[i].getAttribute("estandarteMag") !== "0") {
                    llista += "(" + estandarte[listSing.childNodes[i].getAttribute("estandarteMag")] + ")\r\n";
                } else {
                    llista += "\r\n";
                }
            }
            if (listSing.childNodes[i].hasAttribute("musico") && listSing.childNodes[i].getAttribute("musico") === "si") {
                llista += "-Músico \r\n";
            }
            llista += "\r\n";
        }
    }
//    console.log(llista);
    download("llista.txt", llista);
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}