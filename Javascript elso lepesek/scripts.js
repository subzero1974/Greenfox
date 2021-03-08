$("#elsoGomb").click(() => {
    console.log ("Most ramkattintottal");
  })
$("#masodikGomb").click(() => {
    $("#elsoGomb").text("First2");
  })
$("#harmadikGomb").click(() => {
    $("#elsoGomb").css("background-color", "yellow");
    $("#masodikGomb").css("background-color", "yellow");
    $("#harmadikGomb").css("background-color", "yellow");
  })
$("#inputGomb").click(() => {
  var str = $("#beviteliMezo").val();
    $("#inputGomb").css("background-color", str);
})