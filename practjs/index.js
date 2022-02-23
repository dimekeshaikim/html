$(document).ready(function(){
  $("#submit").click(function(){
    var user = $("#user").val();
    var pas = $("#password1").val();
    var pass = $("#password2").val();
    if (user == ""){
      alert("Enter your username");
    }
    else if (pas == "") {
      alert("Enter your password");
    }
    else if (pass == "") {
      alert("Repeat your password");
    }
    else if (pas!=pass2) {
      alert("Your password doesn't match");
    }
    else{
      alert("Your data is saved");
    }
  });
  $('#show').click(function(){
    $('#password1').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  $('#pokazat').click(function(){
    $('#password2').attr('type', $(this).is(':checked') ? 'text' : 'password');
  });
  var submit = $("#submit").hide();
  $('#show2').click(function(){
    $('#submit').fadeToggle(0);
  });
  $('html').css('background-image', 'url("222.jpg")');
  $('#vverh').click(function(){
  $("html, body").animate({ scrollTop: 0}, 1000);
});
  $('#fde').click(function(){
    $('#aaa').fadeTo(2500, 0.5);
  });
  $('#btn').click(function(){
    $('#square').height(400);
    $('#square').width(400);
  });
  $('#knopka').click(function(){
    $('#square').height(100);
    $('#square').width(100);
  });
});
