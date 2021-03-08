$("#addTodo").click(() => {
  todo=$("#todoMezo").val();
  $(".lista").append (`<li>${todo}</li>`);
  })

$("#delTodo").click(() => {
  todo=$("#todoMezo").val();
  $("li:last").remove ();

  })

