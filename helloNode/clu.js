const os = require("os");
const cluster = require("cluster");

var workerNum = os.cpus().length;
let requestCount = 1;
let rate = 1;
const results = [];

if (cluster.isMaster) {
  console.log(`総リクエスト数 : ${workerNum} req`);
  console.log("主进程", process.pid, "正在运行");

  for (let i = 0; i < workerNum; i++) {
    const worker = cluster.fork();
    console.log("开启子进程：", worker.id);

    worker.on("message", function (msg) {
      results.push(msg);

      if (results.length == workerNum) {
        console.log(results);
        process.exit(0);
      }
    });

    worker.send({
      distributedRequestCount:
        requestCount % workerNum > i
          ? parseInt(requestCount / workerNum) + 1
          : parseInt(requestCount / workerNum),
      rate: Math.ceil(rate / workerNum),
    });
  }
} else {
  process.on("message", function (msg) {
    console.log("正在运行子进程:", process.pid, msg);
  });

  process.send({
    requestStartTime: Date.now(),
  });
}
