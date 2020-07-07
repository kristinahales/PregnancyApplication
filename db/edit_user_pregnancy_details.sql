--due date is calculated
UPDATE Users SET dueDate = dateOfLastPeriod + interval '280 day'
WHERE Userid = $1;

--numberofweeks along in pregnancy is calculated
-- UPDATE Users 
-- SET numofweeks = TRUNC(DATE_PART('day', current_date::timestamp - dateofldateOfLastPeriodastperiod::timestamp)/7)
-- WHERE userid = $1;

-- --trimester is calculated
-- UPDATE Users  
-- set trimester = CASE
--                     WHEN numofweeks < 14 THEN 1
--                     WHEN numofweeks >= 14 AND numofweeks < 27 THEN 2
--                     WHEN numofweeks >= 27 THEN 3
--                 END 
-- WHERE userid = $1;

