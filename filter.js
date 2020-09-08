var a = "xyaabbbccccdefww";
var b = "xxxxyyyyabklmopq";
var c=a+b;
var d= [...c];
console.log(c);
console.log(d);
var e=d.filter(value =>
       {
                 return  value ==="x";
       }); 
let f=d.filter(function(v,i,d){
            //  console.log(d.indexOf(v),i);
// Here d.indexOf(v) is giving the index of first most element 
// found in array d and i is index of array "d" So if match 
//   will return value and will store in "f" . 
    // if(d.indexOf(v) ===i){
   return (d.indexOf(v) ===i)
        // return d.indexOf(v);
})
g= f.sort().join('');
// console.log(e);
// console.log(f);
console.log(g);