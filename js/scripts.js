function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
};

$(document).ready(function() {
  $("#start").click(function() {
    $(".quiz").slideDown();
  });

  $("#question1").change(function() {
    $("#question2").slideDown();
  });

  $("#question2").change(function() {
    $("#question3").slideDown();
  });

  $("#question3").change(function() {
    $("#question4").slideDown();
  });

  $("#question4").change(function() {
    $("#question5").slideDown();
  });

  $("#question5").change(function() {
    $("#submit").slideDown();
  });

  $("form#quizform").submit(function(event) {
  var q1 = parseInt($("input:radio[name=q1]:checked").val());
  var q2 = parseInt($("input:radio[name=q2]:checked").val());
  var q3 = parseInt($("input:radio[name=q3]:checked").val());
  var q4 = parseInt($("input:radio[name=q4]:checked").val());
  var q5 = parseInt($("input:radio[name=q5]:checked").val());
  var name = $("input#namebox").val();


  if (add(q1, q2, q3, q4, q5) <= 2) {
    $('.result').html('<img src="img/wrong-fit.gif" alt="shaking finger">' + "I'm Sorry " + '<span class="namespan"></span>,' + "<br>" + "It looks like you would rather be doing something other than programming. No worries your passions lie elsewhere" );
    $('.namespan').text(name);
    $(".result").slideDown();
  } else if (add(q1, q2, q3, q4, q5) <= 7 ) {
    $('.result').text("Ruby/Rails");
    $('.namespan').text(name);
  } else if (add(q1, q2, q3, q4, q5) <= 12) {
    $('.result').text("CSS/React");
    $('.namespan').text(name);
  } else if (add(q1, q2, q3, q4, q5) <= 15) {
    $('.result').text("C#/.NET");
    $('.namespan').text(name);
  } else {
    $('.result').text("Programming isn't for you");
    $('.namespan').text(name);
  }

  event.preventDefault();
  });
});
