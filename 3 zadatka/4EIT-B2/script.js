//let info = ['info/kuca.html','info/patkica.html','info/maca.html','info/pile.html','info/krava.html'];
let z1=document.getElementById('zvuk1');
let z2=document.getElementById('zvuk2');
let z3=document.getElementById('zvuk3');
let z4=document.getElementById('zvuk4');
let z5=document.getElementById('zvuk5');

function pusti(id){
	switch(id){
		case 'slika1': z1.play();break;
		case 'slika2': z2.play();break;
		case 'slika3': z3.play();break;
		case 'slika4': z4.play();break;
		case 'slika5': z5.play();break;
	}
}

function stani(id){
	switch(id){
		case 'slika1': z1.pause();break;
		case 'slika2': z2.pause();break;
		case 'slika3': z3.pause();break;
		case 'slika4': z4.pause();break;
		case 'slika5': z5.pause();break;
	}
}