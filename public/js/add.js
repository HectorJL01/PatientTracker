
// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a new patient information object
    var newInformation = {
      patient_id: $("#patientname").val().trim(),
      staff_name: $("#staff").val().trim(),
      department_name: $("#department").val().trim(),
      start_time: $("#starttime").val().trim(),
      end_time: $("#endtime").val().trim()
    };
    $(".card-body").hide();
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/booking",newInformation )
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
     
      });
  

  
  });