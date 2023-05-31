const fs = require('fs');

// File destination will be created or overwritten by default.
fs.copyFile('./seed-data/db-test-data-snapshot.json', './db.json', (err) => {
  if (err) throw err;
  console.log('db.json has been seeded from snapshot');
});