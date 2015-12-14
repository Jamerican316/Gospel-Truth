$(document).ready(function() {
  $(".story_row").hide();
  $(".quiz").hide()
});
  $(".intro_alpha").on('click', function() {
    gospel_quiz.create();
    $(".intro").fadeOut(500);
    $(".story_row").fadeIn(1000);
    $(".quiz").fadeIn(1000);
    $('input[name=choice]').attr('checked',false);
    $(".story_row").hide();
});



var gospel_quiz = {
      questions: [{ 
                    qs: "Is eternal life a free gift from God?", 
                    ans: ['True', 'False'], 
                    right: "0", 
                    description: "The bible says, '...the gift of God is eternal life in Jesus Christ our Lord' Romans 6:23"}, { 
                    
                    qs: "Is there anything you can do to receive eternal life besides accepting God's free gift?", 
                    ans: ['Yes.. There is?', ' or No... There isn\'t?'], 
                    right: "0",
                    description: "Eternal life/Heaven is a gift, and gift are by nature free. Nothing is required by the receipient other\
                    receiving the gift. No amount of personal effort, good works or religeous deeds can\
                    will suffice to obtain eternal life/entry into heaven. 'For by greace you have been saved through faith\
                    —and this not from yourselves, it is the gift of God—not by works, so that no one can boast.' Ephesians 2:8,9"}, {
                    
                    qs: "WHY is it that no one can earn their way to Heaven?", 
                    ans: ['True', 'False'], 
                    right: "0", 
                    description: "The bible says, '...the gift of God is eternal life in Jesus Christ our Lord' Romans 6:23"}, {

                    qs: "Is eternal life a free gift from God?", 
                    ans: ['True', 'False'], 
                    right: "0", 
                    description: "The bible says, '...the gift of God is eternal life in Jesus Christ our Lord' Romans 6:23"}, {

                    qs: "Is eternal life a free gift from God?", 
                    ans: ['True', 'False'], 
                    right: "0", 
                    description: "The bible says, '...the gift of God is eternal life in Jesus Christ our Lord' Romans 6:23"}],

  create: function(){
 $("#questions").prepend(this.questions[this.counter].qs);
      $(".one span").append(this.questions[this.counter].ans[0]).text();
      $(".two span").append(this.questions[this.counter].ans[1]).text();
      $(".three span").append(this.questions[this.counter].ans[2]).text();
      $(".four span").append(this.questions[this.counter].ans[3]).text();
  },
  
  counter: 0,
  total_questions: 5,
  
  end_quiz: function(){
    if (this.counter === this.total_questions){
$("#correct_incorrect").append(" Congratulations on finishing the quiz! You correctly answered " +this.correct_answers+  " question(s).");
    }
  },
  
  correct_answers: 0,
  
  user_answer: function(choice){
      if (choice === this.questions[this.counter].right){
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
    $('.story_row').show();
    $('.quiz').fadeOut(500);
    gospel_quiz.end_quiz();
});
  	
$('#next_question_button').on("click", function(event){
    $('.story_row').hide();
    $("#correct_incorrect").html('');
    $("#more_information").html('');
    gospel_quiz.on_answer_submit();
    gospel_quiz.create();
    $('.quiz').fadeIn(500);
});
  
