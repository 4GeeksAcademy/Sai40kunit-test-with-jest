
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum };


const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar };


const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar * 128.7;
   
    return valueInYen;
}

module.exports = { sum, fromDollarToYen };


const fromYenToPound = function(valueInYen){
    
    let valueInPound = valueInYen * 0.0062;
   
    return valueInPound;
}

module.exports = { sum, fromYenToPound };