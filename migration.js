const { execSync } = require('child_process');
const path = require('path');

const fileName = process.argv[2];
console.log({ fileName });
if (!fileName) {
  console.error('Please provide a file name for the migration.');
  process.exit(1);
}

try {
  execSync(`npx typeorm migration:create src/db/migrations/${fileName}`, {
    stdio: 'inherit',
  });
  console.log(`Migration file "${fileName}" created successfully.`);
} catch (error) {
  console.error('An error occurred while creating the migration file:', error);
  process.exit(1);
}
