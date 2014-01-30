/**
*  This is test code of RedisQ 
*  author agun
*  License MIT
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT INFO (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*  measurement time = (connection time) + (read file time) + (push time)
**/

// include RedisQ module
var redisq = require("../RedisQ");
var fs = require('fs');
// created RedisQ instance
redisq = new RedisQ();

// read file 
var data =  fs.readFileSync("./sample.txt", 'utf8');
var threadhold = 50000;

console.log("exec : " +  threadhold);


for(var i=0; i<threadhold; i++)
	redisq.push("benches_test", data);

redisq.quit();

