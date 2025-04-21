const express = require('express');
const app = express();
let jobId = "";

app.use(express.json());

app.post('/update-jobid', (req, res) => {
  const newJobId = req.body.jobId;
  if (!newJobId) return res.status(400).send("Missing jobId");
  jobId = newJobId;
  res.send("JobId updated.");
});

app.get('/get-jobid', (req, res) => {
  res.json({ jobId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
