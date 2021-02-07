import { exec } from "child_process";
import { stat } from "fs";
import { copySync } from "fs-extra";
import ora from "ora";

const buildingSpinner = ora("Building admin UI");

export default () => {
  let clientPath = `${__dirname}/../../src/client/build`,
    clientPathFinal = `${__dirname}/../../dist/client`;

  stat(clientPath, (err, stats) => {
    buildingSpinner.start();
    if (err) throw new Error("An error occurred");

    exec(`cd ${clientPath} && npm run build`, (err, out, stderr) => {
      copySync(clientPath, clientPathFinal);
      // , () => {
      buildingSpinner.stop();
      buildingSpinner.succeed("Finished");
      // }
    });
  });
};
