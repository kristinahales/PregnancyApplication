INSERT INTO users(firstname, lastname, username, password, dateOfLastPeriod, dueDate, numOfWeeks, trimester)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning *;
