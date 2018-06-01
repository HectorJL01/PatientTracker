

$("#search-btn").on("click", function(event) {
  console.log("screch")
  event.preventDefault();

  var Searched= $("#patient-search").val().trim();

  Searched = Searched.replace(/\s+/g, "").toLowerCase();

console.log(Searched )

  $.get("/api/booking/" + Searched, function(data) {

    console.log(data);
   
    patientinfo(data);
  });

function patientinfo(data){


    $("#well-patientinfo").empty();
   $("#well-patientinfo").show();

  
     
      var patientInfo = $("<div>");
      
      patientInfo.addClass("well");
      
      patientInfo.attr("id", "patientid" );
  
      $("#well-patientinfo").append(patientInfo);
 
      $("#patientid" ).append("<h2>id:" + Searched + "</h2>");
      $("#patientid" ).append("<h2>patient_id:"  + data.patient_id + "</h2>");
      $("#patientid" ).append("<h3>Name: " + data.patients[0].patient_name+ "</h4>");
      $("#patientid" ).append("<h3>Department: " + data.department_name + "</h4>");
      $("#patientid" ).append("<h3>Start time : " + data.start_time + "</h4>");
      $("#patientid" ).append("<h3>End time: " + data.end_time + "</h4>");
     
}
});
//------------------------------------
var dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = '2017-06-01T08:30';