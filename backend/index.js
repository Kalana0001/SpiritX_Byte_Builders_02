const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spiritii'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

// API to get all players
app.get('/players', (req, res) => {
    const sql = 'SELECT * FROM players';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// API to add a player to the user's team
app.post('/api/players', (req, res) => {
    const { name, university, category, total_runs, balls_faced, innings_played, wickets, overs_bowled, runs_conceded } = req.body;
    const sql = 'INSERT INTO players (name, university, category, total_runs, balls_faced, innings_played, wickets, overs_bowled, runs_conceded) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, university, category, total_runs, balls_faced, innings_played, wickets, overs_bowled, runs_conceded], (err, result) => {
        if (err) throw err;
        res.send('Player added...');
    });
});

// API to get user's team
app.get('/team/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT players.* FROM teams JOIN players ON teams.player_id = players.id WHERE teams.user_id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// API to calculate team points
app.get('/team-points/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = `
        SELECT SUM(
            (batting_strike_rate / 5 + batting_average * 0.8 / 5) +
            (500 / bowling_strike_rate + 140 / economy_rate)
        ) AS total_points
        FROM teams
        JOIN players ON teams.player_id = players.id
        WHERE teams.user_id = ?
    `;
    db.query(sql, [userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Team Management Routes
app.get('/api/teams/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT players.* FROM teams JOIN players ON teams.player_id = players.id WHERE teams.user_id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/api/teams/:userId', (req, res) => {
    const userId = req.params.userId;
    const { playerId } = req.body;
    const sql = 'INSERT INTO teams (user_id, player_id) VALUES (?, ?)';
    db.query(sql, [userId, playerId], (err, result) => {
        if (err) throw err;
        res.send('Player added to team...');
    });
});

app.delete('/api/teams/:userId/:playerId', (req, res) => {
    const userId = req.params.userId;
    const playerId = req.params.playerId;
    const sql = 'DELETE FROM teams WHERE user_id = ? AND player_id = ?';
    db.query(sql, [userId, playerId], (err, result) => {
        if (err) throw err;
        res.send('Player removed from team...');
    });
});

// Leaderboard Route
app.get('/api/leaderboard', (req, res) => {
    const sql = 'SELECT username, team_points FROM users ORDER BY team_points DESC';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.listen(5000, () => {
    console.log('Server running on port 5000');
});