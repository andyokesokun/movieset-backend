import { CharacterFilter } from "../const";
import db from "../db/models";
import { Character } from "../db/models/character";
import { CharacterFilterRequest, CharacterSortRequest } from "../dtos/request/characterfilterRequest";
import { CharacterRequest } from "../dtos/request/CreateCharacterRequest";

export class CharacterService {

    static async add(character: CharacterRequest): Promise<Character>{
       return await db.Character.create(character)  
    }

    static async getCharacters(characterId: Array<number>){    
        return (await db.Character.findAll({where:{id: characterId}}) ) as Array<Character>;
                  
    }

    // static async getCharacterByName(name: string>){    

    //     return (await db.Character.findAll({where:{first: characterId}}) ) as Array<Character>;
                  
    // }

    static async getCharactersWithFilters(filters?: CharacterFilterRequest ,  sort?: CharacterSortRequest){  
        
        type paramType = { order?: Array<any>, where?: any  } 
        
        var queryParams : paramType  = {};

        if(sort?.sortOrder && sort?.sortOrder){
           
            let orderColumns = sort.sortby.split(',');
         
            orderColumns.map( (column) =>{   
                 if( column  ==  CharacterFilter.NAME) {
                    queryParams.order?.push([CharacterFilter.FIRSTNAME, sort.sortOrder]) 
                    queryParams.order?.push([CharacterFilter.LASTNAME, sort.sortOrder]) 
                 }else{
                   queryParams.order?.push([column, sort.sortOrder])  
                 }
             })
            
        }

        if(filters?.status){
             queryParams.where.name = filters.status 
        }

        if(filters?.gender){
            queryParams.where.gender = filters.gender 
        }
        
        if(filters?.location){
            queryParams.where.location = filters.location 
        }

        return (await db.Character.findAll(queryParams) ) as Array<Character>;
                  
    }

}