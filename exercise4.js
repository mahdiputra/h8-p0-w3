
var arr= ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  ;
var arr1= ["0001", "badrun awdada", "kalimantan timur", "21/08/1989", "Membaca"]  ;
function datahandling2(input){
    
    
      input.splice(1,1,  input[1] + " elsharawy");
      input.splice(2,1, "Provinsi "  + input[2]);
      input.splice(3,0, "pria");
      input.splice(5,1, "SMA Internasional Metro");
      
    console.log(input)
    console.log('\n')
    
    
    var foo = input[4];
    
    var bulan = foo.split("/");
    var bulan2 = foo.split("/");
    
    var point = bulan[1];
    
    switch (point) {
      case '01':
       point = 'Januari ';
       break;
      case '02':
       point = 'Februari ';
        break;
      case '03':
       point= 'Maret ';
        break;
      case '04':
      point = 'April ';
       break;
      case '05':
       point = 'Mei ';
        break;
      case '06':
       point = 'juni ';
        break;
      case '07':
       point= 'juli ';
       break;
      case '08':
       point= 'agustus ';
        break;
      case '09':
       point = 'september ';
        break;
      case '10':
       point = 'oktober ';
       break;
      case '11':
       point ='november ';
        break;
      case '12':
       point='desember ';
        break; }
    
    console.log(point)    
    console.log('\n')    
        
    var descend = bulan.sort(
      function(a,b) { 
        return  b - a  }
        );
    console.log(descend) 
    
    console.log('\n') 
    
    console.log(bulan2.join(" - "));
    
    console.log('\n') 
    
    var str =  input[1]
    var potong = str.slice(0,15)
    console.log(potong)
}

datahandling2(arr1);
