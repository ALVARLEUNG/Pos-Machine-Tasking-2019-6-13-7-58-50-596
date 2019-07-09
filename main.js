const barcodeListsData = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function isBarcodeExists(barcodeId) {
    var isExists = {};
    for (let i = 0; i<barcodeListsData.length; i++) {
    	if(barcodeListsData[i].id === barcodeId) {
    		isExists = barcodeListsData[i];
    		break;
    	}else{
			isExists = {};
		}
    }
    return isExists;
}

function printReciptByBarcodeList(batcodeList) {
	var resultRecipt = '';
	var errorBarcode = '';//[ERROR]:datebase not found:
	var resultList = [];
		for(let i = 0; i<batcodeList.length; i++) {
		var barcode = isBarcodeExists(batcodeList[i]);
		if( barcode != null) {
			if(resultList.length != 0) {
				for (let i =0; i<resultList.length; i++) {
					if (resultList[i].key.id === barcode.id) {
						resultList[i].value++;
					}
				}
			}else{
				resultList.push({key:barcode, value:1});
			}
		} else {
			errorBarcode += batcodeList[i];
		}
	}
	
	var sum = 0;
	for (let i = 0; i<resultList.length; i++) {
		resultRecipt += resultList[i].key.name +' '+resultList[i].key.price+' '+ resultList[i].value+'\n'
		sum += resultList[i].key.price * resultList[i].value;
	}
	
	return 'Receipts \n'+errorBarcode+'\n'+'------------------------------------------------------------\n'
			+resultRecipt+'\n'+'------------------------------------------------------------\n Price:'+sum;
	
} 

module.exports = {isBarcodeExists, printReciptByBarcodeList};