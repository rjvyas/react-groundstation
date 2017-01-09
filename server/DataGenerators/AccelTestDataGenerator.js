const BaseTestDataGenerator = require('./BaseTestDataGenerator.js');
const bin = require('../udp/binary.js');
	
module.exports = function(){
	var interval = 30;
	var type = 0x1003;
	var payload = [];
	//Accel 1
	payload.push.apply(payload,bin.uint32ToBytes(5,true)); //Fault Flags
	payload.push.apply(payload,bin.int16ToBytes(-100,true)); //Raw X Axis data
	payload.push.apply(payload,bin.int16ToBytes(-666,true)); //Raw Y Axis data
	payload.push.apply(payload,bin.int16ToBytes(1024,true)); //Raw Z Axis data
	payload.push.apply(payload,bin.float32ToBytes(20.123,true)); //Raw X Axis data
	payload.push.apply(payload,bin.float32ToBytes(20.123,true)); //Raw Y Axis data
	payload.push.apply(payload,bin.float32ToBytes(20.123,true)); //Raw Z Axis data
	payload.push.apply(payload,bin.float32ToBytes(60.0,true)); //Pitch Angle
	payload.push.apply(payload,bin.float32ToBytes(60.0,true)); //Roll Angle

	//Accel 2
	payload.push.apply(payload,bin.uint32ToBytes(50,true)); //Fault Flags
	payload.push.apply(payload,bin.int16ToBytes(-2002,true)); //Raw X Axis data
	payload.push.apply(payload,bin.int16ToBytes(-5005,true)); //Raw Y Axis data
	payload.push.apply(payload,bin.int16ToBytes(4096,true)); //Raw Z Axis data
	payload.push.apply(payload,bin.float32ToBytes(200.123,true)); //Raw X Axis data
	payload.push.apply(payload,bin.float32ToBytes(200.345,true)); //Raw Y Axis data
	payload.push.apply(payload,bin.float32ToBytes(200.678,true)); //Raw Z Axis data
	payload.push.apply(payload,bin.float32ToBytes(500.0,true)); //Pitch Angle
	payload.push.apply(payload,bin.float32ToBytes(600.0,true)); //Roll Angle


	return new BaseTestDataGenerator(type, payload, interval);
};