let isPassing = (grade) => {
    return grade >= 70;
}

let scores = [90,85,67,71,70,50];

/*
let passing = scores.filter(isPassing);
*/

let passing = scores.filter (element => element >=70)

console.log(passing);

//find()
//forEach()
//reduce()
//some()
//keys()
//values()