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

redisq.push("module_test", "module_value2");

redisq.push("module_test", "module_value3");
// This is function when obtain data by pop.
var getQueueValue = function (err, value){
	console.log("pop queue : " + value);	
}

// pop queue
redisq.pop("module_test", getQueueValue);


/**
* You can push in queue by pub/sub model safely.
* if Publish / Subscribe use on one process,
* You must use below.
*/
 
var pubPushCmd =  function(){
	redisq.pubPush("pub_test", "sending value3");
	redisq.pubPush("pub_test", "sending value4");
	redisq.pubPush("pub_test", "sending value5");
}
redisq.extendSubscribe(pubPushCmd);

var count = 0;
var getPubQueueValue = function (err, value){
	count++;
	console.log("pub pop queue : " + value);	
	if(count == 3){
		redisq.quit();
	}

}


// pub /sub model test
redisq.waitPop("pub_test", getPubQueueValue);
/**
You can push in queue by pub/sub model (not safely)
one second delay because synchronize subscribe.

redisq.pubPush("pub_test", "sending value3");
redisq.pubPush("pub_test", "sending value4");
redisq.pubPush("pub_test", "sending value5");
*/

// check asynchronous
console.log("end line");

