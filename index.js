'use strict';

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/green_moon_savings', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema for savings group
const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

const Group = mongoose.model('Group', groupSchema);

// API endpoint to create a new savings group
app.post('/groups', async (req, res) => {
    try {
        const group = new Group(req.body);
        await group.save();
        res.status(201).send(group);
    } catch (error) {
        res.status(400).send(error);
    }
});

// API endpoint to get all savings groups
app.get('/groups', async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});