function squadMember(nombre, apellido, edad, hobby) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad + " años";
	this.imagen = new Image();
	this.imagen.src = "img/" + this.nombre + ".png";
	this.comentarios = "hola";
	this.hobby = function(){
		this.hobby = hobby.split(", ");
		var list = document.createElement('UL');
		this.hobby.forEach(function(element){
			var listItem = document.createElement('LI');
			var t = document.createTextNode(element);
			listItem.appendChild(t); 
			list.appendChild(listItem);});
		return list;
	}
	this.print = function(){
		var listado = document.getElementById('listado');
		var divUsuario = document.createElement('DIV');
		divUsuario.className = 'usuario';
		var divText = document.createElement('DIV');
		divText.className = 'texto';
		var name = document.createElement('H3');
		var nameT = document.createTextNode(this.nombre + " " + this.apellido);
		name.appendChild(nameT);
		divText.appendChild(name);
		var age = document.createElement('H4');
		var ageT = document.createTextNode(this.edad);
		age.appendChild(ageT);
		divText.appendChild(age);
		var jovi = document.createElement('SPAN');
		jovi.className = 'jovi';
		var joviT = document.createTextNode("Le gusta:");
		jovi.appendChild(joviT);
		divText.appendChild(jovi);
		divText.appendChild(this.hobby());
		divUsuario.appendChild(this.imagen);
		divUsuario.appendChild(divText);
		var divComentarios = document.createElement('DIV');
		divComentarios.className = 'comentarios';
		var form = document.createElement("FORM");
		var input = document.createElement("textarea");
		var button = document.createElement("button");
		var buttonT = document.createTextNode("Agregar comentario");
		button.appendChild(buttonT);
		button.className = 'btn';
		input.id = "comentarioPara" + squad.indexOf(this);
		input.placeholder = "Escribe aquí un comentario para " + this.nombre;
		input.maxLength = "300";
		form.appendChild(input);
		form.appendChild(button);
		var divComentsUsuario = document.createElement('DIV');
		divComentsUsuario.id = "comentarios" + squad.indexOf(this);
		var comentarios = [];
		button.onclick = function agregarComentario(){
			if (input.value.length > 0) {
				comentarios.push(input.value);
				console.log(comentarios);
				var singleComment = document.createElement('DIV');
				singleComment.id = divComentsUsuario.id + "no" + comentarios.length;
				singleComment.className = "singleComment";
				var pComment = document.createElement('P');
				var tComment = document.createTextNode(input.value);
				pComment.appendChild(tComment);
				var likesDiv = document.createElement('DIV');
				likesDiv.className = 'likes';
				likesDiv.innerHTML = '<button class="btn btn-heart" onclick="like(this)"><i class="fa fa-heart fa-lg"></i></button>' + '<span>0</span>';
				singleComment.appendChild(pComment);
				singleComment.appendChild(likesDiv);
				document.getElementById(divComentsUsuario.id).appendChild(singleComment);
				input.value = "";
				return false;
			}
		};
		divComentarios.appendChild(form);
		divComentarios.appendChild(divComentsUsuario);
		divUsuario.appendChild(divComentarios);
		listado.appendChild(divUsuario);
	}
}

function like(click) {
	var contador = click.nextSibling;
	var numLikes = parseInt(contador.innerHTML) + 1;
	contador.innerHTML = numLikes;
	return false;
}

const Laura = new squadMember("Laura","Peláez", "XX", "Cine");
const Orieta = new squadMember("Orieta","Toro", 27, "Leer, Dormir");
const Constanza = new squadMember("Constanza","Pecori", 26, "Tejer, Comer, Dormir");
const Rangi = new squadMember("Rangi","Becerra", 32, "Viajar");
const Caterina = new squadMember("Caterina","Da Silva", 26, "Jugar juegos online, Ver videos de gatos");
const Rosa = new squadMember("Rosa","Díaz", 32, "Pensar en la inmortalidad del cangrejo");
const Genesis = new squadMember("Génesis","Narváez", 27, "Pasear en bici");
const Camila = new squadMember("Camila", "González", 26, "Ver netflix, Jugar con mascotas, Degustar cervezas");

var squad = [Laura, Orieta, Constanza, Rangi, Caterina, Rosa, Genesis, Camila];

squad.forEach(function(element){element.print();});