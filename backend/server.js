const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api', (req, res) => {
    const { input } = req.body;
    if (!input) {
        return res.status(400).json({ message: 'Input is required!' });
    }

    res.json({ message: `You sent: ${input}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});