export interface EpisodeRequest {
    name: string;
    episode_code: string;
    release_date: Date;
    created_at?: Date;
    characters : Array<number>

}
