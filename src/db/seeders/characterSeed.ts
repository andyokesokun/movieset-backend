import { faker, Gender } from '@faker-js/faker';
import { generateRandNumber } from "../../utils";
import { Status } from "../../const";
import { Character } from '../models/character';
import { CharacterRequest } from '../../dtos/request/CreateCharacterRequest';


const characterData: Array<CharacterRequest> = []

const generateCharacterData  = () =>{
   for (var i = 0 ; i <=10; i++){
      
         var gender =  generateRandNumber(0,1) ? Gender.male : Gender.female;
         var status  = [Status.ACTIVE, Status.UNKNOWN, Status.DEAD]
         var person  = faker.name;
         characterData.push({
         first_name: person.firstName(),
         last_name: person.lastName(),
         gender: person.gender(),
         status: status[generateRandNumber(0,2)],
         location: `${ faker.address.country()} ${faker.address.city()}`,
         created_at: new Date()
      });
   }
   return characterData;
}
 export  {generateCharacterData}