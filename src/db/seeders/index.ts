import { CharacterService } from '../../services/CharacterService'
import { EpisodeService } from '../../services/EpisodeService'
import db from '../models'
import { Character } from '../models/character'
import  {generateCharacterData} from  './characterSeed'
import { generateEpisodeData } from './episodeSeed'

var createdCharacters : number[] = [] 
const runSeeds  =  () =>{
    generateCharacterData().map( async(characterData) =>{
        var character = (await CharacterService.add(characterData))  
        createdCharacters.push( character.id);
    })
    
    generateEpisodeData(createdCharacters).map(async (episode) => {
           EpisodeService.AddEpisode(episode);
    } )
}

const  resetDB  = () =>{
    db.Character.destory()
    db.Episode.destory()

}


export {runSeeds, resetDB}

