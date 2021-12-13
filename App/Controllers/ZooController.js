import { Alligator } from "../Models/Alligator.js";
import { Bear } from "../Models/Bear.js";
import { Capybara } from "../Models/Capybara.js";
import { Dolphin } from "../Models/Dolphin.js";
import { Elephant } from "../Models/Elephant.js";
import { Flamingo } from "../Models/Flamingo.js";
import { Gecko } from "../Models/Gecko.js";
import { Horse } from "../Models/Horse.js";
import { Impala } from "../Models/Impala.js";
import { Jaguar } from "../Models/Jaguar.js";
import { Koala } from "../Models/Koala.js";
import { Lion } from "../Models/Lion.js";
import { Monkey } from "../Models/Monkey.js";
import { Narwhal } from "../Models/Narwhal.js";
import { Octopus } from "../Models/Octopus.js";
import { Penguin } from "../Models/Penguin.js";
import { Quail } from "../Models/Quail.js";
import { Rhino } from "../Models/Rhino.js";
import { Shark } from "../Models/Shark.js";
import { Turtle } from "../Models/Turtle.js";
import { Unau } from "../Models/Unau.js";
import { Vulture } from "../Models/Vulture.js";
import { Wolf } from "../Models/Wolf.js";
import { Xenops } from "../Models/Xenops.js";
import { Yeti } from "../Models/Yeti.js";
import { Zebra } from "../Models/Zebra.js";

const animals = {
  alligator: new Alligator('Ted', 'green', 'male'),
  bear: new Bear('Frank', 'brown', 'male'),
  capybara: new Capybara('Carol', 'brown', 'female'),
  dolphin: new Dolphin('Hanna', 'grey', 'female'),
  elephant: new Elephant('Moti', 'grey', 'female'),
  flamingo: new Flamingo('Chrizanne', 'pink', 'female'),
  gecko: new Gecko('Iokua', 'green', 'male'),
  horse: new Horse('Mór', 'black', 'male'),
  impala: new Impala('Adhiambo', 'brown', 'male'),
  jaguar: new Jaguar('Ndidi', 'black', 'female'),
  kopala: new Koala('Chioma', 'brown', 'female'),
  lion: new Lion('Kodjo', 'gold', 'male'),
  monkey: new Monkey('Nyah', 'black', 'female'),
  narwhal: new Narwhal('Ella', 'blue', 'female'),
  octopus: new Octopus('Dorotheos', 'blue', 'female'),
  penguin: new Penguin('Bogdan', 'black', 'male'),
  quail: new Quail('Stig', 'black', 'male'),
  rhino: new Rhino('Afi', 'white', 'female'),
  shark: new Shark('Akachi', 'white', 'female'),
  turtle: new Turtle('Makana', 'green', 'female'),
  unau: new Unau('Makaio', 'brown', 'male'),
  vulture: new Vulture('Renat', 'black', 'female'),
  wolf: new Wolf('Ljubiša', 'grey', 'female'),
  xenops: new Xenops('Doug', 'brown', 'male'),
  yeti: new Yeti('Đurađ', 'white', 'female'),
  zebra: new Zebra('Koffi', 'white', 'male'),

}

function _drawAnimals() {



}


export class ZooController {
  constructor() {
    console.log(animals);


  }
}

// printListItem() {
//   return `<li onclick="restaurantController.order('${this.name}')"</li>`
// }
