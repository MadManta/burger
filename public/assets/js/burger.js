// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $("#add").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".eatthis").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      devoured: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed status to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // $(".eatthis").on("click", function(event) {
  //   event.preventDefault();
  //   var id = $(this).data("id");
  //   var newStatus = $(this).data("newstatus");

  //   var newStatusState = {
  //     devoured: newStatus
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "PUT",
  //     data: newStatusState
  //   }).then(
  //     function() {
  //       console.log("changed sleep to", newStatus);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });


  
    
  });
  