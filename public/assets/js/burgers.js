// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
  
        var newDevouredState = {
            devoured: newDevoured
        };
  
        // Send the update - PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
  
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
  
        var newBurger = {
            name: $("#burgerName").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
  
        // Send the create - POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newCat
        }).then(
            function() {
                console.log("built a new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
  