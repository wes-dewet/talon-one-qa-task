const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run(
  {
    collection: require('./regression-tests.postman_collection.json'),
    environment: require('./local.postman_environment.json'),
    reporters: ['cli'],
    reporter: {},
  },
  (error, summary) => {
    const err = error || summary.error;
    if (err) {
      console.error('Regression Tests collection run failed with error');
      throw err;
    }
    console.log('Collection run completed!');
    const numberOfFailures = summary.run.failures.length;
    if (numberOfFailures > 0) {
      console.log(`${JSON.stringify(numberOfFailures)} failures found. Setting exit code to '1'.`);
      process.exitCode = 1;
    }
  },
);