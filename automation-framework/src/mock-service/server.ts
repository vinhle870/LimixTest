import express from 'express';
import { logger } from '../utilities/logger';
const app = express();
app.use(express.json());

// Mock API endpoint
app.post('/v1/profile', (req, res) => {
    res.json({ userId: 123 });
});

// Mock GET API endpoint
app.get('/v1/profile/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);

    // Mock user response based on userId
    const response = {
      userId: userId,
      username: "johndoe",
      dateOfBirth: new Date("1990-05-01").toISOString(),
      gender: "MALE", // "FEMALE", "OTHER", or null
      subscribedMarketing: true,
      hasSetupPreference: false
    };

    res.json(response);
  });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    logger.info(`Mock server is running on http://localhost:${PORT}`);
});