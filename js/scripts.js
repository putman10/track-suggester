// function add(question1, question2, question3, question4, question5) {
//   return question1 + question2 + question3 + question4 + question5;
// };

$(document).ready(function() {
  $("#start").click(function() {
    $(".quiz").show();
  });





  // $("form#quizquestions").submit(function(event) {
  // var question1 = parseInt($("input:radio[name=question1]:checked").val());
  // var question2 = parseInt($("input:radio[name=question2]:checked").val());
  // var question3 = parseInt($("input:radio[name=question3]:checked").val());
  // var question4 = parseInt($("input:radio[name=question4]:checked").val());
  // var question5 = parseInt($("input:radio[name=question5]:checked").val());
  //
  //
  // if (add(question1, question2, question3, question4, question5) >= 9) {
  //   $('.result').text("Margot Tenenbaum");
  // } else if (add(question1, question2, question3, question4, question5) >= 6 ) {
  //   $('.result').text("Klaus Daimler");
  // } else if (add(question1, question2, question3, question4, question5) === 5) {
  //   $('.result').text("Mr. Fox");
  // } else {
  //   $('.result').text("Answer all the questions");;
  // }
  //
  // event.preventDefault();
  // });
});
