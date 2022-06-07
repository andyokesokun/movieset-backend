import { CharacterRequest } from "../request/CreateCharacterRequest";
import { EpisodeResponse } from "./episodeResponse";

export interface CharacterResponse extends CharacterRequest {
    episode: Array<EpisodeResponse>

}