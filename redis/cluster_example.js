/***
*  It is sample code of cluster module 
*  author agun
*
**/


var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

// master
if(cluster.isMaster){
	for(var i=0; i< numCPUs; i++){
		var worker = cluster.fork();
		
		// sending message 
		worker.send("message : " + i);
	}
	var value = 1;
	worker.on("message", function(msg){
		if(msg.cmd && msg.cmd == "notify"){
			console.log("notify " + value);
			value++;
		}
	});

	cluster.on('death', function(worker){
		console.log("death: " + worker.pid + " died");
	});
}else{
//	setInterval(function(){process.send({cmd : "notify"});}, 1000);

	process.on("message", function(msg){
		console.log(msg);
	});
	console.log(" end");
}