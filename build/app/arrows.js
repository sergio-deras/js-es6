let points = [10,20,30];

let add = (element) => {
    return element + 1;
}

points = points.map( add );

console.log(points);

points = points.map ( 
    (element) => {return element + 2 }
);

console.log(points);

points = points.map ( 
    element => {return element + 3}
);

console.log(points);

points = points.map ( 
    (element) => element + 4
);

console.log(points);

points = points.map ( 
    element => element + 5
);

console.log(points);