//document.getElementsByClassName("addDisciplinaNuclear")[0].onclick = $(document).onclick(function() {
//  var disciplinasNucleares = document.querySelector(".DisciplinasNucleares").innerHTML;
  //var newRow = document.querySelector(".NuclearRow").innerHTML;
  //disciplinasNucleares.append(newRow);
//document.getElementById("addDisciplinasNucleares").innerHTML += disciplinasNucleares;
//});

/*function addDisciplinaNuclear() {
  var disciplinasNucleares = document.querySelector(".DisciplinasNucleares").innerHTML;
  document.getElementById("addDisciplinasNucleares").innerHTML += disciplinasNucleares;
}*/
$(document).ready(function() {
  var x = document.getElementById("DisciplinasAprendizagens2");
  x.style.display = "none";
  showlAllAprendizagens();
});

//Show Disciplinas 2 block
function disciplinas(){
  var x = document.getElementById("DisciplinasAprendizagens2");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

//Show Aprendizagens if a Disciplina is chosen
function showAprendizagens(DiscisplinasID, AprendizagensID) {
  let disciplina = document.getElementById(DiscisplinasID).value;
  let aprendizagem = document.getElementById(AprendizagensID);
  if (disciplina == 0){
    aprendizagem.style.display = "none";
  }
  else {
        aprendizagem.style.display = "block";
  }
}

function showlAllAprendizagens(){
    showAprendizagens ("DisciplinasDD" , "AprendizagensDD" );
    showAprendizagens ("DisciplinasDD2" , "AprendizagensDD2" );

}
