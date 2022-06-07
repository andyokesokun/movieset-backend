import { CommentRequest } from "../request/commentRequest";
import { EpisodeRequest } from "../request/createEpisodeRequest";

export interface EpisodeResponse extends Omit<EpisodeRequest , 'characters'> {
    comments : Array<CommentRequest> 
}