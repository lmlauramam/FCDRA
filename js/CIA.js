document.getElementsByClassName("addDisciplinaNuclear")[0].onclick = function() {
  var disciplinasNucleares = document.querySelector(".DisciplinasNucleares").innerHTML;
  //var newRow = document.querySelector(".NuclearRow").innerHTML;
  //disciplinasNucleares.append(newRow);
  document.getElementById("addDisciplinasNucleares").innerHTML += disciplinasNucleares;
}
