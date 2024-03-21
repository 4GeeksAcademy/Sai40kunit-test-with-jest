
test("Euro a Dolar", function(){
    const { fromEuroToDollar } = require('./app.js');
    expect (fromEuroToDollar(3.5)).toBe(3.745);
})
test("Yen a Libra", function(){
    const { fromYenToPound } = require('./app.js');
    expect (fromYenToPound(3.5)).toBe(0.0217);
})
test("Dolar a Yen", function(){
    const { fromDollarToYen } = require('./app.js');
    expect (fromDollarToYen(3.5)).toBe(450.45);
})