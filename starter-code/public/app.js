console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

  $('#guess-number-form').submit(function(event){
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/pick-a-number",
      data: {number: $('#guess-num').val()},
      success: onSuccess
    });

    function onSuccess(data){
      console.log(data);
      $('.ul').append("<li>" + data + "</li>");
    };
  });


  $('#target-number-form').submit(function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/pick-a-number",
      data: {number: $('#new-num').val()},
      success: success,
      error: error
    });

    function success(data){
      console.log(data);

    };

    function error(data){
      console.log(data);
    };
  });



});
