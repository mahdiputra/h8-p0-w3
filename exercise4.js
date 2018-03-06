
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
       console.log(' Januari ');
       break;
      case '02':
        console.log('Februari ');
        break;
      case '03':
        console.log('Maret ');
        break;
      case '04':
       console.log('April ');
       break;
      case '05':
        console.log('Mei ');
        break;
      case '06':
        console.log('juni ');
        break;
      case '07':
       console.log('juli ');
       break;
      case '08':
        console.log('agustus ');
        break;
      case '09':
        console.log('september ');
        break;
      case '10':
       console.log('oktober ');
       break;
      case '11':
        console.log('november ');
        break;
      case '12':
        console.log('desember ');
        break; }
        
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
