arr1 = [
  ["LALITH KISHORE G", "Left", "8/13/2020, 1:44:19 PM"],
  ["HARIKA  G", "Left", "8/13/2020, 1:43:49 PM"],
  ["SUMAIYA PARVEEN  MATHAIR BASHA", "Left", "8/13/2020, 1:40:16 PM"],
  ["KIRANKUMAR", "Left", "8/13/2020, 1:43:15 PM"],
  ["KISHORE   DS", "Left", "8/13/2020, 1:47:22 PM"]

]
arr = [
  ["LALITH KISHORE G", "Joined before", "8/13/2020, 1:39:26 PM"],
  ["LALITH KISHORE G", "Left", "8/13/2020, 1:44:19 PM"],
  ["LALITH KISHORE G", "Joined", "8/13/2020, 1:44:56 PM"],
  ["HARIKA  G", "Joined before", "8/13/2020, 1:39:26 PM"],
  ["HARIKA  G", "Left", "8/13/2020, 1:43:49 PM"],
  ["HARIKA  G", "Joined", "8/13/2020, 1:48:20 PM"],
 
  ["SUMAIYA PARVEEN  MATHAIR BASHA", "Joined", "8/13/2020, 1:39:40 PM"],
  ["SUMAIYA PARVEEN  MATHAIR BASHA", "Left", "8/13/2020, 1:40:16 PM"],
  ["SUMAIYA PARVEEN  MATHAIR BASHA", "Joined", "8/13/2020, 1:40:19 PM"],
  ["KIRANKUMAR", "Joined", "8/13/2020, 1:40:23 PM"],
  ["KIRANKUMAR", "Left", "8/13/2020, 1:43:15 PM"],
  ["KIRANKUMAR", "Joined", "8/13/2020, 1:43:24 PM"],
  ["KIRANKUMAR", "Left", "8/13/2020, 1:44:05 PM"],
  ["KIRANKUMAR", "Joined", "8/13/2020, 1:44:12 PM"],
  ["KISHORE   DS", "Joined", "8/13/2020, 1:44:44 PM"],
  ["KISHORE   DS", "Left", "8/13/2020, 1:47:22 PM"],
  ["KISHORE   DS", "Joined", "8/13/2020, 1:49:25 PM"], 
  ["SHIVANI  SINGH", "Joined before", "8/13/2020, 1:39:26 PM"],
  ["SHIVANI  SINGH", "Left", "8/13/2020, 1:42:26 PM"],
  ["SHIVANI  SINGH", "Joined", "8/13/2020, 1:49:26 PM"],
  ["SHIVANI  SINGH", "Left", "8/13/2020, 1:50:26 PM"],
  ["SHIVANI  SINGH", "Joined", "8/13/2020, 1:54:26 PM"]
  
]
for (var k = 0; k < 5; k++) {
  for (var i = 0; i < arr.length - 1; i++) {
    if(i<=arr.length-1){
 
      // console.log(arr.length,i);
      var name1 = arr[i][0];
      // var j=i+1;
      var name2 = arr[i+1][0];
  
      // console.log(arr[i][1]);
      // console.log(arr[i][2]);
      // date1 = new Date(arr[i][2]);
      // date2 = new Date(arr[i + 1][2]);
      // console.log(arr[i + 1][2]);
      // console.log(diff = date2 - date1);
      if (name1 === name2 && arr[i][1] == "Left" && diff < 360000) {
        // console.log(arr[i + 1][0]);
        arr.splice(i, 2);
      }
      else if (name1 === name2 && arr[i][1] == "Left" && diff > 360000) {
        //  Find the number of rows belongs to that name and delete all data belongs to that name
        for (var n = 0; n < arr1.length; n++) {
  
          for (var m = 0; m < arr.length ; m++) {
            if (name1 == arr[m][0]) {
              arr.splice(m, 1);
            }
          }
        }
  
      }
    }
   


  }

}
console.log(arr);