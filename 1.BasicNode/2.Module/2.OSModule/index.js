const os = require("node:os");

const user = os.userInfo();
console.log(user);

const nameOfOS = os.type();
console.log(nameOfOS);

const noOfCPU = os.cpus();
console.log(noOfCPU);

const totalMemory = os.totalmem();
console.log(totalMemory);
