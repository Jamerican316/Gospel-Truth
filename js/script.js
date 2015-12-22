
$(document).ready(function() {
  $(".story").hide();
  $(".conclusion").hide();
  $(".quiz").hide();
});
  $(".intro_alpha").on('click', function() {
    gospel_quiz.create();
    $(".intro").fadeOut(500);
    $(".story_row").fadeIn(1000);
    $(".quiz").fadeIn(1000);
    $('input[name=choice]').attr('checked',false);
});



var gospel_quiz = {
      questions: [{ 
                    qs: "Do you have any spiritual beliefs?", 
                    ans: ['Yes', 'No'], 
                    right: ["0", "1"],
                    description: "There is no right or wrong answer to this question as we all are free to\
                    believe or not believe whatever we want, so you get a point for simply sharing your\
                    thoughts and answering yes or no."}, { 
                    
                    qs: "To you, who is Jesus the Messiah (or more commonly, The Christ).?", 
                    ans: ['"The Son of God?"', 'The guy who, "died on a cross?"', "A \"prophet?\"", "A good man and teacher?"], 
                    right: ["0","1", "2", "3"]
                    description: "He actually all of those things... So again a point for participation."}, {
                    
                    qs: "Do you think there is a \"heaven\" or \"hell?\"", 
                    ans: ['Yes', 'No'], 
                    right: ["0", "1"] 
                    description: "No right or wrong answer here either... Do you sense a theme here...?"}, {

                    qs: "If you died right now where would you go?", 
                    ans: ['Heaven?', 'or hell?'], 
                    right: ["0", "1"] 
                    description: "Whether you answered yes or no, think about the reason why..."}, {

                    qs: "If what you believe were not true would you like to know?", 
                    ans: ['Yes?', 'No?'], 
                    right: ["0", "1"]
                    description: ""}],

  create: function(){
    if (this.counter < 5){
       $("#questions").prepend(this.questions[this.counter].qs);
      $(".one span").append(this.questions[this.counter].ans[0]).text();
      $(".two span").append(this.questions[this.counter].ans[1]).text();
      $(".three span").append(this.questions[this.counter].ans[2]).text();
      $(".four span").append(this.questions[this.counter].ans[3]).text();
      $('.quiz').fadeIn(500);
    }

  },
  
  counter: 0,
  total_questions: 5,
  
  end_quiz: function(){
    if (this.counter === this.total_questions){
      console.log("hi")
      $("#closing_thoughts").prepend(" Congratulations on finishing the quiz! You correctly answered " +this.correct_answers+  " question(s).");
      $('.conclusion').show();
    }
  },
  
  correct_answers: 0,
  
  user_answer: function(choice){
      if (choice === this.questions[0].right[0] || choice === this.questions[0].right[1]){
          this.correct_answers++;
         $("#correct_incorrect").prepend("CORRECT!");
         $('#more_information').prepend(this.questions[this.counter].description).text();    
      }else{
         $("#correct_incorrect").prepend("INCORRECT!"); 
         $('#more_information').prepend(this.questions[this.counter].description).text(); 
      }
  },
  
  on_answer_submit: function(){
     $("#questions").html('');
     $(".one span").html('');
     $(".two span").html('');
     $(".three span").html('');
     $(".four span").html('');
  },
}

 
$('#answer_button').on("click", function(event){
    var user_choice = $("input[type='radio']:checked").val();
    event.preventDefault();
    gospel_quiz.user_answer(user_choice);
    gospel_quiz.counter++;
    $('input[name=choice]').attr('checked',false);
    $('.story').show();
    $('.quiz').fadeOut(500);
});
    
$('#next_question_button').on("click", function(event){
    $('.story').hide();
    $("#correct_incorrect").html('');
    $("#more_information").html('');
    gospel_quiz.on_answer_submit();
    gospel_quiz.end_quiz();
    gospel_quiz.create();
    console.log("im here");
});





