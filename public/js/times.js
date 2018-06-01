

// <!-- 
// <div class="row">
//     <div class="col-lg-12">
//         <div class="card">
//             <div class="card-header">
//                 <h3 class="card-title">
//                     <strong> Search for a Patient </strong>
//                 </h3>
//             </div>


//                     <div class="card-body">
//                         <form action="" method="POST" role="form">
//                             <div class="form-group">
//                                 <label for=""> Patient's Name </label>
//                                 <h4>Here goes the name of the patient you search in the page before along with the room number</h4>
//                                 <input type="text" class="form-control" id="patientname" placeholder=""> -->
//                             <!-- </div>
//                             <div class="form-group">
//                                 <label for=""> Staff Name </label>
//                                 <input type="text" class="form-control" id="staff" placeholder="">
//                             </div>
//                             <div class="form-group">
//                                 <label for=""> Department </label>
//                                 <input type="text" class="form-control" id="department" placeholder="">
//                             </div> --> -->

                         





//                             <!-- <div class="form-group">

//                                 <div id="display">Book a Time</div>

//                                 <!-- <div id="buttons"></div>

//                                 <!-- <div id="buttons" class="btn" data-toggle="buttons">
//                                     <label class="btn btn-primary">
//                                         <input type="radio" name="hours" id="time" value="timeList"> Select a Time:
//                                     </label>
//                                         <p id="timeselected"></p>
//                                 </div>

//                                 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//                                 <script type="text/javascript">
//                                     $(document).ready(function () {

//                                                 var timeList = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30"];
//                                                 var main = $("body");
//                                                 var btns = main.find("#buttons");

//                                                 for (var i = 0; i < timeList.length; i++) { -->

//                                                     <!-- var label = $("<label>");
//                                                     var input = $("<input>"); -->

//                                                     label.addClass("btn btn-primary");
//                                                     input.attr("type", "radio");
//                                                     input.attr("name", "hours");
//                                                     input.attr("id", "time");

//                                             // added value to extract the information of time
//                                                     input.attr("value", "timeList");
                      
//                                                     label.text(timeList[i]);
//                                                     label.append(input);
//                                                     btns.append(label);
//                                                 }

//                                                 // Onclick to get the data from the time radio button this function is in w3 in how to extract a value on a radio
//                                                 function datafromradiobutton() {
//                                                         var x = document.getElementById("#time").value;
//                                                         document.getElementById("timeselected").innerHTML = x;
//                                                     }

//                                                 // Onclick to get the infomation to the database

//                                                 $("book-btn").on("click", function (event) {
//                                                     event.preventDefault();

//                                                     // Make a new patient information object
//                                                     var bookingInformation = {
//                                                         staff_name: $("#staff").val().trim(),
//                                                         department_name: $("#department").val().trim(),
//                                                         start_time: $("#timeselected").val().trim(),
//                                                     };

//                                                     // Send an AJAX POST-request with jQuery
//                                                     $.post("/api/booking", bookingInformation)
//                                                         // On success, run the following code
//                                                         .then(function (data) {
//                                                             // Log the data we found
//                                                             console.log(data);
//                                                         });

//                                                 });
//                                             });
//                                 <!-- </script> -->

//                             <!-- </div>

//                         </form>
//                     </div>
//                     <br>
//                     <div class="text-right">
//                         <button type="submit" class="btn btn-primary btn-md" id="book-btn">
//                             <span class="fa fa-book"></span> Book </button>
//                     </div>
//                 </div> --> -->
