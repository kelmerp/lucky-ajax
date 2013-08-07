$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $('.container').on('submit', function(event){
  //   2- prevent the default action for that event from happening
    event.preventDefault();
    
  //   3- generate a random number between 1 and 6 using JavaScript
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var url = '/rolls';

  //   4- use jQuery to submit an AJAX post to the form's action
    $.post(url, { value: randomNumber }, function(data){
      console.log(data);
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
      // if $('#die > img') === []
      // {
      //   $('#die').append(data);
      // }
      // else
      // {
      //   $('#die > img').replaceWith(data);
      // }
      $('#die > img').hide();
      $('#die').append(data);

    });
  });



});
