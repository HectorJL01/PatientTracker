$.get("/api/booking", function(data) {
    // For each patient that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold  data
      var patientInfo = $("<div>");
      // Add a class to this div: 'well'
      patientInfo.addClass("well");
      // Add an id to the well to mark which well it is
      patientInfo.attr("id", "patientid" + i);
      // Append the well to the well section
      $("#well-patientinfo").append(patientInfo);
  
      // Now  we add our patient data to the well we just placed on the page
      $("#patientid" + i).append("<h2>" + (i + 1) + ". " + data[i].patient_id + "</h2>");
      $("#patientid" + i).append("<h3>Name: " + data[i].staff_name+ "</h4>");
      $("#patientid" + i).append("<h3>Department: " + data[i].department_name + "</h4>");
      $("#patientid" + i).append("<h3>Start time : " + data[i].start_time + "</h4>");
      $("#patientid" + i).append("<h3>End time: " + data[i].end_time + "</h4>");

    }
  });