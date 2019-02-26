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
  }
});


function disciplinas(){
  var x = document.getElementById("DisciplinasAprendizagens2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
