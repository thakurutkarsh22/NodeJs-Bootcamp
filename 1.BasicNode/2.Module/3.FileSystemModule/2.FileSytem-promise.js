const fs = require("node:fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("./folder/file.txt", "utf-8");
    console.log(data);

    // data is buffer
    // console.log(data);
    // console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
}
readFile();

// NOTE: ----- promise fs is SLOW.
