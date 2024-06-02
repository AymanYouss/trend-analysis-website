const express = require('express');
const cors = require('cors');
const generateDescription = require('./api/generateDescription');
const keywordRoutes = require('./routes/keywordRoutes');

const app = express();
// app.use(cors());
app.use(cors({
    origin: 'https://trend-analysis-website.vercel.app', // Allow your frontend domain
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type'] // Allowed headers
  }));
app.use(express.json());

app.use('/api', keywordRoutes); // Use the router for /api endpoints
app.post('/api/generate-description', generateDescription);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
