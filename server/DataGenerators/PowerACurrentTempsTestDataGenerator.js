const BaseTestDataGenerator = require('./BaseTestDataGenerator.js');
const bin = require('../udp/binary.js');
	
module.exports = function(){
	var interval = 30;
	var type = 0x3201;
	var payload = [];
	// Power node A
	payload.push.apply(payload,bin.float16ToBytes(18,true)); 	//Number of temps
	payload.push.apply(payload,bin.float16ToBytes(0,true)); 	//Spare
	payload.push.apply(payload,bin.float32ToBytes(23.01,true)); //1 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.02,true)); //2 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.03,true)); //3 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.04,true)); //4 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.05,true)); //5 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.06,true)); //6 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.07,true)); //7 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.08,true)); //8 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.09,true)); //9 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.10,true)); //10 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.11,true)); //11 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.12,true)); //12 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.13,true)); //13 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.14,true)); //14 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.15,true)); //15 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.16,true)); //16 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.17,true)); //17 Temp
	payload.push.apply(payload,bin.float32ToBytes(23.18,true)); //18 Temp

	return new BaseTestDataGenerator(type, payload, interval);
};