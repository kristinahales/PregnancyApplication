CREATE TABLE Users(
--SERIAL = Auto Increment in Postgres
UserId SERIAL PRIMARY KEY,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
Username VARCHAR(20) NOT NULL,
Password VARCHAR(100) NOT NULL,
DateOfLastPeriod DATE,
DueDate DATE,
Trimester int,
NumOfWeeks int,
FOREIGN KEY (NumOfWeeks) REFERENCES Baby_Details(NumOfWeeksId)
);

CREATE TABLE Baby_Details(
NumOfWeeksId SERIAL PRIMARY KEY,
Size varchar(50),
Item varchar(50), 
BabyImage varchar(500) NOT NULL
);

CREATE TABLE Common_Symptoms(
SymptomId SERIAL PRIMARY KEY,
NumOfWeeks int,
Symptom varchar(100) NOT NULL,
Description varchar(1000) NOT NULL, 
SymptomImage varchar(500),
FOREIGN KEY (NumOfWeeks) REFERENCES Baby_Details(NumOfWeeksId)
);

CREATE TABLE Baby_Development(
BabyDevelopmentId SERIAL PRIMARY KEY,
NumOfWeeks int,
Description varchar(1000) NOT NULL, 
DevelopmentImage varchar(500),
FOREIGN KEY (NumOfWeeks) REFERENCES Baby_Details(NumOfWeeksId)
);