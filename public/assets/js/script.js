// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $("#burgeradder").on("submit", function(event) {
    event.preventDefault(); 
  
    var newBurger = {
      burger: $("#burgername").val().trim()
    };    
    
    // Send the POST request.
    $.ajax("/api/burger", {
     type: "POST",
     data: newBurger
    }).then(
      function() {
       // console.log("created new burger");
      // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eatburger").on("click", function(event) {
    // Get the ID from the button.
    // This is shorthand for $(this).attr("data-burgerid")
    var id = $(this).data("burgerid");

    // Send the PUT request. 
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: "eat"
    }).then(
      function() {
        //console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
