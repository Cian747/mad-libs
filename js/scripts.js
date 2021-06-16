$(document).ready(function(){
  $("#blanks-form").submit(function(){
  $("input#person1").val();  
  $(".person1").append("blah blah");
  $(".person2").append("blah blah");
  $(".animal").append("blah blah");
  $(".exclamation").append("blah blah");
  $(".verb").append("blah blah");
  $(".noun").append("blah blah");

  $("#story").show();
 
  event.preventDefault();

  });
  
});


// Input code
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
      var person1Input = $("input#person1").val(),
          person2Input = $("input#person2").val(),
          animalInput = $("input#animal").val(),
          exclamationInput = $("input#exclamation").val(),
          verbInput = $("input#verb").val(),
          nounInput = $("input#noun").val();
      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);

      $("#story").show();

      event.preventDefault();
  });
});