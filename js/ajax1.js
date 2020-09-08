
   function sendGetRequest()
   { 
      var request=new XMLHttpRequest();
          request.onreadystatechange = 
          function() { 
            if ((request.readyState == 4) &&
         (request.status == 200)) {
            
            return (request.responseText);
        }
     };
     request.open("GET","jsonfile/ajax.json", true);
    request.send(null)
    
    };
