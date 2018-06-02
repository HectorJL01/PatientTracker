


// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a new patient information object
    var newInformation = {
      patient_id: $("#patientid").val().trim(),
      patient_name:$("#patientname").val().trim(),
      room_number:$("#roomnumber").val().trim(),
      staff_name: $("#staff").val().trim(),
      department_name: $("#department").val().trim(),
      start_time: $("#starttime").val().trim(),
      end_time: $("#endtime").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/booking",newInformation )
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    // $("#patientname").val("");
    // $("#room").val("");
    // $("#staff").val("");
    // $("#time").val("");
  
  });