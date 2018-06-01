function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
};

$(document).ready(function() {
  $("#start").click(function() {
    $(".quiz").show();
  });

  $("#question1").change(function() {
    $("#question2").show();
  });

  $("#question2").change(function() {
    $("#question3").show();
  });

  $("#question3").change(function() {
    $("#question4").show();
  });

  $("#question4").change(function() {
    $("#question5").show();
  });

  $("#question5").change(function() {
    $("#submit").show();
  });

  $("form#quizform").submit(function(event) {
  var q1 = parseInt($("input:radio[name=q1]:checked").val());
  var q2 = parseInt($("input:radio[name=q2]:checked").val());
  var q3 = parseInt($("input:radio[name=q3]:checked").val());
  var q4 = parseInt($("input:radio[name=q4]:checked").val());
  var q5 = parseInt($("input:radio[name=q5]:checked").val());


  if (add(q1, q2, q3, q4, q5) >= 9) {
    $('.result').text("Ruby/Rails");
  } else if (add(q1, q2, q3, q4, q5) >= 6 ) {
    $('.result').text("CSS/React");
  } else if (add(q1, q2, q3, q4, q5) === 5) {
    $('.result').text("C#/.NET");
  } else {
    $('.result').text("Answer all the questions");;
  }

  event.preventDefault();
  });
});
