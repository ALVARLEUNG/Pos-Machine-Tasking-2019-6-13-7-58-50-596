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

const isBarcodeExists = (barcodeId) => {
    let existBarcode = null;
    for (let i = 0; i<barcodeListsData.length; i++) {
    	if(barcodeListsData[i].id === barcodeId) {
    		existBarcode = barcodeListsData[i];
    		break;
    	}else{
			existBarcode = null;
		}
    }
    return existBarcode;
}

const generateResultList = (batcodeList, errorBarcode) => {
	let resultList = [];
	for(let i = 0; i<batcodeList.length; i++) {
		let barcode = isBarcodeExists(batcodeList[i]);
		if( barcode != null) {
			if(resultList.length > 0) {
				for (let i =0; i<resultList.length; i++) {
					if (resultList[i].key.id == barcode.id) {
						resultList[i].value++;
						break;
					}else {
						resultList.push({key:barcode, value:1});
						break;
					}
				}
			}else{
				resultList.push({key:barcode, value:1});
			}
		} else {
			errorBarcode += batcodeList[i];
		}
	}
	return resultList;
}

const printReciptByBarcodeList = (batcodeList) =>{
	let resultRecipt = '';
	let errorBarcode = '[ERROR]:datebase not found:';
	let errorLength = errorBarcode.length;
	let resultList = generateResultList(batcodeList, errorBarcode);
	let sum = 0;
	for (let i = 0; i<resultList.length; i++) {
		resultRecipt += `${resultList[i].key.name} ${resultList[i].key.price} ${resultList[i].value}\n`;
		sum += resultList[i].key.price * resultList[i].value;
	}

	if (errorBarcode.length > errorLength) {
		return `Receipts \n------------------------------------------------------------\n${resultRecipt}\n------------------------------------------------------------\n Price:${sum}\n${errorBarcode}`;
	}else{
		return `Receipts \n------------------------------------------------------------\n${resultRecipt}\n------------------------------------------------------------\n Price:${sum}`;
	}
} 


const throwCondition = (words, condition) => {
	return words.filter(condition);
}

const mapObjectKeyToCollection = (collectionA) => {
    // let collectionC = [];
    // for (let i =0; i<collectionA.length; i++) {
    //     collectionC.push(collectionA[i].key);
    // }
	// return collectionC;
	return collectionA.collectValue;
}

const throwCondition = (words, condition) => {
    return words.filterByCondition(condition);
	// return words.filter(condition);
}

Array.prototype.filterByCondition = function (condition) {
    let arr = [];
    for (let i = 0; i<this.length; i++) {
        if(condition(this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
// Array.prototype.collectValue()= function (){
// 	let collectionC = [];
//     for (let i =0; i<this.length; i++) {
//         collectionC.push(this[i].key);
//     }
//     return collectionC;
// }

module.exports = {isBarcodeExists, printReciptByBarcodeList, throwCondition, mapObjectKeyToCollection};