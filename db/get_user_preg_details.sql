select b.size, b.item, b.babyimage, p.dateoflastperiod, p.duedate, p.trimester from baby_details b
join user_pregnancy_details p on p.numofweeks = b.numofweeksid 
where p.userid = $1;