const fs = require("fs");
const log4js = require("log4js");

log4js.configure({
  appenders: { test: { type: "file", filename: "test.log" } },
  categories: { default: { appenders: ["test"], level: "info" } },
});

const logger = log4js.getLogger();

//fs.writeFileSync("test.log", "utf-8");

fs.readFile("test.log", "utf-8", (err, data) => {
  console.log("err>>", err);
  console.log(data);
});

logger.info("time:", new Date());
