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

$(function() {

  // initialize
  $('.materialSelect').material_select();

  // setup listener for custom event to re-initialize on change
  $('.materialSelect').on('contentChanged', function() {
    $(this).material_select();
  });

  // update function for demo purposes
  $("#NuclearesButton").click(function() {

     // add new value for Disciplinas Nucleares
    var newValue = getNewDisicpilina();
    var $newOpt = $("<option>").attr("value",newValue).text(newValue)
    $("#NuclearesDD").append($newOpt);

    // fire custom event anytime you've updated select
    $("#NuclearesDD").trigger('contentChanged');

  });

});

function getNewDisicpilina() {
  var nucleares =  ['Matemática','Português','Ciências','Cuddly','Lazy'];
  var nouns = ['Doggo','Floofer','Pupper','Fluffer', 'Nugget'];
  var newOptValue = nucleares[Math.floor(Math.random() * nucleares.length)];
  return newOptValue;
}
