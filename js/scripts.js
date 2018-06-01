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
    $('.result').html("<h2>Quiz Results</h2>" + '<img src="img/wrong-fit.gif" alt="shaking finger">' + "I'm sorry " + '<span class="namespan"></span>!' + "<br>" + "It looks like you would rather be doing something other than programming. No worries your passions lie elsewhere." );
  } else if (add(q1, q2, q3, q4, q5) <= 7 ) {
      $('.result').html("<h2>Quiz Results</h2>" + '<img src="img/dog-good-fit.gif" alt="dog celebrating">' + "Congratulations " + '<span class="namespan"></span>!' + "<br>" + '<p class="resulttrack">Ruby/Rails</p>' + "Ruby is a favorite language of developers building interactive web applications. It's most popular with startups and smaller companies who are looking to build their product quickly. " + "<a href='https://www.epicodus.com/sign-up/'>Sign up for the Ruby/Rails track now!</a>" );
  } else if (add(q1, q2, q3, q4, q5) <= 12) {
      $('.result').html("<h2>Quiz Results</h2>" + '<img src="img/dog-good-fit.gif" alt="dog celebrating">' + "Congratulations " + '<span class="namespan"></span>!' + "<br>" + '<p class="resulttrack">CSS/React</p>' + "Since React’s development at Facebook in 2011 it has exploded in popularity. Examples of companies and products that use React include AirBnB, BBC, Ebay, Facebook, Instagram, Lyft, Netflix, New York Times, Reddit, Nike, Pinterest, Paypal, and many more. " + "<a href='https://www.epicodus.com/sign-up/'>Sign up for the CSS/React track now!</a>" );
  } else if (add(q1, q2, q3, q4, q5) <= 15) {
      $('.result').html("<h2>Quiz Results</h2>" + '<img src="img/dog-good-fit.gif" alt="dog celebrating">' + "Congratulations " + '<span class="namespan"></span>!' + "<br>" + '<p class="resulttrack">C#/.NET</p>' + "C# is most popular among bigger established businesses, often for building internal software. You like the idea of working for a larger company on business software. C# is a going to be a great choice. " + "<a href='https://www.epicodus.com/sign-up/'>Sign up for the C#/.NET track now!</a>" );
  } else {
    $('.result').html("<h2>Quiz Results</h2>" + '<img src="img/wrong-fit.gif" alt="shaking finger">' + "I'm sorry " + '<span class="namespan"></span>!' + "<br>" + "It looks like you would rather be doing something other than programming. No worries your passions lie elsewhere." );
  }

  if(name === '') {
    $('.namespan').text("Mystery Person");
  }
  else {
    $('.namespan').text(name);
  }
  $(".result").slideDown();
  event.preventDefault();
  });
});
