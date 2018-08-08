// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#addBurgerSubmit").on("click", function (event) {

    event.preventDefault();

    let newBurgerName = { newBurgerName: $("#addBurger").val().trim() };

    // Send the PUT request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgerName
    }).then(function (res) {

      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devourButton").on("click", function (event) {

    let burgerUpdateId = $(this).attr("burger_id");

    console.log(burgerUpdateId);

    $.ajax("/api/burgers/" + burgerUpdateId, {
      type: "PUT"
    }).then(function (res) {
      console.log("shouldreload");

      location.reload();

    });

  });



});
