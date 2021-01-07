const fishFarm = [
    {
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
];
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

  //Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?cd  const locationSeason = fishFarm.filter(x => {
    return x.saleLocations.includes('BE')  &&  x.season==='Winter' ? x : null
  });
  let beAndWinter=[];
  for(let indexOfLocationSeason =0; indexOfLocationSeason<locationSeason.length; indexOfLocationSeason++){
   beAndWinter.push(locationSeason[indexOfLocationSeason]["fishType"]);
  } 
  console.log("Sadece Bern'de ve kis sezonu satilan baliklar: \n" + "*** " +beAndWinter + " ***");

  //Son kullanma tarihlerine gore baliklari siralayiniz.
 let dateNew= fishFarm.sort((a,b) =>{
    return new Date(a.entryDate) - new Date(b.entryDate);
  });
  let lastDateOfFish=[];
  for (let indexOfDateNew=0;indexOfDateNew<dateNew.length;indexOfDateNew++){
      lastDateOfFish.push(dateNew[indexOfDateNew]["fishType"]);
  }
 console.log("Son kullanma tarihlerine gore baliklar: \n" +"*** " +lastDateOfFish+ " ***");

  //Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
  const memberOfAb =fishFarm.filter( x => (x.originCountry==="Spain"|| x.originCountry==="GREECE"||
                             x.originCountry==="Italy"||x.originCountry==="France"|| x.originCountry==="Poland"
                             || x.originCountry==="Norway") && x.price<10 ? x:null);

  let bothMemberOfEuroAndPriceLowerThan10=[];
  for (let indexOfDateNew=0;indexOfDateNew<memberOfAb.length;indexOfDateNew++){
  bothMemberOfEuroAndPriceLowerThan10.push(memberOfAb[indexOfDateNew]["fishType"]);
   }
  console.log("Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklarin alfabetik siralanisi: \n"
  + "*** " +bothMemberOfEuroAndPriceLowerThan10.sort()+ " ***");   

 // Toplam balik stoku ne kadardir?
 const stock= x=>x;
 const plusStock = (a, b) =>    a+b ;
 const totalStockOfFish = fishFarm.map(y=>y.stockVolumeInKg).reduce((z,a)=>z+a);
 console.log("Toplam balik stoku: \n" +"*** " +totalStockOfFish+ " ***");

 //En pahali olan balik hangisidir? 
 const mostExpensiveFish = fishFarm.reduce((x, y) => x > y.price? x: y.price );
 console.log("En pahali olan balik fiyati: \n"+ "*** "+mostExpensiveFish+ " ***");

 // En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?            
 const longDurationInDays=fishFarm.filter(x => x.durationInDays>=30 );
 let originOfCountryWithLongDurationInDays=[];
       for (let indexOfLongDuration=0;indexOfLongDuration<longDurationInDays.length;indexOfLongDuration++){
         originOfCountryWithLongDurationInDays.push(longDurationInDays[indexOfLongDuration]["originCountry"]);
          }
 console.log("En uzun sureli durabilen baliklarin geldigi ulkeler: \n"
 + "*** " +originOfCountryWithLongDurationInDays+ " ***");  


 const plusPrice = (a, b) =>    a+b;
 let winterOrAutumnRegion= fishFarm.filter( x=> (x.season==="Winter"||x.season==="Autumn")) ;
 const bothWinterAndAutumnForRegion =fishFarm.filter( x =>{ return (x.season==="Winter"||x.season==="Autumn")})
 .map(y=>{ return y.price}).reduce((z,a)=>plusPrice(z,a));
 console.log("Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati: \n"
  + "*** " +bothWinterAndAutumnForRegion.toFixed(2)/winterOrAutumnRegion.length+ " ***");   
