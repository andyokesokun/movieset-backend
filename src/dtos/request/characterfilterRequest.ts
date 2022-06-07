import { CharacterRequest } from "./CreateCharacterRequest";

export interface CharacterFilterRequest {
    status?: string;
    gender?: string;
    location?: string;
} 

export interface CharacterSortRequest {
    sortby: string;
    sortOrder: string;

} 
