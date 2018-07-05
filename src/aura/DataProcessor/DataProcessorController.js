({
 downloadDocument : function(component, event, helper){

  var sendDataProc = component.get("v.sendData");
  var dataToSend = {
     "label" : "This is test"
  }; //this is data you want to send for PDF generation.     Add routine that calls and returns data...

  //invoke vf page js method
  sendDataProc(dataToSend, function(){
              //handle callback
  });
 }
})