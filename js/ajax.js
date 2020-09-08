 ( function(global){

       var ajaxutils ={};
     ajaxutils.comparedata =function(csvfile){
    //   console.log(csvfile.length);
      //  document.getElementById('data').innerHTML ="<h4> Hey we are in ajax.js </h4>"
          
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
          document.write(dbname,"<br>");              
         
          // var row = table.insertRow(-1);
          // headerCell = document.createElement("td");
          //     headerCell.innerHTML= dbname;
          // row.appendChild(headerCell);
        }
        }
    //    var table=document.getElementById('data');
    //     table.appendChild(row);    
    }
   };
   function batch(batch)
   {
      if(batch==='statistics'){
        console.log('statistics')
      }
   }

  request.open("GET","jsonfile/WP.json", true);
  request.send(null)




 }
 
    global.ajaxutils= ajaxutils;
      })(window);