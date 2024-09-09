import loadtest from 'loadtest';

const url = process.env.TEST_URL || 'http://localhost:3000/data'; // Default URL if not set
const maxRequests = process.env.MAX_REQUESTS || 1000; // Default number of requests
const concurrency = process.env.CONCURRENCY || 10; // Default concurrency

const options = {
  url: url,
  maxRequests: parseInt(maxRequests, 10),
  concurrency: parseInt(concurrency, 10),
};

loadtest.loadTest(options, function(error, result) {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Results:', result);
});
