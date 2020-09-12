document.addEventListener("DOMContentLoaded",function(event){
    let btn_upload =
        document.getElementById('btn-upload-csv').
            addEventListener('click', () => {
      if(!document.getElementById('upload-csv').files[0]){
                      alert("Please Select File");
      }
      
      else {
                Papa.parse(document.getElementById('upload-csv').files[0], {
                    // download: false,
                    header: false,
                    complete: function (results) {
    
                        console.log(results);
                        displayData(results.data);
                    }
                });
            }
        //   console.log(data)
           
          function displayData(results) {
     console.log(results.length);
    //    ***************Getting data who left meeting **********
                    var left_people = [];
                   results.map((data) => {
                        if (data[1] == "Left") {
                            left_people.push(data[0]);
                        }
                    });
                    // console.log(left_people)
    //  ************** Deleting the redundant data ******************
                    // console.log(left_people)
                    // want to use function use below
            // left_people=left_people.filter(function (value,index,left_people){ return left_people.indexOf(value)==index });
            //    Don't want to use function use below 
            left_people=left_people.filter((value,index,left_people) =>  { return left_people.indexOf(value)==index });
            // console.log(left_people);
       
          
            // calling a function where you will check all data of left people
            checkJoiningTime(results, left_people);
       
        }
                var dataOfLeftPeople = [];
                // // *********************** fetching all the rows whose USERACTION is "left"   ************************ 
                function checkJoiningTime(csvfile, left_people) {
                    left_people.forEach(checkRedundant => {
    // Here "checkRedundant" indicate the each value of left_people array
                         csvfile.map(data => {
                            if (data[0] == checkRedundant) {
                                dataOfLeftPeople.push(data);
                            }
                        });
                    });
                    // console.log( dataOfLeftPeople);
    
                    leftJointime(left_people, dataOfLeftPeople, csvfile);
                  }
    
                // //  *********************program to check activity a User did **************
                var activity = [], count1 = 0;
                function leftJointime(left_people, dataOfLeftPeople, csvfile) 
                {
                    left_people.forEach((leftname,i)  =>
                           {             
                        // console.log(leftname);
    
                        for (var j = i; j < dataOfLeftPeople.length; j++) {
    
                            var nextname = dataOfLeftPeople[j][0];
                            if (leftname == nextname) {
                                count1 += 1;
                            }
                        }
                        activity.push(count1);
                        count1 = 0;
                            });
                
                    //  Recording the data of activity[] is good because i will be doing 
                     //  operation on selected rows only not all. 
                   console.log(activity);
                   console.log(csvfile.length);
                
               
      
                
    
    
    
    
         // ****************** Below function will delete all reduandant data
        //  and check whether timestamp is more than 6 minute or not
            //      a) if more than 6 minute then delete all record
            //            particular person
        //               else check keep one row and delete all
         
             
        
    
                left_people.forEach((name,j) =>
                       {
                             if (activity[j] % 2 === 0) {
                              for (var i = 0; i < csvfile.length; i++) {
    
                                    if (csvfile[i][0] == left_people[j]) {
        
                                          csvfile.splice(i, activity[j]);
        
                                     }
                                 } 
                        }
            //   }  
                     } )
    
                         for (var k = 0; k < left_people.length; k++) {
                             for (var i = 0; i < csvfile.length - 1; i++) {
                                     var name1 = csvfile[i][0];
                                     var name2 = csvfile[i + 1][0];
                                     date1 = new Date(csvfile[i][2]);
                                     date2 = new Date(csvfile[i + 1][2]);
                                     diff = date2 - date1;
                                     if (name1 === name2 && csvfile[i][1] == "Left" && diff < 360000) {
                                         // console.log(arr[i + 1][0]);
                                         csvfile.splice(i, 2);
                                     }
                                     else if (name1 === name2 && csvfile[i][1] == "Left" && diff > 360000) {
                                         //  Find the number of rows belongs to that name and delete all data belongs to that name
                                         for (var n = 0; n < left_people.length; n++) {
                                            for (var m = 0; m < csvfile.length; m++) {
                                                 if (name1 == csvfile[m][0]) {
                                                     csvfile.splice(m, 1);
                                                 } 
                                         }
                                    }
                            }
                        }
                    }
                 
   comparedata(csvfile);
        } 
    
      
    
   
   
   

   
            });

});