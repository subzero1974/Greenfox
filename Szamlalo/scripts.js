let a = 0;
$("#szamMezo").text(a);
$("#novel").click(() => {
    a=a+1;
    $("#szamMezo").text(a);
  })
$("#csokken").click(() => {
  a=a-1;
  $("#szamMezo").text(a);
  })

