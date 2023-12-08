const userTable = `
CREATE TABLE IF NOT EXISTS users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) DEFAULT NULL,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (userId)
);
`;

const questionTable = `
CREATE TABLE IF NOT EXISTS questions (
    questionId INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    question VARCHAR(250),
    questionDescription VARCHAR(200),
    questionCodeBlock VARCHAR(200),
    tags VARCHAR(20),
    PRIMARY KEY (questionId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);
`;

const answerTable = `
CREATE TABLE IF NOT EXISTS answers (
    answerId INT AUTO_INCREMENT NOT NULL,
    userId INT NOT NULL,
    questionId INT NOT NULL,
    answerCodeBlock VARCHAR(200),
    answer VARCHAR(200) NOT NULL,
    PRIMARY KEY (answerId),
    FOREIGN KEY (questionId) REFERENCES questions(questionId),
    FOREIGN KEY (userId) REFERENCES users(userId)
);
`;

module.exports = { userTable, questionTable, answerTable };
