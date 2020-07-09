select u.*, s.* from users u
join (select bd.*, cs.*
    from baby_details as bd
    join common_Symptoms as cs
    on cs.numofweeks = bd.numofweeksid) as s on
s.numofweeksid = u.numofweeks
where u.userid = $1;