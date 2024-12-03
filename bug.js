const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously
  processData(data, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error processing data');
    } else {
      res.send(result);
    }
  });
});

function processData(data, callback) {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (data.id < 0) {
      callback(new Error('Invalid data ID'), null);
    } else {
      // Perform some operations...
      const result = { ...data, processed: true };
      callback(null, result);
    }
  }, 1000);
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});