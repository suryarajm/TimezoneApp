window.onload = function(){	   
	var tzName = moment().zone(new Date().getTimezoneOffset());//get browser timezone
	$('#selectedZone').timezones();//Timezone dropdown  
  document.getElementById("originalTimezoneVal").innerHTML = tzName;	
	currentTimeToSelectedZoneConversion();  
  
  $(".form_datetime").change(function(e){ //selecting date 
    choosenDateToSelectedZoneConversion();
  });

    $("#converttoUtc").on("click",function(){//send button click
       var selectedTimezoneDate = $("#selectedTimezoneDate").text();
       var selectedTimezoneDateUtc = new Date(selectedTimezoneDate).toUTCString();//Date in Selected Timezone to UTC
       var recievedUtcDateinlocal = moment.tz(selectedTimezoneDateUtc, $("#selectedZone").val());//UTC Date to Selected Timezone
       $("#newDateinUtc").text(selectedTimezoneDateUtc);       
       $("#datefromserverimlocal").text(recievedUtcDateinlocal);
    });

    $('#selectedZone').change(function(){
      currentTimeToSelectedZoneConversion();
      choosenDateToSelectedZoneConversion();
    })

    function currentTimeToSelectedZoneConversion(){
      var currentTimeinUTC = new Date(tzName).toUTCString();
      var currentTimeinNewZone = moment.tz(currentTimeinUTC, $("#selectedZone").val());
      $("#currentTimeinNewZone").text(currentTimeinNewZone);
    }

    function choosenDateToSelectedZoneConversion(){
      var selectedDateinLocaltimeZone = new Date($("#mirror_field").val());
      var slectedDateInUTC = selectedDateinLocaltimeZone.toUTCString();//selected date to UTC
      var choosedateInSlectedzone = moment.tz(slectedDateInUTC, $("#selectedZone").val());//selected date to selected timezone  
      $("#selectedTimezoneDate").text(choosedateInSlectedzone);
    }
}