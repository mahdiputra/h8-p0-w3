function loop()

{
  
    var input = [
                    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
                ]


           for (var i = 0; i < 4;i++)
        {
            console.log("no : " + input[i][0]);
            console.log("nama : " + input[i][1]);
            console.log("kota : "  + input[i][2]);
            console.log("ttl : "  + input[i][3]);
            console.log("hobi : " + input[i][4]);
            console.log("\n");
        }
}


loop()
