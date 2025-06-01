import { Router } from 'express';

const router = Router();

// Example route for getting mock data
router.get('/api/example', (req, res) => {
    res.json({ message: 'This is a mock response' });
});

// Add more routes as needed

export default router;