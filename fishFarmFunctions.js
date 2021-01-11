function fishList(pList){
    return pList=>pList.fishType
}

function fishStockOverGivenValue(pValue){
    return (fish)=>fish.stockVolumeInKg > pValue
}

function getFishListPriceBetween(value1,value2){
    return (fish)=> fish.price>value1 && fish.price<value2
}




function findBySeasonAndCanton(pArray,pCanton,pSeason){
     return  pArray.filter(item => (item.saleLocations.indexOf(pCanton) !== -1) && item.season == pSeason)
}

function findBySeasonAndCanton(pCanton){
     return (fish)=>fish.saleLocations.includes(pCanton);
}