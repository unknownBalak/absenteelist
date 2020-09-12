  
       var absenteelist=[];

     comparedata =function(csvfile){

    window.query= document.querySelector('#id').value;
        var request=new XMLHttpRequest();
        request.onreadystatechange = 
        function() { 

          if ((request.readyState == 4) &&
       (request.status == 200)) {
           
        var name= JSON.parse(request.responseText);
        console.log(typeof(name));
        // calling the function
           comapreanddisplay(csvfile,name);
        
      }
   };
   if(window.query==="Ap"){
     alert("Please Choose the class");
     return 0;
   }
  // console.log(window.query);
   if(window.query==="Maths"){
    console.log("We are in Maths")
    request.open("GET","jsonfile/maths.json", true);
   }
  else if(window.query==="Stats"){
    console.log("We are in stats")
    request.open("GET","jsonfile/stats.json", true);
  }
  else if(window.query==="WP"){
    console.log("We are in WP")
    request.open("GET","jsonfile/WP.json", true);
  }
  request.send(null)

  

  document.getElementById("upload-csv").value="";
 

    


}
