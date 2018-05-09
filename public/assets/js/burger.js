// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eatthis").on("click", function(event) {
      var id = $(this).data("id");
      var newdevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newdevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed eaten status to", newdevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#add").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  