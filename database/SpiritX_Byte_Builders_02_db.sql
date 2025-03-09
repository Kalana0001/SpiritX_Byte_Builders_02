CREATE DATABASE spiritii;
USE spiritii;

CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    university VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    total_runs INT,
    balls_faced INT,
    innings_played INT,
    wickets INT,
    overs_bowled INT,
    runs_conceded INT,
    points FLOAT,
    value INT
);

INSERT INTO players (name, university, category, total_runs, balls_faced, innings_played, wickets, overs_bowled, runs_conceded, points, value)
VALUES
('Chamika Chandimal', 'University of the Visual & Performing Arts', 'Batsman', 530, 588, 10, 0, 3, 21, NULL, NULL),
('Dimuth Dhananjaya', 'University of the Visual & Performing Arts', 'All-Rounder', 250, 208, 10, 8, 40, 240, NULL, NULL),
('Avishka Mendis', 'Eastern University', 'All-Rounder', 210, 175, 7, 7, 35, 210, NULL, NULL),
('Danushka Kumara', 'University of the Visual & Performing Arts', 'Batsman', 780, 866, 15, 0, 5, 35, NULL, NULL),
('Praveen Vandersay', 'Eastern University', 'Batsman', 329, 365, 7, 0, 3, 24, NULL, NULL),
('Niroshan Mathews', 'University of the Visual & Performing Arts', 'Batsman', 275, 305, 5, 0, 2, 18, NULL, NULL),
('Chaturanga Gunathilaka', 'University of Moratuwa', 'Bowler', 132, 264, 11, 29, 88, 528, NULL, NULL),
('Lahiru Rathnayake', 'University of Ruhuna', 'Batsman', 742, 824, 14, 0, 1, 8, NULL, NULL),
('Jeewan Thirimanne', 'University of Jaffna', 'Batsman', 780, 866, 15, 0, 3, 24, NULL, NULL),
('Kalana Samarawickrama', 'Eastern University', 'Batsman', 728, 808, 14, 0, 4, 32, NULL, NULL),
('Lakshan Vandersay', 'University of the Visual & Performing Arts', 'All-Rounder', 405, 337, 15, 15, 75, 450, NULL, NULL),
('Roshen Samarawickrama', 'University of Kelaniya', 'Bowler', 140, 280, 14, 46, 140, 560, NULL, NULL),
('Sammu Sandakan', 'University of Ruhuna', 'Bowler', 120, 240, 10, 26, 80, 320, NULL, NULL),
('Kalana Jayawardene', 'University of Jaffna', 'Bowler', 120, 240, 10, 33, 100, 400, NULL, NULL),
('Binura Samarawickrama', 'University of the Visual & Performing Arts', 'Bowler', 77, 154, 7, 21, 63, 252, NULL, NULL),
('Dasun Thirimanne', 'Eastern University', 'Bowler', 121, 242, 11, 29, 88, 440, NULL, NULL),
('Angelo Samarawickrama', 'University of Kelaniya', 'Batsman', 424, 471, 8, 0, 1, 7, NULL, NULL),
('Nuwan Jayawickrama', 'University of Ruhuna', 'Batsman', 300, 333, 6, 0, 3, 27, NULL, NULL),
('Kusal Dhananjaya', 'South Eastern University', 'Batsman', 480, 533, 10, 0, 2, 16, NULL, NULL),
('Chamika Bandara', 'Eastern University', 'Batsman', 270, 300, 5, 0, 5, 45, NULL, NULL),
('Dilruwan Shanaka', 'University of Peradeniya', 'Batsman', 384, 426, 8, 0, 5, 45, NULL, NULL),
('Danushka Jayawickrama', 'University of Peradeniya', 'All-Rounder', 350, 291, 14, 14, 70, 350, NULL, NULL),
('Charith Shanaka', 'University of Colombo', 'Batsman', 477, 530, 9, 0, 3, 27, NULL, NULL),
('Asela Nissanka', 'University of Sri Jayewardenepura', 'Batsman', 765, 850, 15, 0, 0, 1, NULL, NULL),
('Wanindu Hasaranga', 'University of Colombo', 'Bowler', 120, 240, 10, 30, 90, 540, NULL, NULL),
('Asela Vandersay', 'University of the Visual & Performing Arts', 'Bowler', 154, 308, 14, 37, 112, 448, NULL, NULL),
('Pathum Fernando', 'University of Peradeniya', 'Batsman', 450, 500, 10, 0, 2, 18, NULL, NULL),
('Angelo Kumara', 'Eastern University', 'Batsman', 330, 366, 6, 0, 1, 8, NULL, NULL),
('Danushka Rajapaksa', 'University of Peradeniya', 'Batsman', 441, 490, 9, 0, 5, 35, NULL, NULL),
('Suranga Shanaka', 'South Eastern University', 'Bowler', 55, 110, 5, 13, 40, 160, NULL, NULL),
('Pathum Dhananjaya', 'Eastern University', 'Batsman', 360, 400, 8, 0, 1, 9, NULL, NULL),
('Asela Asalanka', 'South Eastern University', 'Batsman', 550, 611, 11, 0, 0, 1, NULL, NULL),
('Minod Rathnayake', 'University of Kelaniya', 'Bowler', 154, 308, 14, 37, 112, 448, NULL, NULL),
('Binura Lakmal', 'University of Kelaniya', 'Batsman', 540, 600, 12, 0, 2, 16, NULL, NULL),
('Praveen Asalanka', 'Eastern University', 'Batsman', 477, 530, 9, 0, 1, 7, NULL, NULL),
('Angelo Jayawardene', 'University of Jaffna', 'Batsman', 468, 520, 9, 0, 3, 21, NULL, NULL),
('Kamindu Asalanka', 'University of Moratuwa', 'Bowler', 135, 270, 15, 45, 135, 810, NULL, NULL),
('Sadeera Rajapaksa', 'University of Jaffna', 'All-Rounder', 275, 229, 11, 8, 44, 264, NULL, NULL),
('Sandakan Hasaranga', 'University of Kelaniya', 'Batsman', 795, 883, 15, 0, 1, 7, NULL, NULL),
('Bhanuka Rajapaksa', 'University of Moratuwa', 'All-Rounder', 364, 303, 14, 11, 56, 336, NULL, NULL),
('Chamika Rajapaksa', 'University of Ruhuna', 'Batsman', 450, 500, 9, 0, 1, 7, NULL, NULL),
('Kamindu Lakmal', 'University of the Visual & Performing Arts', 'Batsman', 780, 866, 15, 0, 5, 35, NULL, NULL),
('Lakshan Gunathilaka', 'University of Peradeniya', 'Bowler', 84, 168, 7, 21, 63, 315, NULL, NULL),
('Tharindu Thirimanne', 'South Eastern University', 'Batsman', 611, 678, 13, 0, 2, 18, NULL, NULL),
('Dinesh Samarawickrama', 'University of Jaffna', 'Batsman', 400, 444, 8, 0, 3, 27, NULL, NULL),
('Suranga Sandakan', 'University of Moratuwa', 'Batsman', 235, 261, 5, 0, 4, 36, NULL, NULL),
('Sandakan Dickwella', 'University of Jaffna', 'Batsman', 368, 408, 8, 0, 3, 27, NULL, NULL),
('Sammu Rajapaksa', 'University of Ruhuna', 'Batsman', 240, 266, 5, 0, 2, 16, NULL, NULL),
('Suranga Bandara', 'University of Moratuwa', 'Bowler', 154, 308, 14, 46, 140, 840, NULL, NULL),
('Tharindu Embuldeniya', 'University of the Visual & Performing Arts', 'All-Rounder', 264, 220, 12, 12, 60, 360, NULL, NULL);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    budget BIGINT DEFAULT 9000000,
    team_points FLOAT DEFAULT 0
);

CREATE TABLE teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    player_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (player_id) REFERENCES players(id)
);

CREATE TABLE leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    username VARCHAR(255),
    team_points FLOAT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);