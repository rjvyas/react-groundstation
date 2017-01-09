const BaseTestDataGenerator = require('./BaseTestDataGenerator.js');
const bin = require('../udp/binary.js');

module.exports = function(){
	var interval = 30;
	var type = 0x1003;
	var payload = [];
	// Brakes cal data
	payload.push.apply(payload,bin.uint8ToBytes(5,true));
	payload.push.apply(payload,bin.float32ToBytes(90.1,true));
	payload.push.apply(payload,bin.float32ToBytes(2.1,true));
	payload.push.apply(payload,bin.uint8ToBytes(5,true));
	payload.push.apply(payload,bin.uint8ToBytes(52,true));
	payload.push.apply(payload,bin.uint8ToBytes(51,true));
	payload.push.apply(payload,bin.uint8ToBytes(25,true));
	payload.push.apply(payload,bin.float32ToBytes(12.34,true));
	payload.push.apply(payload,bin.float32ToBytes(120.1,true));
	payload.push.apply(payload,bin.float32ToBytes(3.2,true));
	payload.push.apply(payload,bin.float32ToBytes(2.4,true));
	payload.push.apply(payload,bin.int16ToBytes(1024,true));
	payload.push.apply(payload,bin.int16ToBytes(23,true));
	payload.push.apply(payload,bin.int16ToBytes(124,true));
	payload.push.apply(payload,bin.int16ToBytes(7024,true));

	return new BaseTestDataGenerator(type, payload, interval);
};