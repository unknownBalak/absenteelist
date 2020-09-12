function  comapreanddisplay(csvfile,name){
  var div=document.createElement("div");
  var div1=document.createElement("div");
  div.innerHTML="<h3>Name</h3>"
  div1.innerHTML="<h3>SRN</h3>"
  var table=document.getElementById('data');
  var bool=true;
        for(var i=0;i<name.length;i++){
                    var dbname= name[i].FullName;
                    var srn= name[i].SRN;
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
          
          var p1=document.createElement('p');
          var p2=document.createElement('p');
          var hr=document.createElement('hr');
          var hr1=document.createElement('hr');
          p1.innerHTML=dbname;
           p2.innerHTML=srn;
          div.appendChild(p1);
          div.appendChild(hr);
          div1.appendChild(p2);
          div1.appendChild(hr1);
          }
          
        }
        table.appendChild(div);
        table.appendChild(div1);
}