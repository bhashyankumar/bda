
const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Priya' }
];

// GET
app.get('/students', (req, res) => {
    res.send(students);
});

// POST
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send('Student added');
});

// PUT
app.put('/students/:id', (req, res) => {
    let id = req.params.id;

    let s = students.find(a => a.id == id);

    if (s) {
        s.name = req.body.name;
        res.send('Student updated');
    } else {
        res.send('Student not found');
    }
});

// DELETE
app.delete('/students/:id', (req, res) => {
    let id = req.params.id;

    students = students.filter(a => a.id != id);

    res.send('Student deleted');
});

// SERVER
app.listen(3000, () => {
    console.log('Server running');
});
