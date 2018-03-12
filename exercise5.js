function palindrome(kata){
  var kata1 = ''
  var kata2 = ''
  
  for(var i = 0 ; i < kata.length ; i++)
  {
    kata1 = kata1 + kata[i]
  }
   for(var j = kata.length -1   ; j >= 0; j--)
   {
     kata2 =  kata2 + kata[j]
   }
  if(kata2 == kata1)
  {
    return true;
  }else{
    return false;
  }

} 

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister'));




