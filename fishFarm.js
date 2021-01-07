
            // Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
  const stockVolume = fishFarm.filter(x => {
    return x.stockVolumeInKg> 500 ;
  }).map(x=>x.fishType);
  
  console.log("Stok miktari 500 kg uzerinde olan baliklari: \n" + "*** " +stockVolume + " ***");

          // Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
  const priceValue = fishFarm.filter(x => { 
    return x.price>9  &&  x.price<12 ;
  }).map(x=>x.fishType); 
  console.log("Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar: \n" +"*** " +priceValue + " ***");

          //Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?cd  
  const locationSeason = fishFarm.filter(x => {
    return x.saleLocations.includes('BE')  &&  x.season==='Winter'}).map(x=>x.fishType);  
  console.log("Sadece Bern'de ve kis sezonu satilan baliklar: \n" + "*** " +locationSeason + " ***");

         //Son kullanma tarihlerine gore baliklari siralayiniz.
 let dateNew= fishFarm.sort((a,b) =>{
    return new Date(a.entryDate) - new Date(b.entryDate); }).map(x=>x.fishType); 
   console.log("Son kullanma tarihlerine gore baliklar: \n" +"*** " +dateNew+ " ***");

        //Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
  const memberOfAb =fishFarm.filter( x => (x.originCountry==="Spain"|| x.originCountry==="GREECE"||
                             x.originCountry==="Italy"||x.originCountry==="France"|| x.originCountry==="Poland"
                             || x.originCountry==="Norway") && x.price<10 ).map(x=>x.fishType); 
  console.log("Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklarin alfabetik siralanisi: \n"
                + "*** " +memberOfAb.sort()+ " ***");   

         // Toplam balik stoku ne kadardir?
 const totalStockOfFish = fishFarm.map(y=>y.stockVolumeInKg).reduce((z,a)=>z+a);
 console.log("Toplam balik stoku: \n" +"*** " +totalStockOfFish+ " ***");

         //En pahali olan balik hangisidir? 
 const mostExpensiveFish = fishFarm.reduce((x, y) => x > y.price? x: y.price ); 
 console.log("En pahali olan balik fiyati: \n"+ "*** "+mostExpensiveFish+ " ***");

         // En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?            
 const longDurationInDays=fishFarm.filter(x => x.durationInDays>=30 ).map(x=>x.originCountry);
 
 console.log("En uzun sureli durabilen baliklarin geldigi ulkeler: \n"
              + "*** " +longDurationInDays+ " ***"); 

         //Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir? 
 let winterOrAutumnRegion= fishFarm.filter( x=> (x.season==="Winter"||x.season==="Autumn")) ;
  const bothWinterAndAutumnForRegion =fishFarm.filter( x =>{ return (x.season==="Winter"||x.season==="Autumn")})
                                              .map(y=>{ return y.price}).reduce((z,a)=> z+a);
 console.log("Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati: \n"
              + "*** " +bothWinterAndAutumnForRegion.toFixed(2)/winterOrAutumnRegion.length+ " ***");   

              // Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?              
 const stockOfFishForTicino= fishFarm.filter(x => {
    return x.saleLocations.includes('TI')}).map(y=>{ return y.stockVolumeInKg}).reduce((z,a)=> z+a);
    console.log("Ticino Kantonu icin stoktaki toplam balik mevcudu: \n"
              + "*** " +stockOfFishForTicino+" kg"+ " ***");   

              //Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
 const summerAndOutOfEurope =fishFarm.filter( x => (x.originCountry==="Vietnam"|| x.originCountry==="Egypt"||
                                     x.originCountry==="United Kingdom"||x.originCountry==="Japan")
                                     && x.season==="Summer"&& x.saleLocations.includes('ZH') );
 const averageWeightGrams=fishFarm.filter( x => (x.originCountry==="Vietnam"|| x.originCountry==="Egypt"||
                                  x.originCountry==="United Kingdom"||x.originCountry==="Japan")
                                  && x.season==="Summer"&& x.saleLocations.includes('ZH') ).map(y=>
                                  { return y.itemWeightInGrams}).reduce((z,a)=> z+a);

  console.log("Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji: \n"
              + "*** " +averageWeightGrams.toFixed(2)/summerAndOutOfEurope.length+" kg"+ " ***");  