let formulario= document.getElementById("formulario");
let titulo=  document.getElementById("id-titulo");

formulario.addEventListener("submit", validacion);

function validacion (e){
    e.preventDefault();

    let info= e.target;
    let infoDNI= (info.children[5]);
    console.log(infoDNI);       
}

let input= document.getElementById("input-principal");
let subtitulo= document.getElementById("id-subtitulo");

input.addEventListener("click",() => {subtitulo.className="san-lorenzo"});
input.addEventListener("dblclick",() => {subtitulo.className="independiente"});
input.addEventListener("mouseout",() => {subtitulo.className="boca-juniors"});

