import { faker } from "@faker-js/faker";
import { EpisodeRequest } from "../../dtos/request/createEpisodeRequest";

const episodeData: Array<EpisodeRequest> = []


const generateEpisodeData  = (characterIds: Array<number>) =>{
        for (var i = 0 ; i <=5; i++){
            
            episodeData.push({
            name: faker.word.verb(100),
            episode_code: faker.unique.toString(),
            characters: characterIds,
            release_date: faker.date.past(),
            created_at: new Date(),
        });
     }

     return episodeData;
}
 export   {generateEpisodeData}