function  comapreanddisplay(csvfile,name){
  var ul=document.createElement("ul");
  var table=document.getElementById('data');
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
          
          var list=document.createElement('li');
          list.innerHTML=dbname;
            ul.appendChild(list);
          }
          
        }
        table.appendChild(ul);
}