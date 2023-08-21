const num =[2,8,15,18,23,40,55];
const above15 = num.filter(myFunction);
document.getElementById("para").innerHTML=above15;
function myFunction(value,index,array){
return value >18;
}