const main = require('../main');

const isBarcodeExists = main.isBarcodeExists;
const printReciptByBarcodeList = main.printReciptByBarcodeList;


// Test for isBarcodeExists
it ('should return true when the barcode in the database given 0001', () => {
    expect(isBarcodeExists('0001').id).toBe('0001');
});

it ('should return true when the barcode not in the database given 0000', () => {
    expect(isBarcodeExists('0000')).toBe(null);
});

it ('should return resultRecipt when the barcode in the database given 0001', () => {
    expect(printReciptByBarcodeList(['0001'])).toBe('Receipts \n------------------------------------------------------------\n'
+'Coca Cola 3 1\n'+'\n'+'------------------------------------------------------------\n Price:3');
});

