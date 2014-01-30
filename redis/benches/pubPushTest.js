/**
*  This is test code of RedisQ 
*  author agun
*  License MIT
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT INFO (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*  measurement time = (connection time) + (read file time) + (pubPush time)
**/

// include RedisQ module
var redisq = require("../RedisQ");
var fs = require('fs');
// created RedisQ instance
redisq = new RedisQ();

// read file 
var data =  fs.readFileSync("./sample.txt", 'utf8');
var threadhold = 10000;

console.log("exec : " +  threadhold);


var count =0;
var callBack = function(){
	count++;
	if(count == threadhold)
		redisq.quit();		
}



for(var i=0; i<threadhold; i++)
	redisq.pubPush("benches_test2", data, callBack);




