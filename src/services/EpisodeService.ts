import db from "../db/models";
import { CharacterRequest } from "../dtos/request/CreateCharacterRequest";
import { EpisodeRequest } from "../dtos/request/createEpisodeRequest";
import { CharacterService } from "./CharacterService";

export class EpisodeService {

    static async AddEpisode(episode: EpisodeRequest){

        var savedEpisode= await db.Episode.create({...episode})
        var characters= await CharacterService.getCharacters( episode.characters);
        characters.map(character =>{  savedEpisode.addCharacter(character); })    
        return savedEpisode;

        
    }

}