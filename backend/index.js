const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const StudentModel = require('./models/Student');

const app = express();
app.use(express.json())

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/placement");


// Define the endpoint to handle form submissions
app.post('/submit', async (req, res) => {
    try {
        const user = await StudentModel.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to get all students
app.get('/api/students/read', async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.status(200).json(students);
    } catch (err) {
        console.error("Error fetching students:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to get a single student by ID
app.get('/api/students/read/:id', async (req, res) => {
    try {
        const student = await StudentModel.findById(req.params.id);
        res.status(200).json(student);
    } catch (err) {
        console.error("Error fetching student:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to update a student
app.put('/api/students/update/:id', async (req, res) => {
    try {
        const student = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(student);
    } catch (err) {
        console.error("Error updating student:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to delete a student
app.delete('/api/students/delete/:id', async (req, res) => {
    try {
        await StudentModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error("Error deleting student:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3001, () => {
    console.log("Server is running");
});
