CREATE TABLE Users(
--SERIAL = Auto Increment in Postgres
UserId SERIAL PRIMARY KEY,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
Username VARCHAR(20) NOT NULL,
Password VARCHAR(100) NOT NULL
);

CREATE TABLE Trimester (
TrimesterId SERIAL PRIMARY KEY,
TrimesterDescription VARCHAR(50)
);

CREATE TABLE Baby_Details(
NumOfWeeksId SERIAL PRIMARY KEY,
Size varchar(50),
Item varchar(50), 
BabyImage varchar(500) NOT NULL
);

CREATE TABLE Pregnancy_Details (
DetailsId SERIAL PRIMARY KEY,
UserId int,
DateOfLastPeriod DATE,
DueDate DATE,
Trimester int,
NumOfWeeks int,
FOREIGN KEY (UserId) REFERENCES Users(UserId),
FOREIGN KEY (NumOfWeeks) REFERENCES Baby_Details(NumOfWeeksId),
FOREIGN KEY (Trimester) REFERENCES Trimester(TrimesterId)
);

CREATE TABLE Trimester_Topics (
TopicId SERIAL PRIMARY KEY,
Topic varchar(100),
Trimester int,
FOREIGN KEY (Trimester) REFERENCES Trimester(TrimesterId)
);

CREATE TABLE Articles (
ArticlesId  SERIAL PRIMARY KEY,
Title varchar(255) NOT NULL,
ArticleImage varchar(500), 
ArticleText varchar(10000) NOT NULL,
TopicId int,
FOREIGN KEY (TopicId) REFERENCES Trimester_Topics(TopicId)
);

CREATE TABLE Common_Symptoms(
SymptomId SERIAL PRIMARY KEY,
Symptom varchar(100) NOT NULL,
Description varchar(1000) NOT NULL, 
SymptomImage varchar(500),
NumOfWeeks int,
FOREIGN KEY (NumOfWeeks) REFERENCES Baby_Details(NumOfWeeksId)
);
