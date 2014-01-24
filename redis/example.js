/**
*  This is RedisQ example
*  author agun
*  License MIT
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT INFO (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
**/

// include RedisQ module
var redisq = require("./RedisQ");

// created RedisQ instance
redisq = new RedisQ();

// push queue
redisq.push("module_test", "module_value");

// This is function when obtain data by pop.
var getQueueValue = function (err, value){
	console.log(value);	
}

// pop queue
redisq.pop("module_test", getQueueValue);

// check asynchronous
console.log("end line");
