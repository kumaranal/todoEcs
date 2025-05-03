const express = require('express');
const router = express.Router();

// In-memory storage for todos
let todos = [
    {
        id: 1,
        title: "Complete project documentation",
        description: "Write comprehensive documentation for the todo service API",
        completed: false,
        createdAt: new Date("2023-10-01")
    },
    {
        id: 2,
        title: "Fix bug in delete endpoint",
        description: "Investigate and resolve issue with todo deletion",
        completed: true,
        createdAt: new Date("2023-10-02")
    },
    {
        id: 3,
        title: "Add input validation",
        description: "Implement proper validation for all API endpoints",
        completed: false,
        createdAt: new Date("2023-10-03")
    }
];

// Get all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Get a single todo
router.get('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
});

// Create a new todo
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newTodo = {
        id: todos.length + 1,
        title,
        description: description || '',
        completed: false,
        createdAt: new Date()
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    const { title, description, completed } = req.body;
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.json(todo);
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Todo not found' });

    todos.splice(index, 1);
    res.status(204).send();
});

module.exports = router; 