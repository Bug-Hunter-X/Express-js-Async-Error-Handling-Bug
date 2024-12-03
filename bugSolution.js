const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    const result = await processData(data);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing data');
  }
});

async function processData(data) {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.id < 0) {
        reject(new Error('Invalid data ID'));
      } else {
        // Perform some operations...
        const result = { ...data, processed: true };
        resolve(result);
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});