function groupAnimals(animals) {
 var tampung = []
 for(var x=0; x < animals.length ; x++)
 {
   if(tampung.indexOf(animals[x][0])=== -1) tampung.push(animals[x][0]);
 }
 var tampungLuar = [];
 for(var i=0; i<tampung.length;i++){
   tampungLuar.push([tampung[i]])
 }
 
 

for (var j=0;j<tampungLuar.length ; j++)
  {
    for(var k = 0 ; k <animals.length; k++)
    {
      if(animals[k][0] === tampungLuar[j][0]){
        tampungLuar[j].push(animals[k])
      }
    }
  }
  
  for (var l = 0; l <tampungLuar.length ; l++)
  {
    tampungLuar[l].shift()
  }
  
  return tampungLuar
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));


