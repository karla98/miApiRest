const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Employees
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// GET An Employee
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employee Deleted' });
        } else {
            console.log(err);
        }
    });
});

// INSERT An Employee
router.post('/', (req, res) => {
    const data = req.body;
    console.log(req.body);
    mysqlConnection.query('INSERT INTO employee set ?', data, (err, fields) => {
        if (!err) {
            res.json({ status: 'Employeed Saved' });
        } else {
            console.log(err);
        }
    });

});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const newEmployee = req.body;

    mysqlConnection.query('UPDATE employee set ? WHERE id = ?', [newEmployee, id], (err, rows) => {
        if (!err) {
            res.json({ status: 'Employee Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;