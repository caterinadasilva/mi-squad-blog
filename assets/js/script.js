var listado = document.getElementById('listado');
function squadMember(nombre, apellido, edad, hobby) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobby = hobby.split(",");
	this.print = function(){
		listado.innerHTML += "<div class='usuario'><img src='img/user.png' alt='foto de perfil de usuario'><div class='texto'><h3>" + this.nombre + " " + this.apellido + "</h3><span>" + this.edad + " años</span><p>" + this.hobby + "</p></div></div>";
	}
}

const Laura = new squadMember("Laura","Peláez", "XX","Cinéfila");
const Orieta = new squadMember("Orieta","Toto", 27,"Leer, Dormir");
const Constanza = new squadMember("Constanza","Pecori", 26,"Tejer, Comer, Dormir");
const Rangi = new squadMember("Rangi","Becerra", 32,"Viajar");
const Caterina = new squadMember("Caterina","Da Silva", 26,"Jugar juegos online, Ver videos de gatos");
const Rosa = new squadMember("Rosa","Díaz", 32,"Pensar en la inmortalidad del cangrejo");
const Genesis = new squadMember("Génesis","Narváez", 27,"Pasear en bici");

var squad = [Laura, Orieta, Constanza, Rangi, Caterina, Rosa, Genesis];

squad.forEach(function(element){element.print();});