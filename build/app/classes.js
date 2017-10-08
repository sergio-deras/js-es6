import Entity from './Entity';

class Hobbit extends Entity{
    greet(){
        console.log(`Hi, I am ${this.name} from the Shire!`)
    }
}
let Merry = new Hobbit('Merry', 4.6);
Merry.greet();