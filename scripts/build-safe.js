const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');

try {
  fs.rmSync(buildDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
} catch (error) {
  console.warn(`Unable to fully clear build directory at ${buildDir}.`);
  console.warn(error);
}

require('react-scripts/scripts/build');
