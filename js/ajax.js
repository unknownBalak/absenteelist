   window.batch =function()
   {
       window.query= document.querySelector('#id').value;
      // console.log(window.query);         
    
   }  
  //  console.log(window.query);
       var absenteelist=[];
    //  ajaxut,ils.
     comparedata =function(csvfile){
    //   console.log(csvfile.length);
          
        var request=new XMLHttpRequest();
        request.onreadystatechange = 
        function() { 
          if ((request.readyState == 4) &&
       (request.status == 200)) {
           
        var name= JSON.parse(request.responseText);
        console.log(typeof(name));
        // console.log(name[0].FullName);
           
        
        var bool=true;
        for(var i=0;i<name.length;i++){
                    var dbname= name[i].FullName;
             for(var j=0;j<csvfile.length;j++){
                   var inputname=csvfile[j][0];
                if(dbname===inputname)
                   {
                       bool=true;
                       break;
                   }       
              else {
                  bool =false;
              } 
            
            }
            if(!bool) 
        {
          absenteelist.push(dbname);
      }

        }
    }
   };
   if(window.query==="Ap"){
     alert("Please Choose the class");
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

  

  // if(absenteelist.le
   if(absenteelist.length!==0){
    var table=document.getElementById('data');
  console.log(absenteelist);
  var ul=document.createElement("ul");
  absenteelist.forEach(element => {
          
           var list=document.createElement('li');
           list.innerHTML=element;
             ul.appendChild(list);
  
  });
  table.appendChild(ul);
  document.getElementById("upload-csv").value="";
 
}
    

window.absenteelist.splice(0,absenteelist.length);

}

//  });