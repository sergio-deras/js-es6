//Arrow 2
// They do not add another this

//this.a = 25; Need to remove the preset
let print = function(){
    console.log(this.a)
    //No OK
};
//print();

let arrowPrint = () =>{
    console.log(this.a)
    //OK
};
//arrowPrint();


//Arrow 1
function blastoff(){
    console.log('blast');
}
blastoff();

setTimeout(function(){
    console.log('time to blast')
}, 1000);

setTimeout(() => {
    console.log('arrow blast')
}, 1000);

const blast = () => {
    console.log("Go to blast");
}

blast();

//Destructirng


let wizard = {
    magical: true,
    power: 10
}

let {magical, power} = wizard;
console.log(magical, power);

let ranger = {
    _magical: false,
    _power: 9
}

let {_magical, _power} = ranger;
console.log(_magical, _power);



// Arrays an sets
let c = [1,2,3];
let [a,b] = c;
console.log(a,b);

let d = [1,2,3,4,5];
let [e, ...f] = d;

console.log(e,f);