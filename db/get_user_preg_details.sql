select u.firstname, u.dateoflastperiod, u.duedate, u.trimester, u.numofweeks, b.size, b.item, b.babyimage,
(select json_agg(i)
    from (
    select s.symptom, s.description, s.symptomimage, bd.numofweeksid
    from baby_details as bd
    join common_symptoms as s
    on bd.numofweeksid= s.numofweeks
    ) as i
    where i.numofweeksid = u.numofweeks
) as symptoms,
(select json_agg(p)
    from (
    select d.description, d.developmentimage, bd.numofweeksid
    from baby_development as d
    join baby_details as bd
    on bd.numofweeksid = d.numofweeks
    ) as p
    where p.numofweeksid = u.numofweeks
) as babyDevelopment
from users as u join baby_details b on b.numofweeksid = u.numofweeks 
WHERE u.userid = $1;