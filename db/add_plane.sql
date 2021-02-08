INSERT INTO airplanes
(plane_type, passenger_count)
VALUES
($1, $2);
/*will be supplied by user so we don't know yet*/
/*can be arrays or objects, this one above is array, below is obj*/
/*(${ type }, ${ passengers })

SELECT * FROM airplanes
