//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
    return;
  })
}

function frameIt() {
  $('img').('load', function () {
    img.attr('.tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function () {
    if(key.which == 71){
      alert('g was pressed');
      return;
    }
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert "Your form is going to be submitted now.";
    return;
  })
}

$(document).ready(function (){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();


});
