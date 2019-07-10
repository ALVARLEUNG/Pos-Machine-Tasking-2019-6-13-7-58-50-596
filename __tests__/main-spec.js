const main = require('../main');

const isBarcodeExists = main.isBarcodeExists;
const printReciptByBarcodeList = main.printReciptByBarcodeList;
const throwCondition = main.throwCondition;


// Test for isBarcodeExists
it ('should return true when the barcode in the database given 0001', () => {
    expect(isBarcodeExists('0001').id).toBe('0001');
});

it ('should return true when the barcode not in the database given 0000', () => {
    expect(isBarcodeExists('0000')).toBe(null);
});

// Test for printReciptByBarcodeList
it ('should return resultRecipt when the barcode in the database given 0001', () => {
    expect(printReciptByBarcodeList(['0001'])).toBe('Receipts \n------------------------------------------------------------\n'
+'Coca Cola 3 1\n'+'\n'+'------------------------------------------------------------\n Price:3');
});

it ('should return resultRecipt when the barcode in the database given 0001, 0001', () => {
    expect(printReciptByBarcodeList(['0001','0001'])).toBe('Receipts \n------------------------------------------------------------\n'
+'Coca Cola 3 2\n'+'\n'+'------------------------------------------------------------\n Price:6');
});

it ('should return resultRecipt when the barcode in the database given 0001, 0001', () => {
    expect(printReciptByBarcodeList(['0001','0002'])).toBe('Receipts \n------------------------------------------------------------\n'
+'Coca Cola 3 1\n'+'Diet Coke 4 1\n\n'+'------------------------------------------------------------\n Price:7');
});

// practice
it ('test1', () => {
    const condition = (word) => {
       return word.length > 1;
    }
    expect(throwCondition(['0001'], condition)).toStrictEqual(['0001']);
});

// it ('test2', () => {
//     expect(mapObjectKeyToCollection([{key:'0001'}], condition)).toStrictEqual(['0001']);
// });
