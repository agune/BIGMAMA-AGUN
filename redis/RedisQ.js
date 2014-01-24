/**
*  This module was implemented redis queue.
*  author agun
*  License MIT
*  use node_redis (https://github.com/mranney/node_redis)
*  see https://github.com/agune/BIGMAMA-AGUN
*  see BIGMAMA PROJECT (https://github.com/PROJECT-BIGMAMA/BIGMAMA-DOC)
*/

var redis = require("redis");

// made redis queue function
RedisQ = function(port, ip, pubUse){

	// connect redis and get client 
	this.client =  redis.createClient(port, ip);
	this.pubUse =  pubUse;
};



RedisQ.prototype.push = function (key, value){
	this.client.lpush(key, value, redis.print);
};


RedisQ.prototype.pop = function (key, callback){
	this.client.rpop(key, callback);
};

// exposure
exports = RedisQ;


